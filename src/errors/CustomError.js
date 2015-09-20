/**
 * An error class which can be extended and correctly assigns a name, message
 *   and stack to each instance.
 */
export default class CustomError extends Error {
	/**
	 * Create an error instance.
	 * @param {String} [message] Assigns a message to this instance
	 */
	constructor (message) {
		super();
		/**
		 * A brief explanation of the error that occurred.
		 * @type {String}
		 */
		this.message = message;
		/**
		 * Stack trace of the error's origin.
		 * @type {String}
		 */
		this.stack = (new Error()).stack;
	}

	/**
	 * Get this error's name. Will be the same as the constructor's name.
	 * @return {String} Error name
	 */
	get name () {
		return this.constructor.name;
	}
}
