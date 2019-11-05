const Classes = require('../playground.js');

describe('LinkedLists', () => {

  let LinkedList;

  beforeEach(() => {
    LinkedList = new Classes.LinkedList();
  });

  it('should create an empty linked list', () => {
    // Place your playground tests here.
    expect(LinkedList.size).toBe(0);
  });

  it('should increase in size after a node is added', () => {
    LinkedList.insertFirst(1);
    expect(LinkedList.size).toBe(1);
  });

  it('should initiate first added value as head', () => {
    LinkedList.insertLast(4);
    expect(LinkedList.head.data).toBe(4);
  });

  it('should get a node at a certain index', () => {
    LinkedList.insertFirst(3);
    LinkedList.insertLast(4);
    expect(LinkedList.getAt(1)).toBe(4);
  });

  it('should delete a node at a given index', () => {
    LinkedList.insertLast(2);
    LinkedList.insertLast(4);
    LinkedList.insertLast(5);
    expect(LinkedList.getAt(2)).toBe(5);
  });

  it('should insert a node at a given index', () => {
    LinkedList.insertLast(2);
    LinkedList.insertLast(4);
    LinkedList.insertLast(5);
    LinkedList.insertAt(8, 1);
    expect(LinkedList.getAt(1)).toBe(8);
  });

  it('should clear the list', () => {
    LinkedList.insertLast(2);
    LinkedList.insertLast(4);
    LinkedList.insertLast(5);
    LinkedList.clearList();
    expect(LinkedList.size).toBe(0);
  });

  it('should remove the last node', () => {
    LinkedList.insertLast(2);
    LinkedList.insertLast(4);
    LinkedList.insertLast(5);
    LinkedList.removeLast();
    expect(LinkedList.size).toBe(2);
  });
}); 