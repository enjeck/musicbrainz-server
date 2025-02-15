/*
 * @flow strict
 * Copyright (C) 2018 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

export const EDIT_ARTIST_CREATE: EDIT_ARTIST_CREATE_T = 1;
export const EDIT_ARTIST_EDIT: EDIT_ARTIST_EDIT_T = 2;
export const EDIT_ARTIST_DELETE: EDIT_ARTIST_DELETE_T = 3;
export const EDIT_ARTIST_MERGE: EDIT_ARTIST_MERGE_T = 4;
export const EDIT_ARTIST_ADD_ANNOTATION: EDIT_ARTIST_ADD_ANNOTATION_T = 5;
export const EDIT_ARTIST_ADD_ALIAS: EDIT_ARTIST_ADD_ALIAS_T = 6;
export const EDIT_ARTIST_DELETE_ALIAS: EDIT_ARTIST_DELETE_ALIAS_T = 7;
export const EDIT_ARTIST_EDIT_ALIAS: EDIT_ARTIST_EDIT_ALIAS_T = 8;
export const EDIT_ARTIST_EDITCREDIT: EDIT_ARTIST_EDITCREDIT_T = 9;

export const EDIT_LABEL_CREATE: EDIT_LABEL_CREATE_T = 10;
export const EDIT_LABEL_EDIT: EDIT_LABEL_EDIT_T = 11;
export const EDIT_LABEL_DELETE: EDIT_LABEL_DELETE_T = 13;
export const EDIT_LABEL_MERGE: EDIT_LABEL_MERGE_T = 14;
export const EDIT_LABEL_ADD_ANNOTATION: EDIT_LABEL_ADD_ANNOTATION_T = 15;
export const EDIT_LABEL_ADD_ALIAS: EDIT_LABEL_ADD_ALIAS_T = 16;
export const EDIT_LABEL_DELETE_ALIAS: EDIT_LABEL_DELETE_ALIAS_T = 17;
export const EDIT_LABEL_EDIT_ALIAS: EDIT_LABEL_EDIT_ALIAS_T = 18;

export const EDIT_RELEASEGROUP_CREATE: EDIT_RELEASEGROUP_CREATE_T = 20;
export const EDIT_RELEASEGROUP_EDIT: EDIT_RELEASEGROUP_EDIT_T = 21;
export const EDIT_RELEASEGROUP_SET_COVER_ART:
  EDIT_RELEASEGROUP_SET_COVER_ART_T = 22;
export const EDIT_RELEASEGROUP_DELETE: EDIT_RELEASEGROUP_DELETE_T = 23;
export const EDIT_RELEASEGROUP_MERGE: EDIT_RELEASEGROUP_MERGE_T = 24;
export const EDIT_RELEASEGROUP_ADD_ANNOTATION:
  EDIT_RELEASEGROUP_ADD_ANNOTATION_T = 25;
export const EDIT_RELEASEGROUP_ADD_ALIAS: EDIT_RELEASEGROUP_ADD_ALIAS_T = 26;
export const EDIT_RELEASEGROUP_DELETE_ALIAS:
  EDIT_RELEASEGROUP_DELETE_ALIAS_T = 27;
export const EDIT_RELEASEGROUP_EDIT_ALIAS:
  EDIT_RELEASEGROUP_EDIT_ALIAS_T = 28;

export const EDIT_RELEASE_CREATE: EDIT_RELEASE_CREATE_T = 31;
export const EDIT_RELEASE_EDIT: EDIT_RELEASE_EDIT_T = 32;
export const EDIT_RELEASE_MOVE: EDIT_RELEASE_MOVE_T = 33;
export const EDIT_RELEASE_ADDRELEASELABEL:
  EDIT_RELEASE_ADDRELEASELABEL_T = 34;
export const EDIT_RELEASE_ADD_ANNOTATION: EDIT_RELEASE_ADD_ANNOTATION_T = 35;
export const EDIT_RELEASE_DELETERELEASELABEL:
  EDIT_RELEASE_DELETERELEASELABEL_T = 36;
export const EDIT_RELEASE_EDITRELEASELABEL:
  EDIT_RELEASE_EDITRELEASELABEL_T = 37;
export const EDIT_RELEASE_CHANGE_QUALITY: EDIT_RELEASE_CHANGE_QUALITY_T = 38;
export const EDIT_RELEASE_EDIT_BARCODES: EDIT_RELEASE_EDIT_BARCODES_T = 39;
export const EDIT_RELEASE_DELETE: EDIT_RELEASE_DELETE_T = 310;
export const EDIT_RELEASE_MERGE: EDIT_RELEASE_MERGE_T = 311;
export const EDIT_RELEASE_ARTIST: EDIT_RELEASE_ARTIST_T = 312;
export const EDIT_RELEASE_REORDER_MEDIUMS:
  EDIT_RELEASE_REORDER_MEDIUMS_T = 313;
export const EDIT_RELEASE_ADD_COVER_ART: EDIT_RELEASE_ADD_COVER_ART_T = 314;
export const EDIT_RELEASE_REMOVE_COVER_ART:
  EDIT_RELEASE_REMOVE_COVER_ART_T = 315;
export const EDIT_RELEASE_EDIT_COVER_ART: EDIT_RELEASE_EDIT_COVER_ART_T = 316;
export const EDIT_RELEASE_REORDER_COVER_ART:
  EDIT_RELEASE_REORDER_COVER_ART_T = 317;
export const EDIT_RELEASE_ADD_ALIAS: EDIT_RELEASE_ADD_ALIAS_T = 318;
export const EDIT_RELEASE_DELETE_ALIAS: EDIT_RELEASE_DELETE_ALIAS_T = 319;
export const EDIT_RELEASE_EDIT_ALIAS: EDIT_RELEASE_EDIT_ALIAS_T = 320;

export const EDIT_WORK_CREATE: EDIT_WORK_CREATE_T = 41;
export const EDIT_WORK_EDIT: EDIT_WORK_EDIT_T = 42;
export const EDIT_WORK_DELETE: EDIT_WORK_DELETE_T = 43;
export const EDIT_WORK_MERGE: EDIT_WORK_MERGE_T = 44;
export const EDIT_WORK_ADD_ANNOTATION: EDIT_WORK_ADD_ANNOTATION_T = 45;
export const EDIT_WORK_ADD_ALIAS: EDIT_WORK_ADD_ALIAS_T = 46;
export const EDIT_WORK_DELETE_ALIAS: EDIT_WORK_DELETE_ALIAS_T = 47;
export const EDIT_WORK_EDIT_ALIAS: EDIT_WORK_EDIT_ALIAS_T = 48;
export const EDIT_WORK_ADD_ISWCS: EDIT_WORK_ADD_ISWCS_T = 49;
export const EDIT_WORK_REMOVE_ISWC: EDIT_WORK_REMOVE_ISWC_T = 410;

export const EDIT_MEDIUM_CREATE: EDIT_MEDIUM_CREATE_T = 51;
export const EDIT_MEDIUM_EDIT: EDIT_MEDIUM_EDIT_T = 52;
export const EDIT_MEDIUM_DELETE: EDIT_MEDIUM_DELETE_T = 53;
export const EDIT_MEDIUM_REMOVE_DISCID: EDIT_MEDIUM_REMOVE_DISCID_T = 54;
export const EDIT_MEDIUM_ADD_DISCID: EDIT_MEDIUM_ADD_DISCID_T = 55;
export const EDIT_MEDIUM_MOVE_DISCID: EDIT_MEDIUM_MOVE_DISCID_T = 56;
export const EDIT_SET_TRACK_LENGTHS: EDIT_SET_TRACK_LENGTHS_T = 58;

export const EDIT_PLACE_CREATE: EDIT_PLACE_CREATE_T = 61;
export const EDIT_PLACE_EDIT: EDIT_PLACE_EDIT_T = 62;
export const EDIT_PLACE_DELETE: EDIT_PLACE_DELETE_T = 63;
export const EDIT_PLACE_MERGE: EDIT_PLACE_MERGE_T = 64;
export const EDIT_PLACE_ADD_ANNOTATION: EDIT_PLACE_ADD_ANNOTATION_T = 65;
export const EDIT_PLACE_ADD_ALIAS: EDIT_PLACE_ADD_ALIAS_T = 66;
export const EDIT_PLACE_DELETE_ALIAS: EDIT_PLACE_DELETE_ALIAS_T = 67;
export const EDIT_PLACE_EDIT_ALIAS: EDIT_PLACE_EDIT_ALIAS_T = 68;

export const EDIT_RECORDING_CREATE: EDIT_RECORDING_CREATE_T = 71;
export const EDIT_RECORDING_EDIT: EDIT_RECORDING_EDIT_T = 72;
export const EDIT_RECORDING_DELETE: EDIT_RECORDING_DELETE_T = 73;
export const EDIT_RECORDING_MERGE: EDIT_RECORDING_MERGE_T = 74;
export const EDIT_RECORDING_ADD_ANNOTATION:
  EDIT_RECORDING_ADD_ANNOTATION_T = 75;
export const EDIT_RECORDING_ADD_ISRCS: EDIT_RECORDING_ADD_ISRCS_T = 76;
export const EDIT_RECORDING_REMOVE_ISRC: EDIT_RECORDING_REMOVE_ISRC_T = 78;
export const EDIT_RECORDING_ADD_ALIAS: EDIT_RECORDING_ADD_ALIAS_T = 711;
export const EDIT_RECORDING_DELETE_ALIAS: EDIT_RECORDING_DELETE_ALIAS_T = 712;
export const EDIT_RECORDING_EDIT_ALIAS: EDIT_RECORDING_EDIT_ALIAS_T = 713;

export const EDIT_AREA_CREATE: EDIT_AREA_CREATE_T = 81;
export const EDIT_AREA_EDIT: EDIT_AREA_EDIT_T = 82;
export const EDIT_AREA_DELETE: EDIT_AREA_DELETE_T = 83;
export const EDIT_AREA_MERGE: EDIT_AREA_MERGE_T = 84;
export const EDIT_AREA_ADD_ANNOTATION: EDIT_AREA_ADD_ANNOTATION_T = 85;
export const EDIT_AREA_ADD_ALIAS: EDIT_AREA_ADD_ALIAS_T = 86;
export const EDIT_AREA_DELETE_ALIAS: EDIT_AREA_DELETE_ALIAS_T = 87;
export const EDIT_AREA_EDIT_ALIAS: EDIT_AREA_EDIT_ALIAS_T = 88;

export const EDIT_RELATIONSHIP_CREATE: EDIT_RELATIONSHIP_CREATE_T = 90;
export const EDIT_RELATIONSHIP_EDIT: EDIT_RELATIONSHIP_EDIT_T = 91;
export const EDIT_RELATIONSHIP_DELETE: EDIT_RELATIONSHIP_DELETE_T = 92;
export const EDIT_RELATIONSHIP_REMOVE_LINK_TYPE:
  EDIT_RELATIONSHIP_REMOVE_LINK_TYPE_T = 93;
export const EDIT_RELATIONSHIP_REMOVE_LINK_ATTRIBUTE:
  EDIT_RELATIONSHIP_REMOVE_LINK_ATTRIBUTE_T = 94;
export const EDIT_RELATIONSHIP_EDIT_LINK_TYPE:
  EDIT_RELATIONSHIP_EDIT_LINK_TYPE_T = 95;
export const EDIT_RELATIONSHIP_ADD_TYPE: EDIT_RELATIONSHIP_ADD_TYPE_T = 96;
export const EDIT_RELATIONSHIP_ATTRIBUTE: EDIT_RELATIONSHIP_ATTRIBUTE_T = 97;
export const EDIT_RELATIONSHIP_ADD_ATTRIBUTE:
  EDIT_RELATIONSHIP_ADD_ATTRIBUTE_T = 98;
export const EDIT_RELATIONSHIPS_REORDER: EDIT_RELATIONSHIPS_REORDER_T = 99;

export const EDIT_SERIES_CREATE: EDIT_SERIES_CREATE_T = 140;
export const EDIT_SERIES_EDIT: EDIT_SERIES_EDIT_T = 141;
export const EDIT_SERIES_DELETE: EDIT_SERIES_DELETE_T = 142;
export const EDIT_SERIES_MERGE: EDIT_SERIES_MERGE_T = 143;
export const EDIT_SERIES_ADD_ANNOTATION: EDIT_SERIES_ADD_ANNOTATION_T = 144;
export const EDIT_SERIES_ADD_ALIAS: EDIT_SERIES_ADD_ALIAS_T = 145;
export const EDIT_SERIES_DELETE_ALIAS: EDIT_SERIES_DELETE_ALIAS_T = 146;
export const EDIT_SERIES_EDIT_ALIAS: EDIT_SERIES_EDIT_ALIAS_T = 147;

export const EDIT_INSTRUMENT_CREATE: EDIT_INSTRUMENT_CREATE_T = 131;
export const EDIT_INSTRUMENT_EDIT: EDIT_INSTRUMENT_EDIT_T = 132;
export const EDIT_INSTRUMENT_DELETE: EDIT_INSTRUMENT_DELETE_T = 133;
export const EDIT_INSTRUMENT_MERGE: EDIT_INSTRUMENT_MERGE_T = 134;
export const EDIT_INSTRUMENT_ADD_ANNOTATION:
  EDIT_INSTRUMENT_ADD_ANNOTATION_T = 135;
export const EDIT_INSTRUMENT_ADD_ALIAS: EDIT_INSTRUMENT_ADD_ALIAS_T = 136;
export const EDIT_INSTRUMENT_DELETE_ALIAS:
  EDIT_INSTRUMENT_DELETE_ALIAS_T = 137;
export const EDIT_INSTRUMENT_EDIT_ALIAS: EDIT_INSTRUMENT_EDIT_ALIAS_T = 138;

export const EDIT_EVENT_CREATE: EDIT_EVENT_CREATE_T = 150;
export const EDIT_EVENT_EDIT: EDIT_EVENT_EDIT_T = 151;
export const EDIT_EVENT_DELETE: EDIT_EVENT_DELETE_T = 152;
export const EDIT_EVENT_MERGE: EDIT_EVENT_MERGE_T = 153;
export const EDIT_EVENT_ADD_ANNOTATION: EDIT_EVENT_ADD_ANNOTATION_T = 154;
export const EDIT_EVENT_ADD_ALIAS: EDIT_EVENT_ADD_ALIAS_T = 155;
export const EDIT_EVENT_DELETE_ALIAS: EDIT_EVENT_DELETE_ALIAS_T = 156;
export const EDIT_EVENT_EDIT_ALIAS: EDIT_EVENT_EDIT_ALIAS_T = 157;

export const EDIT_WIKIDOC_CHANGE: EDIT_WIKIDOC_CHANGE_T = 120;

export const EDIT_URL_EDIT: EDIT_URL_EDIT_T = 101;

export const EDIT_HISTORIC_EDIT_RELEASE_NAME:
  EDIT_HISTORIC_EDIT_RELEASE_NAME_T = 201;
export const EDIT_HISTORIC_EDIT_TRACKNAME:
  EDIT_HISTORIC_EDIT_TRACKNAME_T = 204;
export const EDIT_HISTORIC_EDIT_TRACKNUM: EDIT_HISTORIC_EDIT_TRACKNUM_T = 205;
export const EDIT_HISTORIC_ADD_TRACK: EDIT_HISTORIC_ADD_TRACK_T = 207;
export const EDIT_HISTORIC_MOVE_RELEASE: EDIT_HISTORIC_MOVE_RELEASE_T = 208;
export const EDIT_HISTORIC_SAC_TO_MAC: EDIT_HISTORIC_SAC_TO_MAC_T = 209;
export const EDIT_HISTORIC_CHANGE_TRACK_ARTIST:
  EDIT_HISTORIC_CHANGE_TRACK_ARTIST_T = 210;
export const EDIT_HISTORIC_REMOVE_TRACK: EDIT_HISTORIC_REMOVE_TRACK_T = 211;
export const EDIT_HISTORIC_REMOVE_RELEASE:
  EDIT_HISTORIC_REMOVE_RELEASE_T = 212;
export const EDIT_HISTORIC_MAC_TO_SAC: EDIT_HISTORIC_MAC_TO_SAC_T = 213;
export const EDIT_HISTORIC_ADD_RELEASE: EDIT_HISTORIC_ADD_RELEASE_T = 216;
export const EDIT_HISTORIC_ADD_TRACK_KV: EDIT_HISTORIC_ADD_TRACK_KV_T = 218;
export const EDIT_HISTORIC_REMOVE_DISCID: EDIT_HISTORIC_REMOVE_DISCID_T = 220;
export const EDIT_HISTORIC_MOVE_DISCID: EDIT_HISTORIC_MOVE_DISCID_T = 221;
export const EDIT_HISTORIC_MERGE_RELEASE: EDIT_HISTORIC_MERGE_RELEASE_T = 223;
export const EDIT_HISTORIC_REMOVE_RELEASES:
  EDIT_HISTORIC_REMOVE_RELEASES_T = 224;
export const EDIT_HISTORIC_MERGE_RELEASE_MAC:
  EDIT_HISTORIC_MERGE_RELEASE_MAC_T = 225;
export const EDIT_HISTORIC_EDIT_RELEASE_ATTRS:
  EDIT_HISTORIC_EDIT_RELEASE_ATTRS_T = 226;
export const EDIT_HISTORIC_EDIT_RELEASE_EVENTS_OLD:
  EDIT_HISTORIC_EDIT_RELEASE_EVENTS_OLD_T = 229;
export const EDIT_HISTORIC_ADD_RELEASE_ANNOTATION:
  EDIT_HISTORIC_ADD_RELEASE_ANNOTATION_T = 231;
export const EDIT_HISTORIC_ADD_DISCID: EDIT_HISTORIC_ADD_DISCID_T = 232;
export const EDIT_HISTORIC_ADD_LINK: EDIT_HISTORIC_ADD_LINK_T = 233;
export const EDIT_HISTORIC_EDIT_LINK: EDIT_HISTORIC_EDIT_LINK_T = 234;
export const EDIT_HISTORIC_REMOVE_LINK: EDIT_HISTORIC_REMOVE_LINK_T = 235;
export const EDIT_HISTORIC_EDIT_LINK_TYPE:
  EDIT_HISTORIC_EDIT_LINK_TYPE_T = 237;
export const EDIT_HISTORIC_REMOVE_LINK_TYPE:
  EDIT_HISTORIC_REMOVE_LINK_TYPE_T = 238;
export const EDIT_HISTORIC_EDIT_RELEASE_LANGUAGE:
  EDIT_HISTORIC_EDIT_RELEASE_LANGUAGE_T = 244;
export const EDIT_HISTORIC_EDIT_TRACK_LENGTH:
  EDIT_HISTORIC_EDIT_TRACK_LENGTH_T = 245;
export const EDIT_HISTORIC_ADD_RELEASE_EVENTS:
  EDIT_HISTORIC_ADD_RELEASE_EVENTS_T = 249;
export const EDIT_HISTORIC_EDIT_RELEASE_EVENTS:
  EDIT_HISTORIC_EDIT_RELEASE_EVENTS_T = 250;
export const EDIT_HISTORIC_REMOVE_RELEASE_EVENTS:
  EDIT_HISTORIC_REMOVE_RELEASE_EVENTS_T = 251;
export const EDIT_HISTORIC_CHANGE_ARTIST_QUALITY:
  EDIT_HISTORIC_CHANGE_ARTIST_QUALITY_T = 252;
export const EDIT_HISTORIC_SET_TRACK_LENGTHS_FROM_CDTOC:
  EDIT_HISTORIC_SET_TRACK_LENGTHS_FROM_CDTOC_T = 253;
export const EDIT_HISTORIC_REMOVE_LABEL_ALIAS:
  EDIT_HISTORIC_REMOVE_LABEL_ALIAS_T = 262;
export const EDIT_HISTORIC_CHANGE_RELEASE_QUALITY:
  EDIT_HISTORIC_CHANGE_RELEASE_QUALITY_T = 263;
export const EDIT_HISTORIC_CHANGE_RELEASE_GROUP:
  EDIT_HISTORIC_CHANGE_RELEASE_GROUP_T = 273;
