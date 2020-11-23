export class Node {
  constructor(data, next=null) {
    this.data = data
    this.next = next
  }
}

class LinkedList{
  constructor() {
    this.head = null
    this.size = 0
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  // insert last node
  // insertLast(data){
  //   let node = new Node(data)
  // }

  // insert index

  // get index

  //remove index

  //clear list

  // print list data
  printListData() {
    let current = this.head
    while (current){
      console.log(current.data)
      current = current.next
    }
  }

}

export default LinkedList



