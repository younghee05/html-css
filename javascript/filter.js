let names = ["김영희", "김일희", "김이희"];

console.log(names);

names = names.map((name, index) => {return name + "님";}); 
// ["김영희님", "김일희님", "김이희님"]; 으로 출력이 된다 
console.log(names);

// names = names.filter(name => {return name !== "김일희님"}); // 김일희가 아니면 나머지 애들이 새로운 리스트에 담는다 
names = names.filter((name, index) => {return index !== 1;}); // index의 1번째에 있는 것을 없앤다
console.log(names);