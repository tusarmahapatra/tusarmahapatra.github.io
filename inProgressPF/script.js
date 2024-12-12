// Adding interactivity and animations to enhance user experience

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Add hover effects with animations
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "transform 0.3s ease-in-out";
        });

        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });
    });

    // Dynamic background zoom and scroll effects
    const header = document.querySelector(".hero");
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        header.style.backgroundPosition = `center ${scrollY * 0.5}px`;
        header.style.transform = `scale(${1 + scrollY / 3000})`;
    });

    // Interactive skill bubbles animation
    const skillItems = document.querySelectorAll(".skill");
    skillItems.forEach(skill => {
        skill.addEventListener("mouseover", () => {
            skill.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
            skill.style.transition = "box-shadow 0.3s ease-in-out";
        });

        skill.addEventListener("mouseout", () => {
            skill.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
        });
    });

    // Back-to-top button functionality
    const backToTop = document.createElement("button");
    backToTop.textContent = "⬆️";
    backToTop.className = "back-to-top";
    document.body.appendChild(backToTop);

    backToTop.style.position = "fixed";
    backToTop.style.bottom = "2rem";
    backToTop.style.right = "2rem";
    backToTop.style.padding = "0.5rem 1rem";
    backToTop.style.backgroundColor = "#0071e3";
    backToTop.style.color = "white";
    backToTop.style.border = "none";
    backToTop.style.borderRadius = "5px";
    backToTop.style.cursor = "pointer";
    backToTop.style.display = "none";

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Dark mode toggle
    const darkModeToggle = document.createElement("button");
    darkModeToggle.textContent = "🌙";
    darkModeToggle.className = "dark-mode-toggle";
    document.body.appendChild(darkModeToggle);

    darkModeToggle.style.position = "fixed";
    darkModeToggle.style.top = "1rem";
    darkModeToggle.style.right = "2rem";
    darkModeToggle.style.padding = "0.5rem 1rem";
    darkModeToggle.style.backgroundColor = "#333";
    darkModeToggle.style.color = "white";
    darkModeToggle.style.border = "none";
    darkModeToggle.style.borderRadius = "5px";
    darkModeToggle.style.cursor = "pointer";
    

    // var el = document.getElementById("pull-chain");

    // el.addEventListener("click", function() {
    //     el.classList.toggle("pulled");
    //     document.body.classList.toggle("dark-mode");
    //     mode_state = mode_state==0?1:0;
    //     if(mode_state === 0)
    //     {
    //         darkModeToggle.textContent = "🌙";
    //     }
    //     else
    //     {
    //         darkModeToggle.textContent = "☀️";
    //     }
    // }, false);


    // darkModeToggle.addEventListener("click", () => {
        
    // });

    // Parallax effect for images
    const parallaxImages = document.querySelectorAll(".parallax");
    window.addEventListener("scroll", () => {
        parallaxImages.forEach(image => {
            const speed = image.dataset.speed;
            const offset = window.scrollY * speed;
            image.style.transform = `translateY(${offset}px)`;
        });
    });
});


