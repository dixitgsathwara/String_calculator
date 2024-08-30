const stringCalculator=(number)=>{
    if(number === ""){return 0;}
    if(number.length == 1){
        return parseInt(number);
    }
    let delimiter = /,| \n |;/; 
    if(number.startsWith("//")){
        const delimiterEndIndex = number.indexOf('\n');
        delimiter = new RegExp(number.substring(2, delimiterEndIndex));
        number = number.substring(delimiterEndIndex + 1);
    }
    const arr=number.split(delimiter);
    return arr.reduce((sum,num)=>sum+parseInt(num),0);
};
module.exports=stringCalculator;