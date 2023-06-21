// "use strict";

// const { transform } = require("strapi-plugin-transformer");

// module.exports = {
//   async find(ctx) {
//     let entities;
//     // Retrieve entities from the database
//     entities = await strapi.services.post.find();

//     // Transform the response using the strapi-plugin-transformer
//     const transformedResponse = transform(entities, ctx.query);

//     // Send the transformed response as the API response
//     ctx.send(transformedResponse);
//   },
// };
