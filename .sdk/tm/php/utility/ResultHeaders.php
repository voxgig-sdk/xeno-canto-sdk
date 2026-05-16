<?php
declare(strict_types=1);

// XenoCanto SDK utility: result_headers

class XenoCantoResultHeaders
{
    public static function call(XenoCantoContext $ctx): ?XenoCantoResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
