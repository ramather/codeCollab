// we have a number that we want to click to
// we have a starting number
// based on the difference between the starting and the end we either increase or decrease

const start = 5
const target = 10

const addOrRemoveSeats = (start, target) => {
    if(start === target) return
    const increase = start < target
    while(start !== target){
        if(increase){
            // this represents us clicking the up arrow
            start++
        }else{
            // this represents us clicking the down arrow
            start--
        }
        // here we would reasign start to whatever is currently in the input field
        // this approach would most likely not be optimal as we would have to check the value in the input field each time
    }
    return start
}
console.log(addOrRemoveSeats(5,2))

// this approach is more optimal because it will not have to check for the input each time
const addOrRemoveSeatsPartTwoElectricBoogaloo = (start, target) => {
    let clicks;
    const increase = start < target
    increase ? clicks = target - start : clicks = start - target
    for(let i = 0; i < clicks; i ++){
        increase ? start++ : start--
    }
    return start
}
console.log(addOrRemoveSeatsPartTwoElectricBoogaloo(5,20))
