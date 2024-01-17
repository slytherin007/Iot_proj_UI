document.addEventListener('DOMContentLoaded', function () {
    const loginTab = document.querySelector('.tab.active-tab');
    const signupTab = document.querySelector('.tab:not(.active-tab)');

    const loginForm = document.getElementById('loginTab');
    const signupForm = document.getElementById('signupTab');

    function showTab(tabId) {
        if (tabId === 'loginTab') {
            loginTab.classList.add('active-tab');
            signupTab.classList.remove('active-tab');
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
        } else if (tabId === 'signupTab') {
            loginTab.classList.remove('active-tab');
            signupTab.classList.add('active-tab');
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
        }
    }

    loginTab.addEventListener('click', function () {
        showTab('loginTab');
    });

    signupTab.addEventListener('click', function () {
        showTab('signupTab');
    });

    document.getElementById('loginButton').addEventListener('click', function () {
        // Implement login functionality here
        alert('Login button clicked');
    });

    document.getElementById('signupButton').addEventListener('click', function () {
        // Implement signup functionality here
        alert('Sign Up button clicked');
    });

    // Show default tab on page load
    showTab('loginTab');
});