import chai, {assert} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import {formatLabel} from '../../src/lib/label';

chai.use(chaiAsPromised);


describe('Lib: Label', () => {
  describe('formatLabel', () => {
    it('should return a properly formatted object', () => {
      const expected = {name: 'Type: Accepted', color: 'fff', description: 'This is a description' };
      const actual   = formatLabel({ name: 'Type: Accepted', color: '#fff', description: 'This is a description' });
      return assert.deepEqual(expected, actual);
    });
  })
});
