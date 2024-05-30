document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("movingButton");
    const container = document.querySelector(".container");

    button.addEventListener("mouseover", function() {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();

        const newLeft = Math.random() * (containerRect.width - buttonRect.width);
        const newTop = Math.random() * (containerRect.height - buttonRect.height);

        button.style.left = `${newLeft}px`;
        button.style.top = `${newTop}px`;
    });
});
