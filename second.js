let arr=["apple","guava","orange"];
console.log(arr);

arr.push("banana");/*push() is used to add element at end */
console.log(arr);

let pulled= arr.pop();/*pop() is used to remove from end */
console.log("Pulled= ",pulled);
console.log(arr);

arr.unshift("grapes");//unshift() is used to add at beginning
console.log(arr);

let remove=arr.shift("guava");//shift() is used to remove from beginning
console.log("Removed= "+remove);
console.log(arr);