const optionContainer = document.querySelector(".options-inputs"),
  optionAcionButton = document.querySelector(".option-header .fa");
const errorEl = document.querySelector(".admin-container .error-msg");
let optionNo = 1;
let errorMsg = "";

const createOption = () => {
  optionNo++;
  errorMsg = "";
  const optionInputs = optionContainer.querySelectorAll("input");
  const optionField = document.createElement("input");
  optionField.setAttribute("type", "text");
  optionField.setAttribute("placeholder", "Option " + optionNo);
  optionField.setAttribute("name", "field-" + optionNo);
  if (optionInputs.length > 0) {
    if (optionInputs[optionInputs.length - 1].value.length > 3) {
      errorEl.textContent = "";
      optionField.focus();
      return optionContainer.appendChild(optionField);
    }
    errorMsg = "Last Option must be more than 3 Characters";
    return (errorEl.textContent = errorMsg);
  }
  errorEl.textContent = "";
  optionField.focus();
  optionContainer.appendChild(optionField);
};

optionAcionButton.addEventListener("click", createOption);
