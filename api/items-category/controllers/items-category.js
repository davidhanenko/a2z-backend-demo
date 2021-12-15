'use strict';

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.items_category.search(ctx.query);
    } else {
      entities = await strapi.services.items_category.find(ctx.query);
    }

    return entities.map(entity =>
      sanitizeEntity(entity, { model: strapi.models.items_category })
    );
  },

  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.items_category.findOne({ id });
    return sanitizeEntity(entity, { model: strapi.models.items_category });
  },
};
