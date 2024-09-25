function order() {
  let quantity = prompt("How many cups would you like?");
  let name = prompt("What is your first name?");
  let email = prompt("What is your email?");

  alert(
    "Thanks " +
      name +
      "! We'll be in touch soon with more details. Feel free to contact us if you have any questions at nokuthaba2608@gmail.com"
  );
}

let button = document.querySelector("button");
button.addEventListener("click", order);
