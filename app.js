const form = document.querySelector("form")
const ul = document.querySelector("ul")
ul.classList.add("games", "list")
let removeButton;

form.addEventListener("submit" , (e) =>{
    e.preventDefault()
    const inputName = form.querySelector("#name").value;
    const inputPrice= form.querySelector("#price").value;
    const inputImage = form.querySelector("input#img").value;
   
    let item= `<h3>name:</h3><p>${inputName}</p> 
    <h3>price:</h3><p>  ${inputPrice} </p>
    <img src=${inputImage.src}/> </p>`
    let li = document.createElement("li");
    li.innerHTML = item;
    li.classList.add("games");
    removeButton = document.createElement("button");
    removeButton.classList.add("remove");
    removeButton.textContent= "remove";
    removeButton.addEventListener("click" , (e) =>{
        e.stopPropagation();
        
        li.remove();
        return;
    })
    li.appendChild(removeButton);
    ul.appendChild(li);
    inputImg.appendChild(li)
})

/*let loginForm = document.getElementById("cart");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let Name = document.getElementById("Name");
  let price = document.getElementById("price");

  if (Name.value == "" || price.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${Name.value} and password of ${price.value}`
    );

    Name.value = "";
    price.value = "";
  }
}); */