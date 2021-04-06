//Get the first element in the document with class="form":
const lookupElement = document.querySelector("form");
//attaching event handler
lookupElement.addEventListener("submit", e => {
  e.preventDefault();
const login = lookupElement.elements.login.value;
//fetching data from API
fetch(`https://api.github.com/users/${login}`)
.then(response => response.json()) //API access and return response from JSON content
.then(users => {

//Creating DOM element for user properties
const p_element = document.createElement("p");
const i_element = document.createElement("img");
i_element.src = users.avatar_url;
p_element.appendChild(i_element)

const githubUserElement = document.getElementById("githubUser");// Get the element with id="githubUser"
githubUserElement.innerHTML = " "; // clearing previous user info data
const u_name_element = document.createElement("tr")
u_name_element.innerHTML=`<td>Name</td><td>${users.name}</td>`;

const u_blog_element = document.createElement("tr")
u_blog_element.innerHTML=`<td>Blog</td><td>${users.blog}</td>`;

const u_date_element = document.createElement("tr")
u_date_element.innerHTML=`<td>Created</td><td>${users.created_at}</td>`;

//Adding info to the page
githubUserElement.appendChild(p_element);
githubUserElement.appendChild(u_name_element);
githubUserElement.appendChild(u_blog_element);
githubUserElement.appendChild(u_date_element);
})

.catch(err => {
  console.error(err.message);//writes an error message to the console
})
});