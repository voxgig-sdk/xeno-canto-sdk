// Typed models for the XenoCanto SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Recording is the typed data model for the recording entity.
type Recording struct {
	Also *[]any `json:"also,omitempty"`
	Alt *string `json:"alt,omitempty"`
	AnimalSeen *string `json:"animal_seen,omitempty"`
	Auto *string `json:"auto,omitempty"`
	Cnt *string `json:"cnt,omitempty"`
	Date *string `json:"date,omitempty"`
	Dvc *string `json:"dvc,omitempty"`
	En *string `json:"en,omitempty"`
	File *string `json:"file,omitempty"`
	FileName *string `json:"file_name,omitempty"`
	Gen *string `json:"gen,omitempty"`
	Grp *string `json:"grp,omitempty"`
	Id *string `json:"id,omitempty"`
	Lat *string `json:"lat,omitempty"`
	Length *string `json:"length,omitempty"`
	Lic *string `json:"lic,omitempty"`
	Loc *string `json:"loc,omitempty"`
	Lon *string `json:"lon,omitempty"`
	Method *string `json:"method,omitempty"`
	Mic *string `json:"mic,omitempty"`
	Osci *map[string]any `json:"osci,omitempty"`
	PlaybackUsed *string `json:"playback_used,omitempty"`
	Q *string `json:"q,omitempty"`
	Rec *string `json:"rec,omitempty"`
	Regnr *string `json:"regnr,omitempty"`
	Rmk *string `json:"rmk,omitempty"`
	Sex *string `json:"sex,omitempty"`
	Smp *string `json:"smp,omitempty"`
	Sono *map[string]any `json:"sono,omitempty"`
	Sp *string `json:"sp,omitempty"`
	Ssp *string `json:"ssp,omitempty"`
	Stage *string `json:"stage,omitempty"`
	Temp *string `json:"temp,omitempty"`
	Time *string `json:"time,omitempty"`
	Type *string `json:"type,omitempty"`
	Uploaded *string `json:"uploaded,omitempty"`
	Url *string `json:"url,omitempty"`
}

// RecordingListMatch mirrors the recording fields as an all-optional match
// filter (Go analog of Partial<Recording>).
type RecordingListMatch struct {
	Also *[]any `json:"also,omitempty"`
	Alt *string `json:"alt,omitempty"`
	AnimalSeen *string `json:"animal_seen,omitempty"`
	Auto *string `json:"auto,omitempty"`
	Cnt *string `json:"cnt,omitempty"`
	Date *string `json:"date,omitempty"`
	Dvc *string `json:"dvc,omitempty"`
	En *string `json:"en,omitempty"`
	File *string `json:"file,omitempty"`
	FileName *string `json:"file_name,omitempty"`
	Gen *string `json:"gen,omitempty"`
	Grp *string `json:"grp,omitempty"`
	Id *string `json:"id,omitempty"`
	Lat *string `json:"lat,omitempty"`
	Length *string `json:"length,omitempty"`
	Lic *string `json:"lic,omitempty"`
	Loc *string `json:"loc,omitempty"`
	Lon *string `json:"lon,omitempty"`
	Method *string `json:"method,omitempty"`
	Mic *string `json:"mic,omitempty"`
	Osci *map[string]any `json:"osci,omitempty"`
	PlaybackUsed *string `json:"playback_used,omitempty"`
	Q *string `json:"q,omitempty"`
	Rec *string `json:"rec,omitempty"`
	Regnr *string `json:"regnr,omitempty"`
	Rmk *string `json:"rmk,omitempty"`
	Sex *string `json:"sex,omitempty"`
	Smp *string `json:"smp,omitempty"`
	Sono *map[string]any `json:"sono,omitempty"`
	Sp *string `json:"sp,omitempty"`
	Ssp *string `json:"ssp,omitempty"`
	Stage *string `json:"stage,omitempty"`
	Temp *string `json:"temp,omitempty"`
	Time *string `json:"time,omitempty"`
	Type *string `json:"type,omitempty"`
	Uploaded *string `json:"uploaded,omitempty"`
	Url *string `json:"url,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
