const sendButton = document.getElementById('send'); 
const resetButton = document.getElementById('reset');
const form = document.getElementById('form');
const nameInput = document.getElementById('name'); 
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');


function resetForm() {
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
    localStorage.removeItem('name');  
    localStorage.removeItem('email');
    localStorage.removeItem('message');
}

form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('Veuillez remplir tous les champs.'); 
        return; 
    }

    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('email', emailInput.value);
    localStorage.setItem('message', messageInput.value);

    alert('Message envoyé'); 
     resetForm(); 
});


resetButton.addEventListener('click', resetForm); 

window.addEventListener('DOMContentLoaded', () => {
    nameInput.value = localStorage.getItem('name') || ''; 
    emailInput.value = localStorage.getItem('email') || '';
    messageInput.value = localStorage.getItem('message') || '';
});