'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Registry = require('../Registry');

var _Registry2 = _interopRequireDefault(_Registry);

var _errorsNotImplementedError = require('../errors/NotImplementedError');

var _errorsNotImplementedError2 = _interopRequireDefault(_errorsNotImplementedError);

/**
 * The data adapter interface for managing data persistence asynchronously.
 *   Abstract class.
 */

var Adapter = (function () {
	function Adapter() {
		_classCallCheck(this, Adapter);
	}

	_createClass(Adapter, [{
		key: 'createSystem',

		/**
   * Create a new system.
   * @param {Object} system System details
   * @param {Object} [options] Additional options
   * @return {Promise<Object, NotImplementedError>} New system details
   */
		value: function createSystem(system) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			return Promise.reject(new _errorsNotImplementedError2['default']('`createSystem` must be implemented by subclass'));
		}

		/**
   * Get an existing system.
   * @param {Identifier} id System identifier
   * @param {Object} [options] Additional options
   * @return {Promise<Object, NotImplementedError>} Stored system details
   */
	}, {
		key: 'getSystem',
		value: function getSystem(id) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			return Promise.reject(new _errorsNotImplementedError2['default']('`getSystem` must be implemented by subclass'));
		}

		/**
   * Update an existing system.
   * @param {Identifier} id System identifier
   * @param {Object} system New system details
   * @param {Object} [options] Additional options
   * @return {Promise<Object, NotImplementedError>} Stored system details
   */
	}, {
		key: 'updateSystem',
		value: function updateSystem(id, system) {
			var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

			return Promise.reject(new _errorsNotImplementedError2['default']('`updateSystem` must be implemented by subclass'));
		}

		/**
   * Delete an existing system.
   * @param {Identifier} id System identifier
   * @param {Object} [options] Additional options
   * @return {Promise<Object, NotImplementedError>} Stored system details
   */
	}, {
		key: 'deleteSystem',
		value: function deleteSystem(id) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			return Promise.reject(new _errorsNotImplementedError2['default']('`deleteSystem` must be implemented by subclass'));
		}

		/**
   * Get the next available identifier.
   * @return {Promise<Identifier>} New identifier
   */
	}, {
		key: 'getNextId',
		value: function getNextId() {
			return Promise.resolve(Math.random().toString());
		}

		/**
   * Assign an identifier to a system object.
   * @param {Identifier} id Identifier to assign
   * @param {Object} system System object to assign identifier to
   */
	}, {
		key: 'assignSystemId',
		value: function assignSystemId(id, system) {
			system[_Registry2['default'].identifier] = id;
		}

		/**
   * Read the identifier assigned to a system object.
   * @param {Object} system System object to read identifier from
   * @return {?Identifier} Identifier, or null if none assigned
   */
	}, {
		key: 'getSystemId',
		value: function getSystemId(system) {
			return system[_Registry2['default'].identifier] || null;
		}

		/**
   * Whitelist properties of a system object. Returns a new object reference.
   * @param {Object} system System object to prepare
   * @return {Object} Prepared system object
   */
	}, {
		key: 'prepareSystem',
		value: function prepareSystem(_ref) {
			var _ref$name = _ref.name;
			var name = _ref$name === undefined ? null : _ref$name;
			var _ref$lastPing = _ref.lastPing;
			var lastPing = _ref$lastPing === undefined ? null : _ref$lastPing;

			return {
				name: name,
				lastPing: lastPing
			};
		}
	}]);

	return Adapter;
})();

exports['default'] = Adapter;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Adapter2 = require('./Adapter');

var _Adapter3 = _interopRequireDefault(_Adapter2);

var _errorsNotFoundError = require('../errors/NotFoundError');

var _errorsNotFoundError2 = _interopRequireDefault(_errorsNotFoundError);

var SYSTEMS = Symbol('systems');

/**
 * Manage systems in volatile memory. Nothing is persisted beyond the lifetime
 *   of the process.
 */

var VolatileAdapter = (function (_Adapter) {
	_inherits(VolatileAdapter, _Adapter);

	/**
  * Create a new instance of the VolatileAdapter class. Constructs the
  *   internal system map.
  * @param {Object} [options] Options hash
  */

	function VolatileAdapter() {
		_classCallCheck(this, VolatileAdapter);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		_get(Object.getPrototypeOf(VolatileAdapter.prototype), 'constructor', this).apply(this, args);
		this[SYSTEMS] = new Map();
	}

	/**
  * Create a new system and store it in the system map.
  * @param {Object} system System details
  * @param {Object} [options] Additional options
  * @return {Promise<Object>} New system details
  */

	_createClass(VolatileAdapter, [{
		key: 'createSystem',
		value: function createSystem(options) {
			var _this = this;

			var system = this.prepareSystem(options);
			return this.getNextId().then(function (id) {
				_this.assignSystemId(id, system);
				_this[SYSTEMS].set(id, system);
				return system;
			});
		}

		/**
   * Get an existing system from the system map.
   * @param {Identifier} id System identifier
   * @param {Object} [options] Additional options
   * @return {Promise<Object, NotFoundError>} Stored system details
   */
	}, {
		key: 'getSystem',
		value: function getSystem(id) {
			var system = this[SYSTEMS].get(id);
			if (!system) {
				return Promise.reject(new _errorsNotFoundError2['default']('Could not find system with id "' + id + '"'));
			}
			return Promise.resolve(system);
		}

		/**
   * Update an existing system in the system map.
   * @param {Identifier} id System identifier
   * @param {Object} system New system details
   * @param {Object} [options] Additional options
   * @return {Promise<Object>} Stored system details
   */
	}, {
		key: 'updateSystem',
		value: function updateSystem(id, properties, options) {
			return this.getSystem(id).then(function (system) {
				Object.assign(system, properties);
				return system;
			});
		}
	}]);

	return VolatileAdapter;
})(_Adapter3['default']);

