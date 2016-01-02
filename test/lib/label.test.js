import chai, {assert} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import {formatLabel} from '../../src/lib/label';

chai.use(chaiAsPromised);


describe('Lib: Label', () => {
  describe('formatLabel', () => {
    it('should return a properly formatted object', () => {
      const expected = {name: 'Type: Accepted', color: 'fff' };
      const actual   = formatLabel({ name: 'Type: Accepted', color: '#fff' });
      return assert.deepEqual(expected, actual);
    });
  })
});
