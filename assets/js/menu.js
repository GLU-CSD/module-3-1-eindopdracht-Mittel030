document.addEventListener('DOMContentLoaded', (event) => {
    // Get the modal
    var modal = document.getElementById("loginModal");

    // Get the button that opens the modal
    var loginBtn = document.querySelector(".log-in");

    // Get the <span> element that closes the modal
    var closeModal = document.getElementsByClassName("close")[0];

    // Ensure the modal is hidden initially
    modal.style.display = "none";

    // When the user clicks the login button, open the modal 
    loginBtn.onclick = function() {
        modal.style.display = "flex";
    }

    // When the user clicks on <span> (x), close the modal
    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Sidebar functionality
    var sidebar = document.getElementById("sidebar");
    var menuBtn = document.querySelector(".menu");

    menuBtn.onclick = function() {
        sidebar.style.width = "250px";
    }

    document.querySelector(".closebtn").onclick = function() {
        sidebar.style.width = "0";
    }
});