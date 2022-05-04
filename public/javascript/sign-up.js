async function signupFormHandler(event) {
    event.preventDefault();
    
  
    const usernameEl = document.querySelector('#username-signup').value.trim();
    const emailEl = document.querySelector('#email-signup').value.trim();
    const passwordEl = document.querySelector('#password-signup').value.trim();
  
    if (usernameEl && emailEl && passwordEl) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username: usernameEl,
          email: emailEl,
          password: passwordEl
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(response);
      // check the response status
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
}

if(document.querySelector('.signup-form') !== null) {
    document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
  }