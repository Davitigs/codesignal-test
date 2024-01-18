import 'jest-preset-angular/setup-jest';
import * as casual from 'casual';


URL.createObjectURL = jest.fn(() => casual.url);

class Worker {
  url: string;
  onmessage: Function;
  constructor(stringUrl: string) {
    this.url = stringUrl;
    this.onmessage = (msg: string) => casual.string;
  }
  postMessage(msg: string): void {
    this.onmessage(msg);
  }
}

Object.defineProperty(window, 'Worker', {
  writable: true,
  value: Worker
});
