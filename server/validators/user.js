// https://github.com/ajv-validator/ajv

export const user = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    bar: { type: 'string' },
  },
  required: ['name'],
  additionalProperties: false,
};
