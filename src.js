const button = document.getElementById('signin_btn');

button.addEventListener('click', async _ => {
    // e.preventDefault();
  try {     
    const response = await fetch('https://secure-peak-05845.herokuapp.com/api/v1/sessions', {
      method: 'post',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/plain"
        },
      body: {
        "email": "test@test.com",
        "password": "password"
      }
    });
    console.log('Completed!', response);
  } catch(err) {
    console.error(`Error: ${err}`);
  }
});

// button.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log("testing")
//   });