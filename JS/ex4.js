//Get the first element in the document with class="form":
const lookupElement = document.querySelector("form");
//attaching event handler
lookupElement.addEventListener("submit", e => {
  e.preventDefault();
var form = new FormData(document.querySelector("form"));

//Creating DOM element for user properties
const dataentered = document.createElement("tr")
dataentered.innerHTML="Form Data Entered";
const header = document.createElement("tr")
header.innerHTML=`<td>Key</td><td>Value</td>`;
header.style.backgroundColor = "lightgrey";
const name_element = document.createElement("tr")
name_element.innerHTML=`<td>Name</td><td>${form.get("name")}</td>`;
const email_element = document.createElement("tr")
email_element.innerHTML=`<td>Email</td><td>${form.get("email")}</td>`;
const payment_element = document.createElement("tr")
payment_element.innerHTML=`<td>Payment</td><td>${form.get("Paymentmode")}</td>`;
const notification_element = document.createElement("tr")
notification_element.innerHTML=`<td>Promotion</td><td>${form.get("notification")}</td>`;
const location_element = document.createElement("tr")
location_element.innerHTML=`<td>Location</td><td>${form.get("location")}</td>`;

//Adding info to the page
document.getElementById("Data").appendChild(dataentered);
const info_element = document.getElementById("Data");//Get the element with id="Data"
info_element.innerHTML = " "; // clearing previous user info data
info_element.appendChild(header);
info_element.appendChild(name_element);
info_element.appendChild(email_element);
info_element.appendChild(payment_element);
info_element.appendChild(notification_element);
info_element.appendChild(location_element);
});
