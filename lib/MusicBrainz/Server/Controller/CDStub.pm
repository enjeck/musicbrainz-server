package MusicBrainz::Server::Controller::CDStub;
use Moose;
use MusicBrainz::Server::Validation qw( is_valid_discid );
BEGIN { extends 'MusicBrainz::Server::Controller'; }

use aliased 'MusicBrainz::Server::Entity::CDTOC';

use MusicBrainz::Server::Translation qw( l );
use MusicBrainz::Server::ControllerUtils::CDTOC qw( add_dash );

with 'MusicBrainz::Server::Controller::Role::Load' => {
    model       => 'CDStub',
    entity_name => 'cdstub',
};

sub base : Chained('/') PathPart('cdstub') CaptureArgs(0) { }

sub _load
{
    my ($self, $c, $id) = @_;

    add_dash($c, $id);

    if (!is_valid_discid($id)) {
        $c->stash(
                template  => 'cdstub/error.tt',
                not_valid => 1,
                discid    => $id
                );
        $c->detach;
        return;
    }
    my $cdstub = $c->model('CDStub')->get_by_discid($id);
    if (!$cdstub) {
        $c->stash(
                template  => 'cdstub/error.tt',
                not_found => 1,
                discid    => $id
                );
        $c->detach;
        return;
    }
    $c->model('CDStubTrack')->load_for_cdstub($cdstub);
    $cdstub->update_track_lengths;

    $c->stash->{show_artists} = !defined($cdstub->artist) ||
                                $cdstub->artist eq '';
    $c->stash->{cdstub} = $cdstub;
}

sub add : Path('add') DenyWhenReadonly
{
    my ($self, $c) = @_;

    if ($c->user_exists) {
        $c->res->code(403);
        $c->stash( template => 'cdstub/logged_in.tt' );
    }

    my $toc = CDTOC->new_from_toc( $c->req->query_params->{toc} );
    if (!$toc) {
        $c->stash( message => l('The required TOC parameter was invalid or not present') );
        $c->detach('/error_400');
    }

    if ($c->model('CDStub')->get_by_discid($toc->discid)) {
        $c->response->redirect(
            $c->uri_for_action('/cdstub/show', [ $toc->discid ]));
        $c->detach;
    }

    if ($c->model('CDTOC')->get_by_discid($toc->discid)) {
        $c->response->redirect(
            $c->uri_for_action('/cdtoc/show', [ $toc->discid ]));
        $c->detach;
    }

    my $form = $c->form(
        form => 'CDStub',
        init_object => {
            tracks => [ map +{}, (1..$toc->track_count) ]
        }
    );
    $c->stash( template => 'cdstub/add.tt' );
    if ($c->form_posted_and_valid($form)) {
        my $form_val = $form->value;
        $c->model('CDStub')->insert({
            %$form_val,
            toc => $toc->toc,
            discid => $toc->discid
        });

        $c->response->redirect($c->uri_for_action('/cdstub/show', [ $toc->discid ]));
        $c->detach;
    }
}

sub show : Chained('load') PathPart('')
{
    my ($self, $c) = @_;

    $c->stash( template => 'cdstub/index.tt' );
}

sub browse : Path('browse')
{
    my ($self, $c) = @_;

    my $stubs = $self->_load_paged($c, sub {
                    $c->model('CDStub')->load_top_cdstubs(shift, shift);
                });
    $c->stash(
              template => 'cdstub/browse.tt',
              cdstubs  => $stubs
             );
}

sub edit : Chained('load') DenyWhenReadonly
{
    my ($self, $c) = @_;
    my $cdstub = $c->stash->{cdstub};

    my $form = $c->form(form => 'CDStub', init_object => $cdstub);
    if ($c->form_posted_and_valid($form)) {
        $c->model('CDStub')->update($cdstub, $form->value);

        $c->res->redirect(
            $c->uri_for_action($self->action_for('show'), [ $cdstub->discid ])
        );
    }
}

sub import : Chained('load') RequireAuth
{
    my ($self, $c) = @_;
    my $cdstub = $c->stash->{cdstub};

    my $search_query = $cdstub->artist || 'Various Artists';
    my $form = $c->form(
        form => 'Search::Query',
        item => { query => $search_query }
    );
    if ($c->form_posted_and_valid($form)) {
        $search_query = $form->field('query')->value;
    }

    $c->stash(
        artists => $self->_load_paged($c, sub {
            $c->model('Search')->search('artist', $search_query, shift, shift);
        })
    );
}

=head1 COPYRIGHT AND LICENSE

Copyright (C) 2010 MetaBrainz Foundation

This file is part of MusicBrainz, the open internet music database,
and is licensed under the GPL version 2, or (at your option) any
later version: http://www.gnu.org/licenses/gpl-2.0.txt

=cut

1;
