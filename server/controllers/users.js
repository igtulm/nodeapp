import { doQuery } from '../db/db';
import { validate } from '../validators';
import { user } from '../validators/user';
import { Response } from '../models/response';
import { User } from '../models/user';

export const create = (req, res, next) => {
  const validator = validate(user);

  const isValid = validator(req.body);
  if (!isValid) {
    const response = new Response(null, validator.errors);
    res.status(400);
    res.json(response);
    return;
  }

  const body = JSON.parse(req.body);
  const userObj = Object.assign(new User(), body);

  try {
    const id = doQuery(
      'INSERT INTO "user"(name) VALUES($1) RETURNING id',
      body.name,
    );

    const response = new Response({ id }, null);
    res.status(200);
    res.json(response);
  } catch (e) {
    const response = new Response(null, [e.toString()]);
    res.status(500);
    res.json(response);
  }
};
