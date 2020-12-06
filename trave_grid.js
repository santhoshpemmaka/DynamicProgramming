const travel_grid = (x,y,num={}) => {
    let key = x+","+y
    if (key in num) return num[key]
    if(x==0 || y==0) return 0;
    if(x == 1 && y ==1 ) return 1;
    num[key] = travel_grid(x-1,y,num)+travel_grid(x,y-1,num)
    return num[key]
}

console.log(travel_grid(3,3))
console.log(travel_grid(2,2))
console.log(travel_grid(18,18))
console.log(travel_grid(30,30))
