function replaceText() {
  let text = document.querySelector(".about").innerText;
  console.log(text);

  let newHtml = text.replace(/the/g, "banana").replace(/The/g, "Banana");
  document.querySelector(".about").innerText = newHtml;
  console.log(newHtml);
}
setInterval(replaceText, 3000);
