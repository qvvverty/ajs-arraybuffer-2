import getBuffer from '../getbuffer';
import ArrayBufferConverter from '../arraybufferconverter';

const testBuffer = getBuffer();
const converter = new ArrayBufferConverter();
converter.load(testBuffer);

test('Expect converter to return proper string', () => {
  expect(converter.toString(testBuffer)).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
