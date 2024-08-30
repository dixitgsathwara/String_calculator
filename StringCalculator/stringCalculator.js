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
    const negativeArray=[];
    const sol=arr.reduce((sum,num)=>{
        if(parseInt(num)<0){
            negativeArray.push(parseInt(num));
        }
        else if(parseInt(num)<1000) {
            sum+=parseInt(num);
        }
        return sum;
    },0)
    if (negativeArray.length > 0) {
        return `Negatives not allowed: ${negativeArray.join(',')}`;
    }
    return sol;
};
module.exports=stringCalculator;