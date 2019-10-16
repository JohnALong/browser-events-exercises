let messageInput = document.getElementById("message");
let article1Data = document.getElementById("article1");
let article2Data = document.getElementById("article2");

messageInput.addEventListener("keyup", function (event) {
    article1Data.innerHTML = event.target.value;
    article2Data.innerHTML = event.target.value;
})




