// Array of changing text
const texts = ["Welcome to My Website", "Play the Whack a Mole Game from Projects", "Check my projects", "Play the Simon game to test your memory"];

// Function to animate text change
function animateText() {
    const changingText = document.getElementById("changingText");
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function animate() {
        const currentText = texts[index];
        const currentChar = currentText[charIndex];

        if (isDeleting) {
            changingText.textContent = currentText.slice(0, charIndex);
            charIndex--;
        } else {
            changingText.textContent = currentText.slice(0, charIndex + 1);
            charIndex++;
        }

        if (charIndex > currentText.length) {
            isDeleting = true;
        }

        if (charIndex === 0 && isDeleting) {
            isDeleting = false;
            index = (index + 1) % texts.length;
        }

        setTimeout(animate, isDeleting ? 75 : 75); // Speed of character animation and delay between texts
    }

    animate();
}

// Start the text animation when the page loads
window.onload = animateText;

function themeChanger() {
    const html = document.querySelector('html')
    const theme = html.getAttribute('data-bs-theme');
    if (theme == 'dark') {
        const navbar = document.getElementById("navbar");
        const flexContainer = document.getElementById("flexContainer");
        const htmlElement = document.documentElement;
        const social = document.getElementById("social");
        html.setAttribute('data-bs-theme', 'light')
        navbar.classList.remove("aesthetic");
        flexContainer.classList.remove("aesthetic");
        htmlElement.classList.remove("aesthetic");
        social.classList.remove("aesocial");

    }
    else {
        html.setAttribute('data-bs-theme', 'dark')
    }
}

function insta() {
    window.open("https://www.instagram.com/tanishm._29/", "_blank");
}
function linkedin() {
    window.open("https://www.linkedin.com/in/tanish34/", "_blank");
}
function git() {
    window.open("https://github.com/tanish35", "_blank");
}

function toggleAesthetic() {
    // Set data-bs-theme to "dark"
    document.documentElement.setAttribute("data-bs-theme", "dark");

    // Toggle aesthetic class on the specified elements
    const navbar = document.getElementById("navbar");
    const flexContainer = document.getElementById("flexContainer");
    const htmlElement = document.documentElement;
    const social = document.getElementById("social");

    navbar.classList.toggle("aesthetic");
    social.classList.toggle("aesocial");
    flexContainer.classList.toggle("aesthetic");
    htmlElement.classList.toggle("aesthetic");

}