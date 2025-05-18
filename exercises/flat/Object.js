let obj = {
    name:"Shahith",
    age:23,
    address:{
        flat:"15/5",
        city:"Chennai",
        a:{b:"kasamiyan"}
    }
}

// 1. In Single Function
function flatObject(obj,oldKey) {
   
    let newObj = {};
  for(let key in obj) {
      if(typeof obj[key] != "object") {
          
          const newKey = oldKey ? `${oldKey}.${key}` : key;
          newObj[newKey] = obj[key];
      }
      else {
          const flattenObj = flatObject(obj[key], oldKey ? `${oldKey}.${key}` : key);
          newObj = {...newObj, ...flattenObj};
      }
  }
  return newObj;
}

// 2. With Helper function
function flatObject(obj) {
    let newObj = {};
    const flat = (obj) => {
      Object.keys(obj).forEach((key) => {
        if (typeof obj[key] == "object") {
          flat(obj[key]);
        } else {
            newObj[key] = obj[key]
        }
      });
    };
    flat(obj);
    return newObj;
  }

  flatObject(obj)
