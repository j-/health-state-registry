import CustomError from '../src/errors/CustomError';
import assert from 'assert';

describe('CustomError', () => {
	describe('#constructor()', () => {
		it('should return an instance of the CustomError class', () => {
			const err = new CustomError();
			assert(err instanceof CustomError);
		});
		it('should extend the base Error class', () => {
			const err = new CustomError();
			assert(err instanceof Error);
		});
		it('can be thrown', () => {
			const err = new CustomError('foobar');
			try {
				throw err;
				assert(false, 'Should never get to this point');
			}
			catch (result) {
				assert.equal(result, err, 'Error caught');
			}
		});
		it('should accept an error message', () => {
			try {
				throw new CustomError('foobar');
			}
			catch (err) {
				assert.equal(err.message, 'foobar', 'Messages match');
			}
		});
	});
});
