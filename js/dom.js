let title = document.querySelector(".title")
let btn = document.querySelector(".btn")
let btn2 = document.querySelector(".btn2")

console.log(btn)

btn.addEventListener("click", function(e) {
    title.innerText = "Title 1"
    title.style.color = "red"
    title.style.display = "block"
})
btn2.addEventListener("click", function(e) {
    title.innerText = "Hello World"
    title.style.display = "none"
})


console.log("Hello world!");

