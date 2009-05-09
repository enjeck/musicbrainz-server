package MusicBrainz::Server::Data::Language;

use Moose;
use MusicBrainz::Server::Entity::Language;

extends 'MusicBrainz::Server::Data::Entity';

sub _table
{
    return 'language';
}

sub _columns
{
    return 'id, isocode_3t AS iso_code_3t, isocode_3b AS iso_code_3b, ' .
           'isocode_2 AS iso_code_2, name, frequency';
}

sub _entity_class
{
    return 'MusicBrainz::Server::Entity::Language';
}

__PACKAGE__->meta->make_immutable;
no Moose;
1;

=head1 COPYRIGHT

Copyright (C) 2009 Lukas Lalinsky

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
