<?php
declare(strict_types=1);

// XenoCanto SDK utility: feature_add

class XenoCantoFeatureAdd
{
    public static function call(XenoCantoContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
