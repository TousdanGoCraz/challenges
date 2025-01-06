class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length= 0
    }

    push(val){
        let list = new Node(val)
        if(!this.head){
            this.head = list
            this.tail = this.head
        }else{
            this.tail.next = list
            this.tail = list
        }
        this.length++
        return this
    }
}
let linkedList = new SinglyLinkedList()

linkedList.push(41)
linkedList.push(42)
linkedList.push(1)
linkedList.push(51)
console.log(linkedList)