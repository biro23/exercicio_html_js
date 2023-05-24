document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    
    var fieldA = parseFloat(document.getElementById("fieldA").value);
    var fieldB = parseFloat(document.getElementById("fieldB").value);
  
    if (fieldB > fieldA) {
      document.getElementById("message").innerHTML = "Form is valid!";
      
    } else {
      document.getElementById("message").innerHTML = "Form is invalid!";
      
    }
  });