<?php
declare(strict_types=1);

// XenoCanto SDK utility: prepare_body

class XenoCantoPrepareBody
{
    public static function call(XenoCantoContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
