const nums = [1,2,3,4,5];
const plusNume = nums.map((value)=> value+5);
console.log(plusNume);

const todos = ['a','b','c'];

// const todosList = todos.map((value)=> "<li>"+value+"</li>");
const todosList = todos.map((value)=>`<li>${value}</li>`);
console.log(todosList);

const names = ['ㅋㅋ','ㅌㅌ','ㅍㅍ','ㅁㅁ'];
const addNames = names.concat('코코');
console.log(addNames);
console.log(names.slice(0,3));

const index = 2; 
const delNames = [...names.slice(0,index),...names.slice(index+1,names.length)];
console.log(delNames);

const delNames2 = names.filter ((name, i)=> i !== index);
console.log(delNames2);