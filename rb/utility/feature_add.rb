# XenoCanto SDK utility: feature_add
module XenoCantoUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
