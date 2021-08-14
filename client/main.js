let btn = document.getElementById('btn')
let sidebar = document.getElementById('sidebar-container')

function sidebarVisable() {
    sidebar.classList.toggle('active')

}

btn.addEventListener('click', sidebarVisable)