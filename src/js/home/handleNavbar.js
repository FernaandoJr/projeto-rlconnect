function handleNavbar() {
    const navbarList = document.getElementById("navbar-list");

    if (navbarList.style.display === "none" || navbarList.style.display === "") {
        navbarList.style.display = "flex";
    } else {
        navbarList.style.display = "none";
    }
}
