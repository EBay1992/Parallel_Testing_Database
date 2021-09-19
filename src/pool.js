const pg = require("pg");

// this method useful because we can use different connection to different database
class Pool {
  _pool = null;
  connect(option) {
    this._pool = new pg.Pool(option);
    return this._pool.query("select 1+1;");
  }
  close() {
    return this._pool.end();
  }

  query(sql, params) {
    return this._pool.query(sql, params);
  }
}

module.exports = new Pool();
