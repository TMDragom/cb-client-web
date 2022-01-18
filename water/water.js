//Use Fetch API to make HTTP req for water.JSON
//extract JSON data from HTTP res
//call util method 1, passing in data

fetch("/data/water.json")
  .then(res => res.json())
  .then(sources => addSourcesToPage(sources))

  // Utility method 1:
// Iterates over water sources array, passing each
// water source object to Utility method 2. Method 2 returns
// `li` DOM nodes, which are then appended to the list we created
// in water.html.

//save html element as a js var
const waterSources = document.getElementById("WaterSources");

//create function that will add line elements containing source obj to 
//ordered list in water.html.
const listMaker = obj => waterSources.append(`<li>${obj.name}</li>`).append(`<p>Discharge (cubic feet per second): ${obj.discharge}</p>`);

//tutorial recommended syntax: let li = createListItem(source)
//waterSources.appendChild(li);


const addSources = sources => {
  sources.forEach(source => listmaker(source));
}