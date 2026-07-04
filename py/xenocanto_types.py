# Typed models for the XenoCanto SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Recording(TypedDict, total=False):
    also: list
    alt: str
    animal_seen: str
    auto: str
    cnt: str
    date: str
    dvc: str
    en: str
    file: str
    file_name: str
    gen: str
    grp: str
    id: str
    lat: str
    length: str
    lic: str
    loc: str
    lon: str
    method: str
    mic: str
    osci: dict
    playback_used: str
    q: str
    rec: str
    regnr: str
    rmk: str
    sex: str
    smp: str
    sono: dict
    sp: str
    ssp: str
    stage: str
    temp: str
    time: str
    type: str
    uploaded: str
    url: str


class RecordingListMatch(TypedDict, total=False):
    also: list
    alt: str
    animal_seen: str
    auto: str
    cnt: str
    date: str
    dvc: str
    en: str
    file: str
    file_name: str
    gen: str
    grp: str
    id: str
    lat: str
    length: str
    lic: str
    loc: str
    lon: str
    method: str
    mic: str
    osci: dict
    playback_used: str
    q: str
    rec: str
    regnr: str
    rmk: str
    sex: str
    smp: str
    sono: dict
    sp: str
    ssp: str
    stage: str
    temp: str
    time: str
    type: str
    uploaded: str
    url: str
