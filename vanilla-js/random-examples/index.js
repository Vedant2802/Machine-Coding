const data = [
  {
    option: "one",
    data: ["Akshat", 25],
  },
  {
    option: "two",
    data: ["Akshat", 26],
  },
  {
    option: "three",
    data: ["Akshat", 27],
  },
  {
    option: "four",
    data: ["Akshat", 28],
  },
];

const selection = document.getElementById("select");
const section = document.getElementById("section");
// section.setAttribute("class", "section");
// console.log(selection);
selection.addEventListener("change", function (e) {
  const optionIndex = e.target.selectedIndex;
  section.innerHTML = "";
  const dataDiv = document.createElement("div");
  const fragment = document.createDocumentFragment();
  const [name, age] = data[optionIndex].data;
  dataDiv.innerHTML = `<span>The name is ${name} and the age is ${age}</span>`;

  //   dataDiv.innerHTML = data[optionIndex].data.map(
  //     (item) => `<span>The name is ${item[0]} and the age is ${item[1]}</span>`
  //   );
  // .join("");

  fragment.append(dataDiv);
  section.append(fragment);
  section.classList.add("section");
});

// initial Load
const dataDiv = document.createElement("div");
const [name, age] = data[0].data;
dataDiv.innerHTML = `<span>The name is ${name} and the age is ${age}</span>`;
section.classList.add("section");
section.append(dataDiv);
