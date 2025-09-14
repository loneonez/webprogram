const btn = document.getElementById("btn");
const title = document.getElementById("title");

btn.addEventListener("click", () => {
    title.style.color = title.style.color === "blue" ? "red" : "blue";
});
