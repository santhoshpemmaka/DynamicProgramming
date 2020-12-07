const maxSubarray = (numbers) => {
    let sum_array = 0;
    let maximum_array = 0;
    for (let num of numbers){
        sum_array = sum_array+num;
        if(sum_array > maximum_array){
            maximum_array = sum_array;
        }
        if(sum_array < 0){
            sum_array = 0;
        }
    }
    return maximum_array;
}

console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4])) // 4,-1,2,1
