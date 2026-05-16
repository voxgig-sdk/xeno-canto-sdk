# XenoCanto SDK feature factory

from feature.base_feature import XenoCantoBaseFeature
from feature.test_feature import XenoCantoTestFeature


def _make_feature(name):
    features = {
        "base": lambda: XenoCantoBaseFeature(),
        "test": lambda: XenoCantoTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
