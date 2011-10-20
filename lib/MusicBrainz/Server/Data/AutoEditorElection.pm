package MusicBrainz::Server::Data::AutoEditorElection;
use Moose;

use MusicBrainz::Server::Entity::AutoEditorElection;
use MusicBrainz::Server::Data::Utils qw( hash_to_row );
use MusicBrainz::Server::Types qw( :election_status );

extends 'MusicBrainz::Server::Data::Entity';

sub _table
{
    return 'autoeditor_election';
}

sub _columns
{
    return 'id, candidate, proposer, seconder_1, seconder_2, status,
        yes_votes, no_votes, propose_time, open_time, close_time';
}

sub _column_mapping
{
    return {
        id => 'id',
        candidate_id  => 'candidate',
        proposer_id => 'proposer',
        seconder_1_id => 'seconder_1',
        seconder_2_id => 'seconder_2',
        status => 'status',
        yes_votes => 'yes_votes',
        no_votes => 'no_votes',
        propose_time => 'propose_time',
        open_time => 'open_time',
        close_time => 'close_time',
    };
}

sub _entity_class
{
    return 'MusicBrainz::Server::Entity::AutoEditorElection';
}

sub nominate
{
    my ($self, $candidate, $proposer) = @_;

    my $sql = $self->c->sql;
    return Sql::run_in_transaction(sub {
       
        $sql->do("LOCK TABLE autoeditor_election IN EXCLUSIVE MODE");

        my $id = $sql->select_single_value("
            SELECT id FROM autoeditor_election
            WHERE candidate = ? AND status IN (?, ?, ?)",
            $candidate->id, $ELECTION_SECONDER_1, $ELECTION_SECONDER_2,
            $ELECTION_OPEN);
        return $self->_entity_class->new( id => $id )
            if defined $id;

        my $row = {
            candidate => $candidate->id,
            proposer => $proposer->id,
        };
        $id = $self->sql->insert_row($self->_table, $row, 'id');
        return $self->_entity_class->new( id => $id );

    }, $sql);
}

__PACKAGE__->meta->make_immutable;
no Moose;
1;

=head1 COPYRIGHT

Copyright (C) 2011 Lukas Lalinsky

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.

=cut
