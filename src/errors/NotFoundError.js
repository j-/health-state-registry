import CustomError from './CustomError';

const DEFAULT_MESSAGE = 'The requested resource could not be found';

/**
 * This error is raised when a lookup fails because a resource is not found.
 */
export default class NotFoundError extends CustomError {
	/**
	 * Create a NotFoundError instance.
	 * @param {String} [message] Assigns a message to this instance
	 */
	constructor (message = DEFAULT_MESSAGE) {
		super(message);
	}
}
