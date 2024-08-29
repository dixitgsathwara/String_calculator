const stringCalculator=(number)=>{
    if(number === ""){return 0;}
    if(number.length == 1){
        return parseInt(number);
    }
};
module.exports=stringCalculator;