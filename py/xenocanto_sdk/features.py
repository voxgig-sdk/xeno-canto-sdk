# XenoCanto SDK feature factory

from xenocanto_sdk.feature.base_feature import XenoCantoBaseFeature
from xenocanto_sdk.feature.ratelimit_feature import XenoCantoRatelimitFeature
from xenocanto_sdk.feature.retry_feature import XenoCantoRetryFeature
from xenocanto_sdk.feature.test_feature import XenoCantoTestFeature
from xenocanto_sdk.feature.timeout_feature import XenoCantoTimeoutFeature


_FEATURES = {
    "base": lambda: XenoCantoBaseFeature(),
    "ratelimit": lambda: XenoCantoRatelimitFeature(),
    "retry": lambda: XenoCantoRetryFeature(),
    "test": lambda: XenoCantoTestFeature(),
    "timeout": lambda: XenoCantoTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
