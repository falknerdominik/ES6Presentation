const assert = require("assert");
const Stack = require("./../lib/Stack.js").Stack;
const IllegalStateException = require("./../lib/Stack.js").IllegalStateException;

describe("Stack", function() {
  describe("Behavoir", function() {
    it("isEmpty must be empty on freshly instatiated stack", function() {
      let s = new Stack();
      assert.equal(true, s.isEmpty);
      assert.deepEqual([], s.data);
    });
    it("push must add elements to stack", function() {
      let s = new Stack();
      s.push(1);
      assert.equal(false, s.isEmpty);
      s.push(2);
      s.push(3); s.push(4);
      assert.deepEqual([1,2,3,4], s.data);
      assert.equal(false, s.isEmpty);
    });
    it("pop must remove elements to stack", function() {
      let s = new Stack();
      s.push(1); s.push(2);
      s.push(3); s.push(4);
      assert.equal(false, s.isEmpty);
      let arr = [];
      while(!s.isEmpty) arr.push(s.pop());
      assert.deepEqual([4,3,2,1], arr);
    });
    it("name must default to <no name>", function() {
      let s = new Stack();
      assert.equal("<no name>", s.name);
    });
    it("name must be assigned to stack", function() {
      let s = new Stack({name: "MainStack"});
      assert.equal("MainStack", s.name);
    });
    it("init Stack with array of data", function() {
      let s = new Stack({dataArray: [1, 2, 3, 4, "dynamic"]});
      assert.deepEqual([1, 2, 3, 4, "dynamic"], s.data);
    });
  });
  describe("Exceptions", function() {
    it("must throw IllegalStateException if empty Stack is popped.", function() {
      let s = new Stack();
      try {
        s.pop();
      } catch(exception) {
        assert.equal(true, exception instanceof IllegalStateException);
      }
    });
    it("must throw exception if empty Stack is peeked.", function() {
      let s = new Stack();
      try {
        s.peek();
      } catch(exception) {
        assert.equal(true, exception instanceof IllegalStateException);
      }
    });
  });
});
