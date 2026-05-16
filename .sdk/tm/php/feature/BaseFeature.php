<?php
declare(strict_types=1);

// XenoCanto SDK base feature

class XenoCantoBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(XenoCantoContext $ctx, array $options): void {}
    public function PostConstruct(XenoCantoContext $ctx): void {}
    public function PostConstructEntity(XenoCantoContext $ctx): void {}
    public function SetData(XenoCantoContext $ctx): void {}
    public function GetData(XenoCantoContext $ctx): void {}
    public function GetMatch(XenoCantoContext $ctx): void {}
    public function SetMatch(XenoCantoContext $ctx): void {}
    public function PrePoint(XenoCantoContext $ctx): void {}
    public function PreSpec(XenoCantoContext $ctx): void {}
    public function PreRequest(XenoCantoContext $ctx): void {}
    public function PreResponse(XenoCantoContext $ctx): void {}
    public function PreResult(XenoCantoContext $ctx): void {}
    public function PreDone(XenoCantoContext $ctx): void {}
    public function PreUnexpected(XenoCantoContext $ctx): void {}
}
