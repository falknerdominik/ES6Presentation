
/**
 * A simple LiFo Stack implementation
 */
class Stack {
  constructor({name = "<no name>", dataArray = null} = {}) {
    this.data = dataArray || [];
    this.top = dataArray ? dataArray.length : 0;
    this._name = name;
  }

  // push a element on the stack
  push(elem) {
    this.data[this.top++] = elem;
  }

  /* removes the top most element from stack
   * @throws: InvalidStateException if the stack is empty
   * @returns: the top most element
   */
  pop() {
    // if(this.isEmpty) throw {name: "InvalidStateException", message: "The stack is empty!"}
    if(this.isEmpty) throw new IllegalStateException("Stack ist empty!");
    return this.data[--this.top];
  }

  // @returns: the top most element
  get peek() {
    if(this.isEmpty) throw new IllegalStateException("Stack ist empty!");
    return this.data[this.top - 1];
  }

  // @returns: if the stack is empty
  get isEmpty() {
    return (this.top <= 0);
  }

  // @returns: name of stack
  get name() {
    return this._name;
  }

  // sets the name of the stack
  set name(name) {
    this._name = name || "<no name>"
  }

  // @returns: String representation
  toString() {
    return `[object Stack (${this.name})] {top: ${this.top}, data: [${this.data}]}`;
  }
}

// node doesn't provide a simple way to extend the Error (Exception)
// Object because of that we use a helper class
class Exception extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    Error.captureStackTrace(this, this.constructor.name);
  }
}

// now Exception can extended
class IllegalStateException extends Exception {
  constructor(message) {
    super(message);
  }
}

// export needed classes
module.exports = {
  Stack: Stack,
  IllegalStateException: IllegalStateException
}
