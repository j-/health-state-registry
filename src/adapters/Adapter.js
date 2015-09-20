import Registry from '../Registry';
import NotImplementedError from '../errors/NotImplementedError';

/**
 * The data adapter interface for managing data persistence asynchronously.
 *   Abstract class.
 */
export default class Adapter {
	/**
	 * Create a new system.
	 * @param {Object} system System details
	 * @param {Object} [options] Additional options
	 * @return {Promise<Object, NotImplementedError>} New system details
	 */
	createSystem (system, options = {}) {
		return Promise.reject(new NotImplementedError('`createSystem` must be implemented by subclass'));
	}

	/**
	 * Get an existing system.
	 * @param {Identifier} id System identifier
	 * @param {Object} [options] Additional options
	 * @return {Promise<Object, NotImplementedError>} Stored system details
	 */
	getSystem (id, options = {}) {
		return Promise.reject(new NotImplementedError('`getSystem` must be implemented by subclass'));
	}

	/**
	 * Update an existing system.
	 * @param {Identifier} id System identifier
	 * @param {Object} system New system details
	 * @param {Object} [options] Additional options
	 * @return {Promise<Object, NotImplementedError>} Stored system details
	 */
	updateSystem (id, system, options = {}) {
		return Promise.reject(new NotImplementedError('`updateSystem` must be implemented by subclass'));
	}

	/**
	 * Delete an existing system.
	 * @param {Identifier} id System identifier
	 * @param {Object} [options] Additional options
	 * @return {Promise<Object, NotImplementedError>} Stored system details
	 */
	deleteSystem (id, options = {}) {
		return Promise.reject(new NotImplementedError('`deleteSystem` must be implemented by subclass'));
	}

	/**
	 * Get the next available identifier.
	 * @return {Promise<Identifier>} New identifier
	 */
	getNextId () {
		return Promise.resolve(Math.random().toString());
	}

	/**
	 * Assign an identifier to a system object.
	 * @param {Identifier} id Identifier to assign
	 * @param {Object} system System object to assign identifier to
	 */
	assignSystemId (id, system) {
		system[Registry.identifier] = id;
	}

	/**
	 * Read the identifier assigned to a system object.
	 * @param {Object} system System object to read identifier from
	 * @return {?Identifier} Identifier, or null if none assigned
	 */
	getSystemId (system) {
		return system[Registry.identifier] || null;
	}

	/**
	 * Whitelist properties of a system object. Returns a new object reference.
	 * @param {Object} system System object to prepare
	 * @return {Object} Prepared system object
	 */
	prepareSystem ({ name = null, lastPing = null }) {
		return {
			name,
			lastPing,
		};
	}
}
