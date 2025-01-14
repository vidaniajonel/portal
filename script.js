
document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function() {
        // Remove active class from all options
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('active'));
        // Add active class to clicked option
        this.classList.add('active');

        // Hide all forms
        document.querySelectorAll('.login-form').forEach(form => form.classList.remove('active'));
        // Show the target form
        const targetForm = this.getAttribute('data-target');
        document.querySelector(`.${targetForm}-form`).classList.add('active');
    });
});

// Get modal elements
const forgotPasswordModal = document.getElementById("forgotPasswordModal");
const signupModal = document.getElementById("signupModal");
const alumniApplicationModal = document.getElementById("alumniApplicationModal");

// Get open modal links
const forgotPasswordLink = document.getElementById("forgot-password-link");
const signupLink = document.getElementById("signup-link");
const alumniApplicationLink = document.getElementById("alumni-application-link");

// Get close buttons
const closeBtns = document.getElementsByClassName("close");

// Open the Forgot Password modal
forgotPasswordLink.onclick = function() {
    forgotPasswordModal.style.display = "block";
}

// Open the Sign Up modal
signupLink.onclick = function() {
    signupModal.style.display = "block";
}

// Open the Alumni Application modal
alumniApplicationLink.onclick = function() {
    alumniApplicationModal.style.display = "block";
}

// Close the modals when the close button is clicked
for (let i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function() {
        forgotPasswordModal.style.display = "none";
        signupModal.style.display = "none";
        alumniApplicationModal.style.display = "none";
    }
}

// Close the modals when clicking outside of them
window.onclick = function(event) {
    if (event.target === forgotPasswordModal) {
        forgotPasswordModal.style.display = "none";
    } else if (event.target === signupModal) {
        signupModal.style.display = "none";
    } else if (event.target === alumniApplicationModal) {
        alumniApplicationModal.style.display = "none";
    }
}

