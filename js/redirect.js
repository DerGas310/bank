document.addEventListener('DOMContentLoaded', () => {
    const currentUser = localStorage.getItem("currentUser")
    if(currentUser){
        window.location.href = "admin.html"
    }
    else{
        window.location.href = "register.html"
    }
})
