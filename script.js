document.addEventListener('DOMContentLoaded', function(){
    switchVisibility();
});
// For scrolling of chips

const tabsBox = document.querySelector(".tabs-box"),
    allTabs = document.querySelectorAll(".tab"),
    arrowIcons = document.querySelectorAll(".icon i");
let isDragging = false;

const handleIcons = () => {
    let scrollVal = Math.round(tabsBox.scrollLeft);
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
    arrowIcons[1].parentElement.style.display = maxScrollableWidth > scrollVal ? "flex" : "none";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        tabsBox.scrollLeft += icon.id === "left" ? -350 : 350;
        setTimeout(() => handleIcons(), 50);
    });
});

allTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
    });
});

const dragging = (e) => {
    if (!isDragging) return;
    tabsBox.classList.add("dragging");
    tabsBox.scrollLeft -= e.movementX;
    handleIcons();
}

const dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove("dragging");
}

// ---------------------------------------------------------------------------------------------------

// This script is for toggling between two sidebars

const sideBar1 = document.getElementById('s-bar1');
const sideBar2 = document.getElementById('s-bar2');
const mainContent = document.getElementById('mainContent');

function setMainWidth() {
    let totalSidebarWidth = 0;
    let visibleSidebar = 0;

    // picking the visible sidebar
    if (sideBar1.style.display === 'block') {
        visibleSidebar = sideBar1;
    } else {
        visibleSidebar = sideBar2;
    }
    // picking width of visible sidebar and setting it as margin-left
    totalSidebarWidth += visibleSidebar.offsetWidth;
    // console.log(visibleSidebar.offsetWidth);
    mainContent.style.marginLeft = totalSidebarWidth + 'px';
}

// to toggle sidebar visiblity
function switchVisibility() {
    if (sideBar1.style.display === 'block') {
        sideBar1.style.display = 'none';
        sideBar2.style.display = 'block';
    } else {
        sideBar1.style.display = 'block';
        sideBar2.style.display = 'none';
    }
    setMainWidth();
}

// --------------------------------------------------------------------
