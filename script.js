function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
}

document.getElementById('generate').addEventListener('click', function() {
    const length = parseInt(document.getElementById('length').value);
    if (length >= 8 && length <= 16) {
        document.getElementById('password').value = generatePassword(length);
    } else {
        alert('Password length must be between 8 and 16 characters.');
    }
});

document.getElementById('copy').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard');
});

document.getElementById('theme-toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode-body');
    document.querySelector('.container').classList.toggle('dark-mode-container');
});