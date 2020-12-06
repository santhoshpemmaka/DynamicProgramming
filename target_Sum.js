const canSum = (targetSum, numbers,memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum ==0) return true
    if(targetSum < 0) return false
    for (let number of numbers){
        let remainder = targetSum - number;
        if(canSum(remainder,numbers,memo) == true) 
        { 
            memo[targetSum] = true;
            return true
        }
    }
    memo[targetSum] = false;
    return false
    
}

console.log(canSum(300,[7,14]))
