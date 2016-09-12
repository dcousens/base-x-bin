# base-x-bin

[![TRAVIS](https://secure.travis-ci.org/cryptocoinjs/base-x.png)](http://travis-ci.org/cryptocoinjs/base-x)
[![NPM](http://img.shields.io/npm/v/base-x.svg)](https://www.npmjs.org/package/base-x)
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Command line utility for fast base encoding / decoding of any given alphabet using bitcoin style leading zero compression.

## Examples

Base58

``` bash
cat /dev/urandom | head -c 32 | basex -a 58
```

Base62

``` bash
cat /dev/urandom | head -c 32 | basex -a 62
```

Base62

``` bash
cat /dev/urandom | head -c 32 | basex -a
```


### Alphabets
Below is the list of included alphabets, and their respective base.

Base | Alphabet
------------- | -------------
2 | `01`
8 | `01234567`
11 | `0123456789a`
16 | `0123456789abcdef`
32 | `0123456789ABCDEFGHJKMNPQRSTVWXYZ`
36 | `0123456789abcdefghijklmnopqrstuvwxyz`
58 | `123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz`
62 | `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`
64 | `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`
66 | `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.!~`


## How it works
See https://github.com/cryptocoinjs/base-x


## LICENSE [MIT](LICENSE)
