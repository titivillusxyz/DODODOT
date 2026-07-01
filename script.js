const input = document.getElementById("preview-input");

function resizeInput() {
  input.style.height = "auto";
  input.style.height = `${input.scrollHeight}px`;
}

input.addEventListener("input", resizeInput);
resizeInput();
