async function loginFormHandler(event) {
    event.preventDefault();
  
    const emailEl = document.querySelector('#email-login').value.trim();
    const passwordEl = document.querySelector('#password-login').value.trim();
  
    if (emailEl && passwordEl) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email: emailEl,
          password: passwordEl
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
}

if (document.querySelector('.login-form') !== null){
    document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
}