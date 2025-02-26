let pyro = document.querySelector(".layer1");
let hydro = document.querySelector(".layer2");
let anemo = document.querySelector(".layer3");
let electro = document.querySelector(".layer4");
let dendro = document.querySelector(".layer5");
let cryo = document.querySelector(".layer6");
let geo = document.querySelector(".layer7");

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    
    pyro.style.transform = `translateY(${value * 1.5}px)`;
    hydro.style.transform = `translateY(${value * -1.5}px)`;
    anemo.style.transform = `translateY(${value * 1.5}px)`;
    electro.style.transform = `translateY(${value * -1.5}px)`;
    dendro.style.transform = `translateY(${value * 1.5}px)`;
    cryo.style.transform = `translateY(${value * -1.5}px)`;
    geo.style.transform = `translateY(${value * 1.5}px)`;
});

//Project data
const projects = [
    {
        title: "Bot Discord Reminder",
        short_desc: "This bot is designed to provide schedule reminders. This project uses Python.",
        desc: "This project was created to help remind me about my university classroom or Zoom meetings, as I often worry about forgetting to attend classes. To address this, I developed a bot that sends reminders. Since my Discord is always active, I decided to use it as a platform for these reminders. This project is built using Python.",
        source_code: "https://github.com/Marszell/bot_discord_reminder",
        image: "./project1.png"
    },
    {
        title: "E-Commerce",
        short_desc: "This project is like Codashop clone (fullstack), using Nextjs, and Postgresql.",
        desc: "This is my university project to create a full-stack web or app. I decided to build an e-commerce platform similar to Codashop because I frequently used Codashop to top up games. This project also includes an admin dashboard for adding games, managing items, and viewing transactions. I developed this project using Next.js, PostgreSQL, CSS, Prisma, and bcrypt.",
        source_code: "https://github.com/Marszell/nextadmin",
        image: "./dashboard user_2.jpg"
    }
];

// membuat function untuk menapilkan data
function createProjectHTML(project) {
    return `
        <div class="showproject">
            <!-- image project -->
            <div class="project-image">
                <img src="${project.image}">
            </div>
            <!-- text project -->
            <div class="project-info">
                <!-- Title Project -->
                <div class="project-title">
                    <h4>${project.title}</h4>
                </div>
                <!-- Desc -->
                <div class="project-desc">
                    <span>${project.short_desc}</span>
                </div>
                <!-- Button -->
                <div class="project-button">
                    <button class="learn-more">
                        <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">Details</span>
                    </button>
                </div>
                <div>
            </div>
        </div>
    `;
}

// menampilkan function
function displayProjects() {
    const container = document.getElementById('showproject-container');
    projects.forEach(project => {
        const projectHTML = createProjectHTML(project);
        container.insertAdjacentHTML('beforeend', projectHTML);
    });
}

// Panggil function
displayProjects();