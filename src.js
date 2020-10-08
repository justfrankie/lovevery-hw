const button = document.getElementById('signin_btn');
const url = "https://secure-peak-05845.herokuapp.com/api/v1/sessions"

let emailInputData = document.getElementById("email_input")
let passwordInputData = document.getElementById("password_input")

let requestBody = {"email": emailInputData, "password": passwordInputData}
const options = {
  method: 'POST',
  mode: 'cors',
  headers: {
    "Access-Control-Allow-Origin": "*"
    },
  body: JSON.stringify(requestBody)
}


button.addEventListener('click', (event) => {
  event.preventDefault();
  axios.post("https://cors-anywhere.herokuapp.com/https://secure-peak-05845.herokuapp.com/api/v1/sessions", {"email": "test@test.com", "password": "password"})
  .then(data => console.log(data))
  .catch(err => console.error(err))
});
