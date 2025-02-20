document.addEventListener('DOMContentLoaded', () => {
    var modal = document.getElementById("loginModal");
    var loginBtn = document.querySelector(".log-in");
    var closeModal = document.querySelector(".close");

    loginBtn.onclick = function() {
        modal.style.display = "flex";
    }

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Sidebar
    var sidebar = document.getElementById("sidebar");
    var menuBtn = document.querySelector(".menu");

    menuBtn.onclick = function() {
        sidebar.style.width = "250px";
    }

    document.querySelector(".closebtn").onclick = function() {
        sidebar.style.width = "0";
    }
});