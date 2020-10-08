const button = document.getElementById('signin_btn');
const url = "https://cors-anywhere.herokuapp.com/https://secure-peak-05845.herokuapp.com/api/v1/sessions"
const requestBody = {email: "test@test.com", password: "password"}

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
  fetch(url, options)
  .then((response) => response.json())
  .then(data => console.log('Completed!', data))
  .catch(err => console.error(`Error: ${err}`));
});
