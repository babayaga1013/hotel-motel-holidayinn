$(document).ready(function() {
    // When form is submitted
    $("#bankForm").submit(function(event) {
      event.preventDefault();
  
      var cardNumber = $("#cardNumber").val();
      var cvv = $("#cvv").val();
      var expireDate = $("#expireDate").val();
      var password = $("#password").val();
      var verifypassword = $("#verifypassword").val();
  
      // Only allow user through if username and pwd is csis
      if (cardNumber.length == 16 && cvv.length == 3 && password === verifypassword) {
        window.location.href = "bank.html";
      } else {
        alert("Something is wrong, check to see if you entered the correct information");
      }
    });
  });