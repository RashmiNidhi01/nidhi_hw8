fetch(
    "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json"
  )
  .then(response => response.json()) // Access and return response's JSON content 
  .then(paintings => {
      // Access the element
var painting = document.getElementById("paintings");
      // Iterate on the  array
      paintings.forEach(paintings => {
          //creates a table row
          var tr=document.createElement("tr")
          tr.innerHTML=`<td>${paintings.name}</td><td>${paintings.year}</td><td>${paintings.artist}</td>`;
          painting.appendChild(tr);//adding to the page
    });
  })
  .catch(err => {
    console.error(err.message);//writes an error message to the console
  })