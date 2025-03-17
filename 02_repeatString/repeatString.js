const repeatString = function(text,times) {
    let ans="";
    if(times<0) return "ERROR";
    for(let i=1;i<=times;i++){
        ans+=text;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
