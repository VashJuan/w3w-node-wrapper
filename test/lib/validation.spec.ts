import 'should';
import { Chance } from 'chance';
import { valid3wa } from '../../src';

const CHANCE = new Chance();

describe('valid3wa', () => {
  it('should return true if valid 3wa is provided', () => {
    const words = `${CHANCE.word()}.${CHANCE.word()}.${CHANCE.letter()}`;
    valid3wa(words).should.be.equal(
      true,
      'partial three word address should be valid'
    );
  });
  it.skip('should return true if valid 3wa is provided', () => {
    const words = `${CHANCE.word()}.${CHANCE.word()}.${CHANCE.word()}`;
    valid3wa(words).should.be.equal(
      true,
      'full three word address should be valid'
    );
  });
  it('should return false if invalid 3wa is provided', () => {
    const words = `${CHANCE.word()}`;
    valid3wa(words).should.be.equal(false);
  });
  it('should return false if invalid 3wa is provided', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const words = CHANCE.bool() as any;
    valid3wa(words).should.be.equal(false);
  });
});
