function setFooterDate(){
    let yearSpan = document.getElementById('copyrightyear');
    
    if (yearSpan) {
        window.localStorage.date= new Date();
        yearSpan.innerHTML = new Date(window.localStorage.date).getFullYear();
        window.localStorage.removeItem("date");
    }
}