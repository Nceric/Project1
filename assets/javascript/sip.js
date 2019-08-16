document.getElementById("sipStart").addEventListener("click", function () {
    console.log("click")
    setTimeout(() => {
        console.log("here")
        window.location.href = 'http://www.google.com'
    }, 3000)
});