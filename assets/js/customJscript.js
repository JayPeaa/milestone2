var keys,
  allData,
  currentData,
  startPos = 0,
  increment = 10;

var scrollEvent = d3.behavior.zoom()
  .on('zoom', function(e) {
    var scrollDirection = (d3.event.sourceEvent.deltaY > 0) ? 1 : -1;
    startPos += (scrollDirection > 0 && startPos + increment < allData.length) ? scrollDirection :
      (scrollDirection < 0 && startPos + increment > increment) ? scrollDirection :
      0;
      console.log(scrollDirection)
    updateTable();
  });

var table = d3.select("#data-table");
var thead = table.append("thead");
var tbody = table.append("tbody").call(scrollEvent);


d3.csv("assets/data/storeSales.csv", function(error, data) {
  if (error) throw error;

  keys = Object.keys(data[0]), //this is the column headings
    allData = data; //this is all my data as an object so all 91k rows


  thead.append('tr')
    .selectAll('th')
    .data(keys).enter()
    .append('th')
    .text(function(d) {
      return d;
    });

  updateTable();
});

function updateTable() {
  // Set new data based on startPos and increment.
  currentData = allData.slice(startPos, startPos + increment);

  // Delete previous rows.
  tbody.selectAll('tr.dc-table-row').remove();

  // Create new rows.
  var tr = tbody.selectAll("tr.dc-table-row")
    .data(currentData).enter()
    .append("tr.dc-table-row")
    .classed("even", function(d, i) {
      return i % 2 == 1;
    });
  console.log(tr)
  tr.selectAll('td.dc-table-column')
    .data(function(d) {
      return keys.map(function(e) {
        return {
          key: e,
          value: d[e]
        }
      });
    }).enter()
    .append('td.dc-table-column')
    .text(function(d) {
      return d.value;
    });
}
