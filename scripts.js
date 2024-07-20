/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const colorPalette = document.getElementById("colorPalette");
const clearButton = document.getElementById("clearButton");
const penSizeInput = document.getElementById("penSize");
const image = document.getElementById("image");

// Menggambar seekor kucing
function drawCat() {
    // Badan kucing
    context.fillStyle = "gray";
    context.fillRect(50, 150, 100, 50);

    // Kepala kucing
    context.fillStyle = "gray";
    context.beginPath();
    context.arc(75, 125, 25, 0, Math.PI * 2);
    context.fill();

    // Mata
    context.fillStyle = "black";
    context.beginPath();
    context.arc(65, 115, 5, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.arc(85, 115, 5, 0, Math.PI * 2);
    context.fill();

    // Hidung
    context.fillStyle = "pink";
    context.beginPath();
    context.arc(75, 125, 3, 0, Math.PI * 2);
    context.fill();

    // Mulut
    context.beginPath();
    context.moveTo(70, 135);
    context.lineTo(80, 135);
    context.stroke();
}

drawCat(); // Menggambar seekor kucing


//const image = new Image();
//image.src = "lion.png"; // Ganti dengan path gambar yang ingin digunakan

image.onload = function() {
    // Menambahkan gambar ke canvas
    context.drawImage(image, 100, 100, 500, 400); // (image, x, y, width, height)
};

//ukuran pena
let penSize = 5;
context.lineWidth = penSize;

penSizeInput.addEventListener("input", function () {
    penSize = penSizeInput.value;
    context.lineWidth = penSize;
});

// Drawing functionality
let isDrawing = false;

canvas.addEventListener("mousedown", () => {
    isDrawing = true;
    context.beginPath();
});

canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    context.closePath();
});

canvas.addEventListener("mousemove", (event) => {
    if (!isDrawing) return;
    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;
    context.lineTo(x, y);
    context.stroke();
});

canvas.addEventListener("mouseout", ()=>{
    isDrawing = false;
    context.closePath();
});

// Clear the canvas
clearButton.addEventListener("click", () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
});



const colorPicker = document.getElementById("colorPicker");
const selectedColor = document.getElementById("selectedColor");

colorPicker.addEventListener("input", function () {
    selectedColor.style.backgroundColor = colorPicker.value;
});


canvas.addEventListener("mousemove", (event) => {
    if (!isDrawing) return;

    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;

    context.lineTo(x, y);
    context.stroke();
    context.beginPath();
    context.arc(x, y, 5, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.moveTo(x, y);
});

// Clear the canvas
clearButton.addEventListener("click", () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
});


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
// Set the initial color
let currentColor = colorPicker.value;
context.strokeStyle = currentColor;

// Listen for color changes
colorPicker.addEventListener("input", function () {
    currentColor = colorPicker.value;
    context.strokeStyle = currentColor;
});

canvas.addEventListener("mousedown", () => {
    isDrawing = true;
    context.beginPath();
});

canvas.addEventListener("mousemove", (event) => {
    if (!isDrawing) return;
    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;
    context.lineTo(x, y);
    context.stroke();
});

canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    context.closePath();
});

canvas.addEventListener("mouseout", () => {
    isDrawing = false;
    context.closePath();
});
