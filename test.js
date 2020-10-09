    function it(desc, fn) { // describe function
      try {
        fn();
        console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc); // test result message: success
      } catch (error) {
        console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc); // test result message: failure
        console.error(error);
      }
    }


  function assert(isTrue) { // assert function 
    if (!isTrue) {
      throw new Error();
    }
  }



it('should return message "Welcome Test User" on correct credentials ', function () {
  let emailInputData = document.getElementById("email_input").value
  let passwordInputData = document.getElementById("password_input").value
  const body = { "email": "test@test.com", "password": "password" }

  function axiosTest() {
    return axios.post(url, body).then(response => assert(response.data.greeting === "Welcome Test User"))
  }

});

it('should return the error "Error Not Authorized" on incorrect password', function () {
  let emailInputData = document.getElementById("email_input").value
  let passwordInputData = document.getElementById("password_input").value
  const body = { "email": "test@test.com", "password": "asd" }

  function axiosTest() {
    return axios.post(url, body).then(response => assert(response.data.error === "Error Not Authorized"))
  }

});

it('should return the error "Email not found" on incorrect email', function () {
  let emailInputData = document.getElementById("email_input").value
  let passwordInputData = document.getElementById("password_input").value
  const body = { "email": "test@test.com", "password": "asd" }

  function axiosTest() {
    return axios.post(url, body).then(response => assert(response.data.error === "Email not found"))
  }

});