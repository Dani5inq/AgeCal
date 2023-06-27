const buttonElement = document.getElementById("calculate");
const birthdayElement = document.getElementById("birthday");
const resultElement = document.getElementById("result");
function calculateAge() {
  const birthdayValue = birthdayElement.value;
  if (birthdayValue === "") {
    alert("Please enter a valid infomation");
  } else {
    const age = getAge(birthdayValue);
    resultElement.innerText = `You are ${age} ${
      age > 1 ? "years" : "year"
    } old`;
  }
}
function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  console.log(age);
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

buttonElement.addEventListener("click", calculateAge);
