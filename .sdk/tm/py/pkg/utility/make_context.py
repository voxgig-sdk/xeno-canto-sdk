# XenoCanto SDK utility: make_context

from projectname_sdk.core.context import XenoCantoContext


def make_context_util(ctxmap, basectx):
    return XenoCantoContext(ctxmap, basectx)
