<?php
declare(strict_types=1);

// Typed models for the XenoCanto SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Recording entity data model. */
class Recording
{
    public ?array $also = null;
    public ?string $alt = null;
    public ?string $animal_seen = null;
    public ?string $auto = null;
    public ?string $cnt = null;
    public ?string $date = null;
    public ?string $dvc = null;
    public ?string $en = null;
    public ?string $file = null;
    public ?string $file_name = null;
    public ?string $gen = null;
    public ?string $grp = null;
    public ?string $id = null;
    public ?string $lat = null;
    public ?string $length = null;
    public ?string $lic = null;
    public ?string $loc = null;
    public ?string $lon = null;
    public ?string $method = null;
    public ?string $mic = null;
    public ?array $osci = null;
    public ?string $playback_used = null;
    public ?string $q = null;
    public ?string $rec = null;
    public ?string $regnr = null;
    public ?string $rmk = null;
    public ?string $sex = null;
    public ?string $smp = null;
    public ?array $sono = null;
    public ?string $sp = null;
    public ?string $ssp = null;
    public ?string $stage = null;
    public ?string $temp = null;
    public ?string $time = null;
    public ?string $type = null;
    public ?string $uploaded = null;
    public ?string $url = null;
}

/** Match filter for Recording#list (any subset of Recording fields). */
class RecordingListMatch
{
    public ?array $also = null;
    public ?string $alt = null;
    public ?string $animal_seen = null;
    public ?string $auto = null;
    public ?string $cnt = null;
    public ?string $date = null;
    public ?string $dvc = null;
    public ?string $en = null;
    public ?string $file = null;
    public ?string $file_name = null;
    public ?string $gen = null;
    public ?string $grp = null;
    public ?string $id = null;
    public ?string $lat = null;
    public ?string $length = null;
    public ?string $lic = null;
    public ?string $loc = null;
    public ?string $lon = null;
    public ?string $method = null;
    public ?string $mic = null;
    public ?array $osci = null;
    public ?string $playback_used = null;
    public ?string $q = null;
    public ?string $rec = null;
    public ?string $regnr = null;
    public ?string $rmk = null;
    public ?string $sex = null;
    public ?string $smp = null;
    public ?array $sono = null;
    public ?string $sp = null;
    public ?string $ssp = null;
    public ?string $stage = null;
    public ?string $temp = null;
    public ?string $time = null;
    public ?string $type = null;
    public ?string $uploaded = null;
    public ?string $url = null;
}

