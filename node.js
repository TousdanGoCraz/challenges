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
        this.length = 0
    }

    push(val){
        let item = new Node(val)
        if(!this.head){
            this.head = val
            this.tail = this.head
        }else{
            this.tail.next = item
            this.tail = item
        }
        this.length += 1
        return this
    }
}

var list = new SinglyLinkedList()