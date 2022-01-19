// //Use Fetch API to make HTTP req for water.JSON
// //extract JSON data from HTTP res
// //call util method 1, passing in data

fetch("/data/water.json")
    .then(res => res.json())
    .then(sources => addSourcesToPage(sources));

  // Utility method 1:
// Iterates over water sources array, passing each
// water source object to Utility method 2. Method 2 returns
// `li` DOM nodes, which are then appended to the list we created
// in water.html.
function addSourcesToPage(sources) {
  //save html element as a js var
  const list = document.getElementById("WaterSources");

  sources.forEach(source => {
    let newLi = createLi(source);
    list.appendChild(newLi);
  })
};

//create function that will add line elements containing source obj to 
//ordered list in water.html.
function createLi(data) {
  const li = document.createElement("li");
  li.innerHTML = data.name;

  const paragraph = document.createElement("p");
  paragraph.innerHTML = `Discharge (cubic feet per second): ${data.discharge}`;

  li.appendChild(paragraph);

  return li;
}



