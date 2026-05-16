<?php
declare(strict_types=1);

// XenoCanto SDK utility: result_body

class XenoCantoResultBody
{
    public static function call(XenoCantoContext $ctx): ?XenoCantoResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
