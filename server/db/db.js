// https://node-postgres.com/api/pool
// https://zetcode.com/javascript/nodepostgres/#:~:text=The%20node%2Dpostgres%20first%20example,a%20simple%20SELECT%20query%20result.&text=const%20pg%20%3D%20require('pg,Client(cs)%3B%20client.

import pg from 'pg';

const pool = new pg.Pool();

export const doQuery = (q, ...args) => {
  pool.connect((err, client, release) => {
    if (err) {
      throw err;
    }

    client.query(q, args, (err, result) => {
      release();

      if (err) {
        throw err;
      }

      return result;
    });
  });
};

export const dbPing = () => {
  doQuery('SELECT 1');
};
