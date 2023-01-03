function swap(arr, l, r){
    let temp = arr[l]
    arr[l] = arr[r]
    arr[r] = temp
}

export const bubbleSort = (arr) => {
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j + 1)
            }
        }
    }
    return arr
}

[8,5,4,2,3,1,2,3]
