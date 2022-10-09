// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
// With Helper Function

function collectStrings(obj) {
    let newArr = [];
    const flat = (obj) => {
      Object.keys(obj).forEach((key) => {
        if (typeof obj[key] == "object") {
          flat(obj[key]);
        } else {
            newArr.push(obj[key])
        }
      });
    };
  flat(obj)
    return newArr;
  }

collectStrings(obj) // ["foo", "bar", "baz"])

// collectStrings Solution: Pure Recursion Version

function collectStrings(obj) {
    var stringsArr = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
 
    return stringsArr;
}