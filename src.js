const button = document.getElementById('signin_btn');
const url = "https://secure-peak-05845.herokuapp.com/api/v1/sessions"
const data = {"email": "test@test.com", "password": "password"}

button.addEventListener('click', async (event) => {
    event.preventDefault();
  try {     
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS, GET, POST, PUT, PATCH, DELETE",
        "Content-Type": "Authorization"
        },
      body: data
    });
    console.log('Completed!', response);
  } catch(err) {
    console.error(`Error: ${err}`);
  }
});