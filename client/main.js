let menuBtn = document.getElementById('btn')
let sidebar = document.getElementById('sidebar-container')

function sidebarVisable() {
    sidebar.classList.toggle('active')

}

menuBtn.addEventListener('click', sidebarVisable)