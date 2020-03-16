module.exports = function toReadable(num) {
    const number = {
    0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine",
    10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen",
    20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety",
    }
    
    if (num <= 10) { 
        return number[num];
    }
    const variety = Math.floor(num % 100 / 10);
    const hundreds = Math.floor(num / 100);
    const numeral = num % 100 % 10;

    const hundredsInText = hundreds ? `${number[hundreds]} hundred ` : '';

    if (! variety && !numeral) {
        return hundredsInText.trim();
    }

    const  varietyInText =  variety &&  variety >= 2 ? `${number[ variety * 10]} ` : number[ variety * 10 + numeral];
    const numeralInText = number[numeral]; 

    return (hundredsInText +  varietyInText + ( variety >= 2 && numeral ? numeralInText : '')).trim();
};

