// Given an array and chunk size, divide the array into many subarrays where each subarray is of the provided size.

// Examples:

 // Chunk size two:
//  chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
 
 // Chunk size two:
//  chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]

// 1.

function chunk(array, size) {
    let chunkedArray = []
    
    for (let element of array) {
        const last = chunkedArray[chunkedArray.length -1]
        if(!last || last.length === size){
            chunkedArray.push([element])
        }else {
            last.push(element)
        }
    }
    return chunkedArray;
}

 console.log(chunk([1, 2, 3, 4], 3))

// 2. slice method - inBuild function

function chunk(array, size) {
    let chunkedArray = []
    
  let index = 0;
  while(index < array.length) {
    chunkedArray.push(array.slice(index,index+size))
    index += size
  }
    return chunkedArray;
}

 console.log(chunk([1, 2, 3, 4], 3))