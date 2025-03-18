const removeFromArray = function(arr,...rem) {
    const newArr=[];

    for(let ite of arr){
        if(!rem.includes(ite)){
        newArr.push(ite);
        }
    }

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
