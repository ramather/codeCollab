import { bubbleSort } from "./sorts.js"

class Rack {
    constructor() {
        this._balls = []
    }
    add(b) { this._balls.push(b) }
    get balls(){
        return bubbleSort(this._balls)
    }
}

const rack = new Rack()
const nums = [4,3,6,7,8,25,6,3,12,3,4,5]
for(let i = 0; i < nums.length; i++){
    rack.add(nums[i])
}
console.log(rack._balls)
console.log(rack.balls)
 
