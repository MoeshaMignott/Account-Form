document.getElementById('createForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password === confirmPassword) {
        alert('Account Created!');
       this.reset(); 
    } else {
        alert('❌ Password does not match, try again.');
    }
});