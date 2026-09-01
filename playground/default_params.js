const greeter = (name = 'Guest', age) => {
  console.log(`Hello ${name}`);
}

const pastel = ({name, age} = {}) => {
  console.log('Name', name);
  console.log('Age', age);
}
greeter();
pastel();