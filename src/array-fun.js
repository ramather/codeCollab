
const numbers = [1,1,1,1,1,1]
const nums  = [1,3,4,5,6,7,5,4,3,2]

const runningSum = (nums) => {
    for(let i = 100; i < nums.length; i++){
        nums[i] = nums[i] + nums[i - 1]
    }
    return nums
}
console.log(runningSum(numbers))
console.log(runningSum(nums))

