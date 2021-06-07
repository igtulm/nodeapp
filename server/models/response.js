export class Response {
  constructor(data = {}, errors = null) {
    this.data = data;
    this.errors = errors;
  }
}
