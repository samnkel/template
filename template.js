const mult = `
  first line
  second line
  third line
  forth line
`;

console.log (mult);

function genhtml(html){
return`
<div>
<h1>sam</h1>
<p>coding</p>
</div>
`
}

const htmlData= {name:"sam", course: 'coding'}
const htmlHTML= genhtml(htmlData)
console.log(htmlHTML)

const greet = (name) => {
  const message = `Hello, ${name}`;
  return message;
};
console.log(greet("sam"));

const numbers = [1,2,3,4,5]
numbers.forEach (numbers => console.log(`consulant ${numbers}.`));