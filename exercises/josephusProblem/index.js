function josephus(a,b) {
    let arr = []
      const rec = (i,b,arr) => {
        if(arr.length == 1){
          return ;
        }
        i=(i+b-1)%arr.length; // 1
        arr.splice(i,1) // [1,3,4,5]
        rec(i,b,arr) // it will call until array length is 1
      }
    for (let i = 0; i <a; i++) { 
      arr[i] = i+1; // setting the array value [1,2,3,4,5]
    } 
      rec(0,b,arr)
      return arr[0]
    }
    
    console.log(josephus(3,2))
    