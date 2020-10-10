export default class ArrayBufferConverter {
  load(buffer) {
    this.loadedBuffer = buffer;
  }

  toString() {
    const uint16arr = new Uint16Array(this.loadedBuffer);
    return String.fromCharCode(...uint16arr);
  }
}
