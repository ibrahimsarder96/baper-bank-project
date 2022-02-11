document.getElementById('login-submit').addEventListener('click', function() { //anonymous function 
  //get user email
  const emailField = document.getElementById('user-email'); //event handler set email id 
  const userEmail = emailField.value; // email id er value 

  //get user password--------
  const passwordField = document.getElementById('user-password'); //event handler set password id 
  const userPassword = passwordField.value; // password id er value 
  
  // check user email && password
  if((userEmail == 'ibrahimsarder.me1@gmail.com') && (userPassword == 'secret')) {
    window.location.href = 'banking.html' //current page er modhe onno page a jaber system
  }
  if((userEmail == 'ibrahimsarder.me1@gmail.com') && (userPassword != 'secret')){
    alert('please, enter a correct password');
  }
})