import CustomError from './CustomError';

const DEFAULT_MESSAGE = 'Must be implemented by subclass';

/**
 * This error is raised when an abstract method is called on a subclass which
 *   has not overridden that method.
 */
export default class NotImplementedError extends CustomError {
	/**
	 * Create a NotFoundError instance.
	 * @param {String} [message] Assigns a message to this instance
	 */
	constructor (message = DEFAULT_MESSAGE) {
		super(message);
	}
}
