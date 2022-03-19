




function myAtoi(s) {  // +

    return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, parseInt(s) || 0))
}



console.log(myAtoi(" -21474836460"));

