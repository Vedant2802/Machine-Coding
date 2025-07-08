// const container = document.createElement("div");
const section = document.getElementById("section");
const unorderedList = document.createElement("ul");
const currentTime = Date.now();
console.log(currentTime);
for (let i = 0; i <= 10000; i++) {
  const li = document.createElement("li");
  unorderedList.appendChild(li);
}
section.append(unorderedList);

const elapsedTIme = Date.now();
console.log(elapsedTIme);
