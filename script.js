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
        short_desc: "This bot is designed to provide schedule reminders. The bot will tag accounts in both public and private chats to remind them of predetermined schedules. This project uses Python.",
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
    // Add more projects here if needed
];

// Function to generate HTML for a single project
function createProjectHTML(project) {
    return `
        <div class="showproject">
            <!-- image project -->
            <div>
                <img src="${project.image}" alt="${project.title}">
            </div>
            <!-- text project -->
            <div>
                <!-- Title Project -->
                <div>
                    <h4>${project.title}</h4>
                </div>
                <!-- Desc -->
                <div>
                    <span>${project.short_desc}</span>
                </div>
            </div>
        </div>
    `;
}

// Function to display all projects
function displayProjects() {
    const container = document.getElementById('showproject-container');
    projects.forEach(project => {
        const projectHTML = createProjectHTML(project);
        container.insertAdjacentHTML('beforeend', projectHTML);
    });
}

// Call the function to display projects
displayProjects();