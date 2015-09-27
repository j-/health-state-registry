[Health state registry][site]
============================

[![master branch build status][build-icon]][build-link]

Maintain a collection of systems and their health. Data persistence is available
via configurable adapters. This module can, in theory, be run on both the server
and client simultaneously.

## Usage

Create and configure a registry instance and adapter. It can then create, read,
update and delete system entries.

```js
var adapter = new VolatileAdapter();
var registry = new Registry({
	adapter: adapter
});

// Add new systems to the registry
registry.createSystem({ name: 'Test system A' })
	.then(function (result) {
		console.log('System created, ID: %s', adapter.getSystemId(result));
	});

// Update a system when notified
registry.updateSystem(systemId, { lastPing: new Date() })
	.then(function (result) {
		console.log('System updated, last ping: %s', result.lastPing);
	});
```

## Documentation

Documentation is generated with [esdoc][esdoc]:

```sh
$ npm install && npm run docs
```

## Tests

Tests are run with [Mocha][mocha] and [Babel][babel]:

```sh
$ npm install && npm test
```

## Building

Builds are run with [Babel][babel] (to transpile) and [UglifyJS][uglify] (to
minify):

```sh
$ npm install && npm run build
```

## License

[MIT license](LICENSE).

[site]: http://j-.github.io/health-state-registry/
[build-icon]: https://travis-ci.org/j-/health-state-registry.svg?branch=master
[build-link]: https://travis-ci.org/j-/health-state-registry
[esdoc]: https://esdoc.org/
[mocha]: https://mochajs.org/
[babel]: https://babeljs.io/
[uglify]: http://lisperator.net/uglifyjs/
