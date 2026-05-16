<?php
declare(strict_types=1);

// XenoCanto SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

XenoCantoUtility::setRegistrar(function (XenoCantoUtility $u): void {
    $u->clean = [XenoCantoClean::class, 'call'];
    $u->done = [XenoCantoDone::class, 'call'];
    $u->make_error = [XenoCantoMakeError::class, 'call'];
    $u->feature_add = [XenoCantoFeatureAdd::class, 'call'];
    $u->feature_hook = [XenoCantoFeatureHook::class, 'call'];
    $u->feature_init = [XenoCantoFeatureInit::class, 'call'];
    $u->fetcher = [XenoCantoFetcher::class, 'call'];
    $u->make_fetch_def = [XenoCantoMakeFetchDef::class, 'call'];
    $u->make_context = [XenoCantoMakeContext::class, 'call'];
    $u->make_options = [XenoCantoMakeOptions::class, 'call'];
    $u->make_request = [XenoCantoMakeRequest::class, 'call'];
    $u->make_response = [XenoCantoMakeResponse::class, 'call'];
    $u->make_result = [XenoCantoMakeResult::class, 'call'];
    $u->make_point = [XenoCantoMakePoint::class, 'call'];
    $u->make_spec = [XenoCantoMakeSpec::class, 'call'];
    $u->make_url = [XenoCantoMakeUrl::class, 'call'];
    $u->param = [XenoCantoParam::class, 'call'];
    $u->prepare_auth = [XenoCantoPrepareAuth::class, 'call'];
    $u->prepare_body = [XenoCantoPrepareBody::class, 'call'];
    $u->prepare_headers = [XenoCantoPrepareHeaders::class, 'call'];
    $u->prepare_method = [XenoCantoPrepareMethod::class, 'call'];
    $u->prepare_params = [XenoCantoPrepareParams::class, 'call'];
    $u->prepare_path = [XenoCantoPreparePath::class, 'call'];
    $u->prepare_query = [XenoCantoPrepareQuery::class, 'call'];
    $u->result_basic = [XenoCantoResultBasic::class, 'call'];
    $u->result_body = [XenoCantoResultBody::class, 'call'];
    $u->result_headers = [XenoCantoResultHeaders::class, 'call'];
    $u->transform_request = [XenoCantoTransformRequest::class, 'call'];
    $u->transform_response = [XenoCantoTransformResponse::class, 'call'];
});
