// The possible adding coins to get given cost. Retrun true or false.
const minimum_coins = (targetSum,numbers,memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum == 0) return true
    if(targetSum <0) return false
    for(let num of numbers){
        remainder = targetSum - num;
        if(minimum_coins(remainder,numbers,memo) == true ){
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}
console.log(minimum_coins(300,[7,14]))

// Return any possible array coins to get given cost. 

const minimum_coins = (targetSum,numbers,memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum == 0) return [];
    if(targetSum <0) return null;
    for(let num of numbers){
        let remainder = targetSum - num;
        let remainder_coins = minimum_coins(remainder,numbers,memo)
        if(remainder_coins != null){
            remainder_coins = [...remainder_coins,num]
            memo[targetSum] = remainder_coins;
            return remainder_coins;
        }
    }
    memo[targetSum] = null;
    return null;
    
}
console.log(minimum_coins(300,[7,14,100]))


// shorest path array coins to get given cost. Return shorest path array coins.

const minimum_coins = (targetSum,numbers,memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum == 0) return [];
    if(targetSum <0) return null;
    let shortest_coin = null
    for(let num of numbers){
        let remainder = targetSum - num;
        let remainder_coins = minimum_coins(remainder,numbers,memo)
        if(remainder_coins != null){
            combination_coins = [...remainder_coins,num]
            
            if(shortest_coin == null || combination_coins.length < shortest_coin.length ){
                shortest_coin = combination_coins;
                memo[targetSum] = shortest_coin;
            }
        }
        
    }
    memo[targetSum] = shortest_coin;
    return shortest_coin;
    
}
console.log(minimum_coins(11,[9, 6, 5, 1]))
