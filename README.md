# base-x-bin

[![TRAVIS](https://secure.travis-ci.org/cryptocoinjs/base-x.png)](http://travis-ci.org/cryptocoinjs/base-x)
[![NPM](http://img.shields.io/npm/v/base-x.svg)](https://www.npmjs.org/package/base-x)
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Command line utility for fast base encoding / decoding of any given alphabet using bitcoin style leading zero compression.

## Examples

* `-a` to use a built-in alphabet (see Alphabets)
* `-d`|`--decode` to decode
* `-i`|`--inline` for an inline alphabet argument

Base58
``` bash
echo "test" | basex -a 58
// E8f4pE5

echo -n "E8f4pE5" | basex -d -a 58
// test

cat /dev/urandom | head -c 32 | basex -a 58
// 5F8C26whY3W4kXToXVziUE6WACBwjx3bNRuG1ekQ9M8d
```

Custom
``` bash
echo "Z" | basex -d -i "012"
// 10110

echo -n "10100" | basex -d -i "012"
// "Z"

cat /dev/urandom | head -c 32 | basex -i "012"
// 12121200000212100001002211221001110102210001110221022102001100020201012022102112001010101210020001011021020020021102211121221000010110222201211201001011200002022
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
