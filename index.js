#!/usr/bin/env node

var ALPHABETS = {
  2: '01',
  8: '01234567',
  11: '0123456789a',
  16: '0123456789abcdef',
  32: '0123456789ABCDEFGHJKMNPQRSTVWXYZ',
  36: '0123456789abcdefghijklmnopqrstuvwxyz',
  58: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
  62: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  64: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  66: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.!~'
}

var argv = require('minimist')(process.argv.slice(1), { 'string': ['a', 'i'] })
var basex = require('base-x')

var alphabet
if (argv.a) {
  alphabet = ALPHABETS[argv.a]
} else if (argv.i) {
  alphabet = argv.i
}

if (!alphabet) throw TypeError('Unknown or missing alphabet')

var base = basex(alphabet)

function decode (data) {
  var str = data.toString('utf8')

  process.stdout.write(new Buffer(base.decode(str)))
}

function encode (data) {
  process.stdout.write(base.encode(data))
}

if (argv.d || argv.decode) {
  process.stdin.on('data', decode)
} else {
  process.stdin.on('data', encode)
}
