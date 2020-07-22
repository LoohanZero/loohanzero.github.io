const sendButton = document.getElementById("button");
const name = document.getElementById("complete-name");
const email = document.getElementById("email");
const knowMe = document.getElementById("know-me");
const motives = document.getElementsByClassName("motives");
const message = document.getElementById("message");
const form = document.getElementsByTagName("form")


// Funciones

const formHandler = (event) => {

};
const nameHandler = (event) => {
  const name = event.target.value;
  console.log(name);
};
const emailHandler = (event) => {
  const email = event.target.value;
  console.log(email);
};
const knowMeHandler = (event) => {
  const info = event.target.value;
  console.log(info);
};
const motivesHandler = (event) => {
  const motive = event.target.value;
  console.log(motive);
};
const messageHandler = (event) => {
  const message = event.target.value;
  console.log(message);
};



//  Listeners
name.addEventListener("keydown", nameHandler);
name.addEventListener("click", nameHandler);
email.addEventListener("keydown", emailHandler);
email.addEventListener("click", emailHandler);
knowMe.addEventListener("click", knowMeHandler);
console.log(motives);
message.addEventListener("keydown", messageHandler);
sendButton.addEventListener("click", formHandler);
for (let i = 0; i < motives.length; i++) {
  motives[i].addEventListener("click", motivesHandler);
}
