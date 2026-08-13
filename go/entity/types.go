// Typed models for the XenoCanto SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/xeno-canto-sdk/go/core"
)

// Recording is the typed data model for the recording entity.
type Recording struct {
	Also *[]any `json:"also,omitempty"`
	Alt *string `json:"alt,omitempty"`
	Animalseen *string `json:"animalseen,omitempty"`
	Auto *string `json:"auto,omitempty"`
	Cnt *string `json:"cnt,omitempty"`
	Date *string `json:"date,omitempty"`
	Dvc *string `json:"dvc,omitempty"`
	En *string `json:"en,omitempty"`
	File *string `json:"file,omitempty"`
	Filename *string `json:"filename,omitempty"`
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
	Playbackused *string `json:"playbackused,omitempty"`
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

// RecordingListMatch is the typed request payload for Recording.ListTyped.
type RecordingListMatch struct {
	Also *[]any `json:"also,omitempty"`
	Alt *string `json:"alt,omitempty"`
	Animalseen *string `json:"animalseen,omitempty"`
	Auto *string `json:"auto,omitempty"`
	Cnt *string `json:"cnt,omitempty"`
	Date *string `json:"date,omitempty"`
	Dvc *string `json:"dvc,omitempty"`
	En *string `json:"en,omitempty"`
	File *string `json:"file,omitempty"`
	Filename *string `json:"filename,omitempty"`
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
	Playbackused *string `json:"playbackused,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
