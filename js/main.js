const tabs = document.getElementsByClassName("tab-container");

function changeTab(index) {
    for (let i = 0; i < tabs.length; i++) {
        if (i == index) {
            document.getElementById(i).classList.add("active");
            tabs[i].style.display = "block";
        } else {
            document.getElementById(i).classList.remove("active");
            tabs[i].style.display = "none";
        }
    }
}