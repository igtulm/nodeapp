import Ajv from 'ajv';

const ajv = new Ajv();

export const validate = (schema) => ajv.compile(schema);
