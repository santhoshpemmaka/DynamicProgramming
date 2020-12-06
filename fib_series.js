const fibn = (number, num = {}) => {
    if(number in num) return num[number]
    if(number <=2 ) return 1;
    num[number] = fibn(number-1,num) + fibn(number-2,num)
    return num[number]
}

console.log(fibn(1000))
