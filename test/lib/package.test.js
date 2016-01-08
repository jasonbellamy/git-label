import chai, {assert} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import {readPackage, readPackages} from '../../src/lib/package';

chai.use(chaiAsPromised);


describe('Lib: Package', () => {
  describe('readPackages', () => {
    it('should return a fulfilled promise', () => {
      const promise = readPackages(['test/fixtures/package_one.json', 'test/fixtures/package_two.json']);
      return assert.isFulfilled(promise);
    });

    it('should return a rejected promise if there was an error', () => {
      const promise = readPackages();
      return assert.isRejected(promise);
    });

    it('should eventually concatenate and return data from multiple file(s)', () => {
      const promise = readPackages(['test/fixtures/package_one.json', 'test/fixtures/package_two.json']);
      const expected = [
        { "name": "Type: Bug", "color": "#fff" },
        { "name": "Status: Abandoned", "color": "#000" }
      ];
      return assert.eventually.deepEqual(promise, expected);
    });
  })

  describe('readPackage', () => {
    it('should return a fulfilled promise', () => {
      const promise = readPackage('test/fixtures/package_one.json');
      return assert.isFulfilled(promise);
    });

    it('should return a rejected promise if there was an error', () => {
      const promise = readPackage();
      return assert.isRejected(promise);
    });

    it('should eventually return data from a file', () => {
      const promise  = readPackage('test/fixtures/package_one.json');
      const expected = [ { "name": "Type: Bug", "color": "#fff" } ];
      return assert.eventually.deepEqual(promise, expected);
    });
  });
});
