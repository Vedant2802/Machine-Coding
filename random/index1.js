const data = [
  { option: "one", data: ["Akshat", 25] },
  { option: "two", data: ["Akshat", 26] },
  { option: "three", data: ["Akshat", 27] },
  { option: "four", data: ["Akshat", 28] },
];

const selection = document.getElementById("select");
const section = document.getElementById("section");

function renderData(index) {
  section.innerHTML = "";
  const [name, age] = data[index].data;
  const dataDiv = document.createElement("div");
  dataDiv.innerHTML = `<span>The name is ${name} and the age is ${age}</span>`;
  section.classList.add("section");
  section.append(dataDiv);
}

selection.addEventListener("change", (e) => {
  renderData(e.target.selectedIndex);
});

// Initial render
renderData(0);
