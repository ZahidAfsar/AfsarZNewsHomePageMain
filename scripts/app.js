// Geting my ids
let mobileNavWhiteBG = document.getElementById("mobileNavWhiteBG");

let closeButton = document.getElementById("closeButton");

let NavHamburger = document.getElementById("NavHamburger");

let MobileSideBar = document.getElementById("MobileSideBar");

// Open Nav Bar
NavHamburger.addEventListener('click', (e) => {
    MobileSideBar.classList = "w-[220px] fixed top-0 right-0 z-40 h-screen";

    mobileNavWhiteBG.classList = "fixed inset-0 bg-gray-700/60 dark:bg-gray-700/60 z-30";
});

// Close Btn
closeButton.addEventListener('click', (e) => {
    MobileSideBar.classList = "hidden";

    mobileNavWhiteBG.classList = "hidden";
});

