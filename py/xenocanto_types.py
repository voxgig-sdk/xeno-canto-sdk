# Typed models for the XenoCanto SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Recording:
    also: Optional[list] = None
    alt: Optional[str] = None
    animal_seen: Optional[str] = None
    auto: Optional[str] = None
    cnt: Optional[str] = None
    date: Optional[str] = None
    dvc: Optional[str] = None
    en: Optional[str] = None
    file: Optional[str] = None
    file_name: Optional[str] = None
    gen: Optional[str] = None
    grp: Optional[str] = None
    id: Optional[str] = None
    lat: Optional[str] = None
    length: Optional[str] = None
    lic: Optional[str] = None
    loc: Optional[str] = None
    lon: Optional[str] = None
    method: Optional[str] = None
    mic: Optional[str] = None
    osci: Optional[dict] = None
    playback_used: Optional[str] = None
    q: Optional[str] = None
    rec: Optional[str] = None
    regnr: Optional[str] = None
    rmk: Optional[str] = None
    sex: Optional[str] = None
    smp: Optional[str] = None
    sono: Optional[dict] = None
    sp: Optional[str] = None
    ssp: Optional[str] = None
    stage: Optional[str] = None
    temp: Optional[str] = None
    time: Optional[str] = None
    type: Optional[str] = None
    uploaded: Optional[str] = None
    url: Optional[str] = None


@dataclass
class RecordingListMatch:
    also: Optional[list] = None
    alt: Optional[str] = None
    animal_seen: Optional[str] = None
    auto: Optional[str] = None
    cnt: Optional[str] = None
    date: Optional[str] = None
    dvc: Optional[str] = None
    en: Optional[str] = None
    file: Optional[str] = None
    file_name: Optional[str] = None
    gen: Optional[str] = None
    grp: Optional[str] = None
    id: Optional[str] = None
    lat: Optional[str] = None
    length: Optional[str] = None
    lic: Optional[str] = None
    loc: Optional[str] = None
    lon: Optional[str] = None
    method: Optional[str] = None
    mic: Optional[str] = None
    osci: Optional[dict] = None
    playback_used: Optional[str] = None
    q: Optional[str] = None
    rec: Optional[str] = None
    regnr: Optional[str] = None
    rmk: Optional[str] = None
    sex: Optional[str] = None
    smp: Optional[str] = None
    sono: Optional[dict] = None
    sp: Optional[str] = None
    ssp: Optional[str] = None
    stage: Optional[str] = None
    temp: Optional[str] = None
    time: Optional[str] = None
    type: Optional[str] = None
    uploaded: Optional[str] = None
    url: Optional[str] = None

