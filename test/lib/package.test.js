import chai, {assert} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import {readFile, getPackages} from '../../src/lib/package';

chai.use(chaiAsPromised);


describe('Lib: Package', () => {
  describe('getPackages', () => {
    it('should return a fulfilled promise', () => {
      const promise = getPackages(['test/fixtures/package_one.json', 'test/fixtures/package_two.json']);
      return assert.isFulfilled(promise);
    });

    it('should return a rejected promise if there was an error', () => {
      const promise = getPackages();
      return assert.isRejected(promise);
    });

    it('should eventually concatenate and return data from multiple file(s)', () => {
      const promise = getPackages(['test/fixtures/package_one.json', 'test/fixtures/package_two.json']);
      const expected = [
        { "type": "Type", "name": "Bug", "color": "fff" },
        { "type": "Status", "name": "Abandoned", "color": "000" }
      ];
      return assert.eventually.deepEqual(promise, expected);
    });
  })

  describe('readFile', () => {
    it('should return a fulfilled promise', () => {
      const promise = readFile('test/fixtures/package_one.json');
      return assert.isFulfilled(promise);
    });

    it('should return a rejected promise if there was an error', () => {
      const promise = readFile();
      return assert.isRejected(promise);
    });

    it('should eventually return data from a file', () => {
      const promise  = readFile('test/fixtures/package_one.json');
      const expected = [ { "type": "Type", "name": "Bug", "color": "fff" } ];
      return assert.eventually.deepEqual(promise, expected);
    });
  });
});
