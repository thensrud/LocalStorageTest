
const saveNameBtn = document.getElementById("saveNameBtn");
const clearBtn = document.getElementById("clearBtn");
const nameOutputDiv = document.getElementById("name_output_div");

saveNameBtn.onclick = function () {
  const user_input_names = document.getElementById("user_input_names").value;
  const nameList = JSON.parse(window.localStorage.getItem("nameList")) || [];
  nameList.push(user_input_names);
  window.localStorage.setItem("nameList", JSON.stringify(nameList));
  renderNames();

  document.getElementById("user_input_names").value = "";
};

function renderNames () {
  const nameListJSON = window.localStorage.getItem("nameList");
  const nameList = JSON.parse(nameListJSON) || [];
  nameOutputDiv.innerHTML = "";
  for (const user_input_names of nameList) {
    nameOutputDiv.innerHTML += `<div class="output_card">${user_input_names}</div>`;
  }
}

clearBtn.onclick = function () {
  window.localStorage.clear();
  nameOutputDiv.innerHTML = "";
};
