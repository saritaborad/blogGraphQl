module.exports = ({ env }) => ({
  // ..
  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
      requestTransforms: {
        wrapBodyWithDataKey: true,
      },
      hooks: {
        preResponseTransform: (ctx) =>
          console.log("hello from the preResponseTransform hook!"),
        postResponseTransform: (ctx) =>
          console.log("hello from the postResponseTransform hook!"),
      },
      contentTypeFilter: {
        mode: "allow",
        uids: {
          "api::post.post": true,
          "api::author.author": true,
          "api::tag.tag": true,
          "api::about.about": true,
          "api::category.category": true,
          "api::privacypolicy.privacypolicy": true,
        },
      },
      plugins: {
        ids: {
          slugify: true,
        },
      },
    },
  },
  // ..
});
