document.getElementById("sipStart").addEventListener("click", sipStart);


function sipStart() {
    document.getElementById("sipLoad").classList.add("spinner-grow", "spinner-grow-sm");
    setTimeout(sipStart, 5000);
    window.location.href = 'http://www.google.com'
};