
const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");
const outputDiv = document.getElementById("output_div");

saveBtn.onclick = function () {
  let user_input = document.getElementById("user_input").value;
  window.localStorage.setItem("text", user_input);
  outputDiv.innerHTML += `<div class="output_card">${window.localStorage.getItem("text")}</div>`;

  document.getElementById("user_input").value = "";
};

clearBtn.onclick = function () {
  window.localStorage.clear();
  outputDiv.innerHTML = "";
};
