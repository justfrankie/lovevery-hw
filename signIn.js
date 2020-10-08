const signInButton = document.getElementById('signin_btn');
const url = "https://cors-anywhere.herokuapp.com/https://secure-peak-05845.herokuapp.com/api/v1/sessions"


signInButton.addEventListener('click', (event) => {
  event.preventDefault();
  let emailInputData = document.getElementById("email_input").value
  let passwordInputData = document.getElementById("password_input").value

  let requestBody = { "email": emailInputData, "password": passwordInputData }
  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(requestBody)
  }

  axios.post(url, requestBody)
  .then(response => { 
    if (response.status !== 200) {
      console.error("Response error with status code " + response.status + " Status text: " + response.statusText)
    }
    console.log(response.data)
  })
  .catch(err => { 
    console.log(err.response.data)
   })
});

