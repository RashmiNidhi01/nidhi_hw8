function Submit() {
  
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  
  var paymentType = document.querySelector('input[name="paymentType"]:checked').value; 
  var specialPromo = document.getElementById("specialPromo");
	  if (specialPromo.checked == true)
		  {
			specialPromo = "On";
		  } 
	  else 
		  {
			 specialPromo = "Off";
		  }
	var preferredLocation = document.getElementById("preferredLocation").value;
	
	document.getElementById("resultTable").innerHTML="";
	
	var row =document.getElementById("resultTable").insertRow(0);
			var column1 = row.insertCell(0);
			var column2 = row.insertCell(1);
			
			column1.innerHTML= "Data";
			column2.innerHTML= "Value";
      column1.style.backgroundColor = "lightgrey";
      column2.style.backgroundColor = "lightgrey";

	
	var row =document.getElementById("resultTable").insertRow(1);
			var column1 = row.insertCell(0);
			var column2 = row.insertCell(1);
		
			column1.innerHTML= "Name:";
		
			column2.innerHTML= name;
			
	var row =document.getElementById("resultTable").insertRow(2);	
			var column1 = row.insertCell(0);
			var column2 = row.insertCell(1);
		
			column1.innerHTML= "Email:";
	
			column2.innerHTML= email;
		
	var row =document.getElementById("resultTable").insertRow(3);	
			var column1 = row.insertCell(0);
			var column2 = row.insertCell(1);
		
			column1.innerHTML= "Payment Type:";
		
			column2.innerHTML= paymentType;

	var row =document.getElementById("resultTable").insertRow(4);	
			var column1 = row.insertCell(0);
			var column2 = row.insertCell(1);
		
			column1.innerHTML= "Special Promo:";
		
			column2.innerHTML= specialPromo;
		
	var row =document.getElementById("resultTable").insertRow(5);	
			var column1 = row.insertCell(0);
			var column2 = row.insertCell(1);
		
			column1.innerHTML= "Preferred Location:";
		
			column2.innerHTML= preferredLocation;
}
function Clear() {
  
  document.getElementById("name").value="";
  document.getElementById("email").value="";
  document.getElementById("specialPromo").checked=false;
  document.getElementById("preferredLocation").value="";
  document.querySelector('input[name="paymentType"]:checked').checked=false;	
}