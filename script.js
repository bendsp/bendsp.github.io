const contactLink = document.getElementById("contact-link");
const cvLink = document.getElementById("cv-link");
const portfolioLink = document.getElementById("portfolio-link");
const contentWrapper = document.getElementById("content-wrapper");
const content = document.getElementById("content");
const backgroundImage = document.querySelector(".background-image");

function showContent(contentType) {
    contentWrapper.classList.remove("hidden");
    backgroundImage.style.filter = "blur(5px)";
    
    switch (contentType) {
        case "contact":
            content.innerHTML = `
                <h2>Contact Information</h2>
                <p>Email: benjy.desprets@gmail.com</p>
                <p>Phone: +33 (0)6 28 74 90 94</p>
            `;
            break;
        case "cv":
            content.innerHTML = `
                <h2>Curriculum Vitae</h2>
                <!-- Replace with your own CV content -->
                <p>Experience, education, skills, etc.</p>
            `;
            break;
        case "portfolio":
            content.innerHTML = `
                <h2>Portfolio</h2>
                <!-- Replace with your own portfolio content -->
                <p>Projects, accomplishments, and work samples.</p>
            `;
            break;
        default:
            content.innerHTML = "";
    }
}

function hideContent() {
    contentWrapper.classList.add("hidden");
    backgroundImage.style.filter = "blur(0px)";
    content.innerHTML = "";
}

contactLink.addEventListener("click", (e) => {
    e.preventDefault();
    showContent("contact");
});

cvLink.addEventListener("click", (e) => {
    e.preventDefault();
    showContent("cv");
});

portfolioLink.addEventListener("click", (e) => {
    e.preventDefault();
    showContent("portfolio");
});

contentWrapper.addEventListener("click", (e) => {
    if (e.target === contentWrapper) {
        hideContent();
    }
});
