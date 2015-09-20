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
export default class Registry {
	/**
	 * Create a new instance of the Registry class.
	 * @param {Object} options Options hash
	 * @param {Adapter} options.adapter Data adapter
	 */
	constructor ({ adapter }) {
		/**
		 * Data adapter. Each registry must have an adapter which decides if and
		 *   how data is persisted and retrieved.
		 * @type {Adapter}
		 */
		this.adapter = adapter;
	}

	/**
	 * Create a new system.
	 * @param {Object} system System details
	 * @param {Object} [options] Additional options
	 * @return {Promise<Object, NotImplementedError>} New system details
	 */
	createSystem (...args) {
		return this.adapter.createSystem(...args);
	}

	/**
	 * Get an existing system.
	 * @param {Identifier} id System identifier
	 * @param {Object} [options] Additional options
	 * @return {Promise<Object, NotImplementedError>} Stored system details
	 */
	getSystem (...args) {
		return this.adapter.getSystem(...args);
	}

	/**
	 * Update an existing system.
	 * @param {Identifier} id System identifier
	 * @param {Object} system New system details
	 * @param {Object} [options] Additional options
	 * @return {Promise<Object, NotImplementedError>} Stored system details
	 */
	updateSystem (...args) {
		return this.adapter.updateSystem(...args);
	}

	/**
	 * Delete an existing system.
	 * @param {Identifier} id System identifier
	 * @param {Object} [options] Additional options
	 * @return {Promise<Object, NotImplementedError>} Stored system details
	 */
	deleteSystem (...args) {
		return this.adapter.deleteSystem(...args);
	}
}

/**
 * System identification key. Each system must be uniquely identifiable.
 * @type {Symbol}
 */
Registry.identifier = Symbol('identifier');
