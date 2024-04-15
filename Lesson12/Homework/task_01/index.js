const checkPassword = () => {
    const formLogin = document.forms.formLogin;
    
    formLogin.addEventListener('submit', (e) => {
        if (formLogin.password.value !== formLogin.passwordRepeat.value) {
           
            const messageNotCorrect = document.createElement('div');
            messageNotCorrect.innerText = 'Passwords do not match. Please repeat.';
            document.body.appendChild(messageNotCorrect);

            e.preventDefault();// Verhindert das Standardverhalten des Formulars (das Absenden)
            console.log('Passwords do not match'); // Loggt in der Konsole, dass die Passwörter nicht übereinstimmen

        } else {
            
            const messageCorrect = document.createElement('div');
            messageCorrect.innerText = 'Data sent';
            document.body.appendChild(messageCorrect);

            e.preventDefault();
            console.log('OK'); // Loggt in der Konsole, dass alles in Ordnung ist

        }
    });
}

checkPassword();