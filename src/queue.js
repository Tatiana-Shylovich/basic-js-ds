const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.first = null
    this.last = null
    this.items = {}
    this.length = 0
  }

  getUnderlyingList() {
    return this.items[this.last]
  }

  enqueue(value) {
    if (this.length === 0) {
      let item = new ListNode(value)
      this.items[this.first] = item
    } else {
      let current = this.items[this.last]
      while (current.next) {
        current = current.next
      }
      current.next = new ListNode(value)
    }
    this.length++
  }
  dequeue() {
    let item = this.items[this.first]
    this.items[this.first] = item.next
    this.length--
    return item.value
  }
}

module.exports = {
  Queue
};
