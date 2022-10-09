let obj = {
    name:"Shahith",
    age:23,
    address:{
        flat:"15/5",
        city:"Chennai",
        a:{b:"kasamiyan"}
    }
}

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