exports['default'] = VolatileAdapter;
module.exports = exports['default'];
/**
 * An error class which can be extended and correctly assigns a name, message
 *   and stack to each instance.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomError = (function (_Error) {
	_inherits(CustomError, _Error);

	/**
  * Create an error instance.
  * @param {String} [message] Assigns a message to this instance
  */

	function CustomError(message) {
		_classCallCheck(this, CustomError);

		_get(Object.getPrototypeOf(CustomError.prototype), "constructor", this).call(this);
		/**
   * A brief explanation of the error that occurred.
   * @type {String}
   */
		this.message = message;
		/**
   * Stack trace of the error's origin.
   * @type {String}
   */
		this.stack = new Error().stack;
	}

	/**
  * Get this error's name. Will be the same as the constructor's name.
  * @return {String} Error name
  */

	_createClass(CustomError, [{
		key: "name",
		get: function get() {
			return this.constructor.name;
		}
	}]);

	return CustomError;
})(Error);

exports["default"] = CustomError;
module.exports = exports["default"];
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _CustomError2 = require('./CustomError');

var _CustomError3 = _interopRequireDefault(_CustomError2);

var DEFAULT_MESSAGE = 'The requested resource could not be found';

/**
 * This error is raised when a lookup fails because a resource is not found.
 */

var NotFoundError = (function (_CustomError) {
	_inherits(NotFoundError, _CustomError);

	/**
  * Create a NotFoundError instance.
  * @param {String} [message] Assigns a message to this instance
  */

	function NotFoundError() {
		var message = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_MESSAGE : arguments[0];

		_classCallCheck(this, NotFoundError);

		_get(Object.getPrototypeOf(NotFoundError.prototype), 'constructor', this).call(this, message);
	}

	return NotFoundError;
})(_CustomError3['default']);

exports['default'] = NotFoundError;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _CustomError2 = require('./CustomError');

var _CustomError3 = _interopRequireDefault(_CustomError2);

var DEFAULT_MESSAGE = 'Must be implemented by subclass';

/**
 * This error is raised when an abstract method is called on a subclass which
 *   has not overridden that method.
 */

var NotImplementedError = (function (_CustomError) {
	_inherits(NotImplementedError, _CustomError);

	/**
  * Create a NotFoundError instance.
  * @param {String} [message] Assigns a message to this instance
  */

	function NotImplementedError() {
		var message = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_MESSAGE : arguments[0];

		_classCallCheck(this, NotImplementedError);

		_get(Object.getPrototypeOf(NotImplementedError.prototype), 'constructor', this).call(this, message);
	}

	return NotImplementedError;
})(_CustomError3['default']);

exports['default'] = NotImplementedError;
module.exports = exports['default'];
/**
 * Identifiers can be any unique value which adapters will use to identify a
 *   system. The identifier is preferably JSON-serializable (i.e. a String or
 *   Number) however the individual adapter may accept other data types.
 * @typedef {String|Number|*} Identifier
 */

/**
 * A registry maintains a list of systems and their details.
 * It must be initialised with a data persistence adapter.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Registry = (function () {
	/**
  * Create a new instance of the Registry class.
  * @param {Object} options Options hash
  * @param {Adapter} options.adapter Data adapter
  */

	function Registry(_ref) {
		var adapter = _ref.adapter;

		_classCallCheck(this, Registry);

		/**
   * Data adapter. Each registry must have an adapter which decides if and
   *   how data is persisted and retrieved.
   * @type {Adapter}
   */
		this.adapter = adapter;
	}

	/**
  * System identification key. Each system must be uniquely identifiable.
  * @type {Symbol}
  */

	/**
  * Create a new system.
  * @param {Object} system System details
  * @param {Object} [options] Additional options
  * @return {Promise<Object, NotImplementedError>} New system details
  */

	_createClass(Registry, [{
		key: 'createSystem',
		value: function createSystem() {
			var _adapter;

			return (_adapter = this.adapter).createSystem.apply(_adapter, arguments);
		}

		/**
   * Get an existing system.
   * @param {Identifier} id System identifier
   * @param {Object} [options] Additional options
   * @return {Promise<Object, NotImplementedError>} Stored system details
   */
	}, {
		key: 'getSystem',
		value: function getSystem() {
			var _adapter2;

			return (_adapter2 = this.adapter).getSystem.apply(_adapter2, arguments);
		}

		/**
   * Update an existing system.
   * @param {Identifier} id System identifier
   * @param {Object} system New system details
   * @param {Object} [options] Additional options
   * @return {Promise<Object, NotImplementedError>} Stored system details
   */
	}, {
		key: 'updateSystem',
		value: function updateSystem() {
			var _adapter3;

			return (_adapter3 = this.adapter).updateSystem.apply(_adapter3, arguments);
		}

		/**
   * Delete an existing system.
   * @param {Identifier} id System identifier
   * @param {Object} [options] Additional options
   * @return {Promise<Object, NotImplementedError>} Stored system details
   */
	}, {
		key: 'deleteSystem',
		value: function deleteSystem() {
			var _adapter4;

			return (_adapter4 = this.adapter).deleteSystem.apply(_adapter4, arguments);
		}
	}]);

	return Registry;
})();

exports['default'] = Registry;
Registry.identifier = Symbol('identifier');
module.exports = exports['default'];
