let array = [-5,2,10,3,9]

function linearSearch(arr,ele) {
for(let i=0;i<arr.length;i++) {
    if(arr[i] === ele) {
        return i
    }
}
return -1
}

console.log(linearSearch(array,10))
console.log(linearSearch(array,9))
console.log(linearSearch(array,1))