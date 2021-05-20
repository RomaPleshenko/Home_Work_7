const numberArr = [1, 2, 3, -1, -2, -3];
function getPositiveNumber(arr) {
    const exampleArr = [];
    if (arr.lenght === 0)  {
        return "error";
    } 
    for (i=0; i<=arr.lenght-1; i++){
        if (arr[i]>=0){
            exampleArr.push(arr[i]);
        }
    } 
    if (exampleArr.length === 0) {
        return null;
    } else {
        return exampleArr;
    }
}
console.log(getPositiveNumber(numberArr));