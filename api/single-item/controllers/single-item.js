'use strict';

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.single_item.search(ctx.query);
    } else {
      entities = await strapi.services.single_item.find(ctx.query);
    }

    return entities.map(entity =>
      sanitizeEntity(entity, { model: strapi.models.single_item })
    );
  },

  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.single_item.findOne({ id });
    return sanitizeEntity(entity, { model: strapi.models.single_item });
  },
};
