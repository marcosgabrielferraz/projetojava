const source = [1,2,3,4,5,6,7,8,9,10];
function removerFirstTwo(list) {
    
    const [ , , ...arr] = list;
    
    return arr;
}
const arr = removerFirstTwo(source);
console.log(arr);
console.log(source);