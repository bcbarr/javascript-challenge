// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);


var table = d3.select("tbody");

function buildTable(data) {
    table.html("")
    data.forEach((dataRow) => {
        var row = table.append("tr");

        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}
buildTable(tableData)
// Complete the event handler function for the form
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    console.log(inputValue);
    
    var filteredData = tableData.filter(row=> row.datetime === inputValue);
    
    console.log(filteredData);

    buildTable(filteredData);
    
}
    
   