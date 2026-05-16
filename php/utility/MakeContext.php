<?php
declare(strict_types=1);

// XenoCanto SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class XenoCantoMakeContext
{
    public static function call(array $ctxmap, ?XenoCantoContext $basectx): XenoCantoContext
    {
        return new XenoCantoContext($ctxmap, $basectx);
    }
}
