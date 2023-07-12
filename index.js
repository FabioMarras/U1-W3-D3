const press = function (eventsubmit) {
  eventsubmit.preventDefault();
  console.log(eventsubmit);
  const valor = eventsubmit.target[0].value;
  console.log(valor);
  const container = document.getElementById("lista");
  container.innerHTML += `<li>${valor}</li>`;

  let removebutton = document.createElement("button");
  removebutton.innerText = "Elimina";
  removebutton.addEventListener("click", function () {
    confirm.remove();
    this.dispatchEvent.remove;
  });
  confirm.appendChild(removebutton);
};
