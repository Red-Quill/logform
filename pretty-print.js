'use strict';

const inspect = require('util').inspect;
const format = require('./format');

/*
 * function prettyPrint (opts)
 * Returns a new instance of the prettyPrint Format that "prettyPrint"
 * serializes `info` objects. This was previously exposed as
 * { prettyPrint: true } to transports in `winston < 3.0.0`.
 */
module.exports = format(function (info, opts) {
  info.raw = inspect(info, false, opts.depth || null, opts.colorize);
  return info;
});
