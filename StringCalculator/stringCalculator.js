const stringCalculator=(number)=>{
    if(number === ""){return 0;}
    if(number.length == 1){
        return parseInt(number);
    }
    const arr=number.split(',');
    return arr.reduce((sum,num)=>sum+parseInt(num),0);
};
module.exports=stringCalculator;