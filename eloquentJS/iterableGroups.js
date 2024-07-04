// Make the Group class from the previous exercise
// iterable. Refer to the section about the
// iterator interface earlier in the chapter if
// you aren’t clear on the exact form of the
// interface anymore.

// If you used an array to represent the group’s
// members, don’t just return the iterator created
// by calling the Symbol.iterator method on the
// array. That would work, but it defeats the
// purpose of this exercise.

// It is okay if your iterator behaves strangely
    // when the group is modified during iteration.
    class Group {
        constructor(){
            this._group = []
        }
        add(x){
            this._group.includes(x) ? null : this._group.push(x)
            
        }
        delete(x){
            this._group.includes(x) ? this._group.splice(this._group.indexOf(x),1) : null
            
        }
        has(x){
            return this._group.includes(x) 
        }

        static from(obj){
            let newGroup = new Group()
            for (let item of obj){
                newGroup.add(item)
            }
            return newGroup
            }

        }

        Group.prototype[Symbol.iterator] = function() {
            return new GroupIterator(this);
        };

        class GroupIterator {
            constructor(obj) {
            this.index = 0;
            this._group = obj._group
            }
        
            next() {
                if (this.index === this._group.length) return {done: true};
                let value = this._group[this.index]
                this.index++
                return {value,done : false}
            }
        }

    for (let value of Group.from(["a", "b", "c"])) {
        console.log(value);
    }