    const signupE1 = document.querySelector('.Signup_heading');
    const heading = document.querySelector('.heading');
      
      
      // Predetermined username and password objects
    
    
   

    // Function to handle form submission
// Fetch the users data from a JSON file
fetch('users.json')
  .then(response => response.json())
  .then(data => {
    var users = data; // Assign the retrieved data to the `users` variable

    // Add event listener to the form's submit button
    var submitButton = document.querySelector(".submit-button");
    submitButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent form submission

      // Get the entered username and password
      var enteredUsername = document.getElementById("email").value;
      var enteredPassword = document.getElementById("password").value;

      // Check if the entered username and password match any of the predetermined ones
      var isValidUser = users.some(function(user) {
        return user.username === enteredUsername && user.password === enteredPassword;
      });

      if (isValidUser) {
        // Redirect the user to the desired page after successful login
        // Replace "redirect.html" with the actual page URL
        localStorage.setItem("isLoggedIn", "true");

        window.location.href = "main.html";
      } else {
        heading.innerHTML = "Wrong Username or password!";
      }
    });
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });

      


  