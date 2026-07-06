# frozen_string_literal: true

# Typed models for the XenoCanto SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Recording entity data model.
#
# @!attribute [rw] also
#   @return [Array, nil]
#
# @!attribute [rw] alt
#   @return [String, nil]
#
# @!attribute [rw] animal_seen
#   @return [String, nil]
#
# @!attribute [rw] auto
#   @return [String, nil]
#
# @!attribute [rw] cnt
#   @return [String, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] dvc
#   @return [String, nil]
#
# @!attribute [rw] en
#   @return [String, nil]
#
# @!attribute [rw] file
#   @return [String, nil]
#
# @!attribute [rw] file_name
#   @return [String, nil]
#
# @!attribute [rw] gen
#   @return [String, nil]
#
# @!attribute [rw] grp
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] lat
#   @return [String, nil]
#
# @!attribute [rw] length
#   @return [String, nil]
#
# @!attribute [rw] lic
#   @return [String, nil]
#
# @!attribute [rw] loc
#   @return [String, nil]
#
# @!attribute [rw] lon
#   @return [String, nil]
#
# @!attribute [rw] method
#   @return [String, nil]
#
# @!attribute [rw] mic
#   @return [String, nil]
#
# @!attribute [rw] osci
#   @return [Hash, nil]
#
# @!attribute [rw] playback_used
#   @return [String, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
#
# @!attribute [rw] rec
#   @return [String, nil]
#
# @!attribute [rw] regnr
#   @return [String, nil]
#
# @!attribute [rw] rmk
#   @return [String, nil]
#
# @!attribute [rw] sex
#   @return [String, nil]
#
# @!attribute [rw] smp
#   @return [String, nil]
#
# @!attribute [rw] sono
#   @return [Hash, nil]
#
# @!attribute [rw] sp
#   @return [String, nil]
#
# @!attribute [rw] ssp
#   @return [String, nil]
#
# @!attribute [rw] stage
#   @return [String, nil]
#
# @!attribute [rw] temp
#   @return [String, nil]
#
# @!attribute [rw] time
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] uploaded
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Recording = Struct.new(
  :also,
  :alt,
  :animal_seen,
  :auto,
  :cnt,
  :date,
  :dvc,
  :en,
  :file,
  :file_name,
  :gen,
  :grp,
  :id,
  :lat,
  :length,
  :lic,
  :loc,
  :lon,
  :method,
  :mic,
  :osci,
  :playback_used,
  :q,
  :rec,
  :regnr,
  :rmk,
  :sex,
  :smp,
  :sono,
  :sp,
  :ssp,
  :stage,
  :temp,
  :time,
  :type,
  :uploaded,
  :url,
  keyword_init: true
)

# Request payload for Recording#list.
#
# @!attribute [rw] also
#   @return [Array, nil]
#
# @!attribute [rw] alt
#   @return [String, nil]
#
# @!attribute [rw] animal_seen
#   @return [String, nil]
#
# @!attribute [rw] auto
#   @return [String, nil]
#
# @!attribute [rw] cnt
#   @return [String, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] dvc
#   @return [String, nil]
#
# @!attribute [rw] en
#   @return [String, nil]
#
# @!attribute [rw] file
#   @return [String, nil]
#
# @!attribute [rw] file_name
#   @return [String, nil]
#
# @!attribute [rw] gen
#   @return [String, nil]
#
# @!attribute [rw] grp
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] lat
#   @return [String, nil]
#
# @!attribute [rw] length
#   @return [String, nil]
#
# @!attribute [rw] lic
#   @return [String, nil]
#
# @!attribute [rw] loc
#   @return [String, nil]
#
# @!attribute [rw] lon
#   @return [String, nil]
#
# @!attribute [rw] method
#   @return [String, nil]
#
# @!attribute [rw] mic
#   @return [String, nil]
#
# @!attribute [rw] osci
#   @return [Hash, nil]
#
# @!attribute [rw] playback_used
#   @return [String, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
#
# @!attribute [rw] rec
#   @return [String, nil]
#
# @!attribute [rw] regnr
#   @return [String, nil]
#
# @!attribute [rw] rmk
#   @return [String, nil]
#
# @!attribute [rw] sex
#   @return [String, nil]
#
# @!attribute [rw] smp
#   @return [String, nil]
#
# @!attribute [rw] sono
#   @return [Hash, nil]
#
# @!attribute [rw] sp
#   @return [String, nil]
#
# @!attribute [rw] ssp
#   @return [String, nil]
#
# @!attribute [rw] stage
#   @return [String, nil]
#
# @!attribute [rw] temp
#   @return [String, nil]
#
# @!attribute [rw] time
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] uploaded
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
RecordingListMatch = Struct.new(
  :also,
  :alt,
  :animal_seen,
  :auto,
  :cnt,
  :date,
  :dvc,
  :en,
  :file,
  :file_name,
  :gen,
  :grp,
  :id,
  :lat,
  :length,
  :lic,
  :loc,
  :lon,
  :method,
  :mic,
  :osci,
  :playback_used,
  :q,
  :rec,
  :regnr,
  :rmk,
  :sex,
  :smp,
  :sono,
  :sp,
  :ssp,
  :stage,
  :temp,
  :time,
  :type,
  :uploaded,
  :url,
  keyword_init: true
)

