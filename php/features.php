<?php
declare(strict_types=1);

// XenoCanto SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class XenoCantoFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new XenoCantoBaseFeature();
            case "test":
                return new XenoCantoTestFeature();
            default:
                return new XenoCantoBaseFeature();
        }
    }
}
