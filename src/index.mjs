import "./styles.css";

document
.getElementById("add-button")
.addEventListener("click", () => onClickA());

const onClickA = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";


  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  console.log(deleteButton);



  div.appendChild(li);
  
  document.getElementById("incomplete-list").appendChild(div);

}; 


