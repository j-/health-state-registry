import Adapter from './Adapter';
import NotFoundError from '../errors/NotFoundError';

const SYSTEMS = Symbol('systems');

/**
 * Manage systems in volatile memory. Nothing is persisted beyond the lifetime
 *   of the process.
 */
export default class VolatileAdapter extends Adapter {
	/**
	 * Create a new instance of the VolatileAdapter class. Constructs the
	 *   internal system map.
	 * @param {Object} [options] Options hash
	 */
	constructor (...args) {
		super(...args);
		this[SYSTEMS] = new Map();
	}

	/**
	 * Create a new system and store it in the system map.
	 * @param {Object} system System details
	 * @param {Object} [options] Additional options
	 * @return {Promise<Object>} New system details
	 */
	createSystem (options) {
		const system = this.prepareSystem(options);
		return this.getNextId().then((id) => {
			this.assignSystemId(id, system);
			this[SYSTEMS].set(id, system);
			return system;
		});
	}

	/**
	 * Get an existing system from the system map.
	 * @param {Identifier} id System identifier
	 * @param {Object} [options] Additional options
	 * @return {Promise<Object, NotFoundError>} Stored system details
	 */
	getSystem (id) {
		const system = this[SYSTEMS].get(id);
		if (!system) {
			return Promise.reject(new NotFoundError(`Could not find system with id "${id}"`));
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
	updateSystem (id, properties, options) {
		return this.getSystem(id)
			.then((system) => {
				Object.assign(system, properties);
				return system;
			});
	}
}
