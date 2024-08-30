const stringCalculator = (number) => {
    
    if (number === "") {
        return 0;
    }

    if (number.length == 1) {
        return parseInt(number);
    }

    let delimiter = /,|\n/;
    if (number.startsWith("//")) {
        const delimiterEndIndex = number.indexOf('\n');
        delimiter = new RegExp(number.substring(2, delimiterEndIndex));
        number = number.substring(delimiterEndIndex + 1);
    }

    const arr = number.split(delimiter);
    const negativeArray = [];
    const sum = arr.reduce((total, num) => {
        let n = parseInt(num);
        if (n < 0) {
            negativeArray.push(n);
        }
        else if (n < 1000) {
            total += n;
        }
        return total;
    }, 0);
    if (negativeArray.length > 0) {
        return `Negatives not allowed: ${negativeArray.join(',')}`;
    }
    return sum;
}

module.exports = stringCalculator;