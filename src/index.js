import BigNumber from "bignumber.js"

function sum(num1, num2) {
    num1 = new BigNumber(num1)
    num2 = new BigNumber(num2)
    
    return num1.plus(num2).toNumber()
}

export default {
    sum,
}