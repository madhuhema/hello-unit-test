fdescribe('hellotest', () => {
  let expected = '';
  let notExpected = '';
  let patternExpected = null;
  beforeEach(() => {
    expected = 'hellotest';
    notExpected = 'hellotest1';
    patternExpected = new RegExp(/^hello/);
  });
  afterEach(() => {
    expected = '';
    notExpected = '';
  });
  // test to check whether the string 'hellotest' matches 'hellotest'
   it('checks if hellotest is hellotest', () => {
     expect('hellotest').toBe(expected);
   });
   // test to check whether the string 'hellotest' does not match the string 'hellotest1'
   it('checks if hellotest is not hellotest1', () => {
    expect('hellotest').not.toBe(notExpected);
   });
   // test to check whether the string 'hellotest' starts with a regex pattern 'hello'
   it('checks if hellotest starts with hello', () => {
    expect('hellotest').toMatch(patternExpected);
   });
});
