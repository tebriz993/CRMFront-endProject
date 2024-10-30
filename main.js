const container=document.querySelector('.container');
const registerBtn=document.querySelector('.register-btn');
const loginBtn=document.querySelector('.login-btn');

registerBtn.addEventListener('click', ()=>{
    container.classList.add('active');
});

loginBtn.addEventListener('click', ()=>{
    container.classList.remove('active');
});



document.querySelector('.register form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const username = document.querySelector('.register input[placeholder="Username"]').value;
    const email = document.querySelector('.register input[placeholder="Email"]').value;
    const password = document.querySelector('.register input[placeholder="Password"]').value;

    const user = {
        username: username,
        email: email,
        password: "*****" // Şifrəni göstərməmək üçün ulduzlarla əvəzləyirik
    };

    // Mövcud istifadəçi siyahısını götürüb, yeni istifadəçini əlavə edirik
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    window.location.href = "customerList.html";
});

document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.includes("customerList.html")) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const tableBody = document.getElementById("customerTableBody");

        users.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
            `;
            tableBody.appendChild(row);
        });
    }
});
