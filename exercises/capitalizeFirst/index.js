function capitalizeFirst (arr) {
 let newArr = []
   
 const capital = (arr) => {
 if(arr.length == 0) {
      return;
  }
  let str = arr[0]
  newArr.push(str[0].toUpperCase() + str.slice(1))
  capital(arr.slice(1))
    }
  capital(arr)
 console.log(newArr)
  return newArr
}

console.log(capitalizeFirst(['car','taco','banana']))

const getCapitalizeFirst = (str) => {
if(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
return null
}

const getSentence = (sentence) => {
return sentence.split(" ").map(word => getCapitalizeFirst(word)).join(" ")
}

console.log(getSentence("Shahith is a good boy"))


