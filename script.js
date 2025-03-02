//Parallax 
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
const contentData = {
    project: [
        
        {
            title: "Bot Discord Reminder",
            short_desc: "This bot is designed to provide schedule reminders. This project uses Python.",
            desc: "This project was created to help remind me about my university classroom or Zoom meetings, as I often worry about forgetting to attend classes. To address this, I developed a bot that sends reminders. Since my Discord is always active, I decided to use it as a platform for these reminders. This project is built using Python.",
            source_code: "https://github.com/Marszell/bot_discord_reminder",
            image: "./public/project1.png"
        },
        {
            title: "E-Commerce",
            short_desc: "This project is like Codashop clone (fullstack), using Nextjs, and Postgresql.",
            desc: "This is my university project to create a full-stack web or app. I decided to build an e-commerce platform similar to Codashop because I frequently used Codashop to top up games. This project also includes an admin dashboard for adding games, managing items, and viewing transactions. I developed this project using Next.js, PostgreSQL, CSS, Prisma, and bcrypt.",
            source_code: "https://github.com/Marszell/nextadmin",
            image: "./public/dashboard user_2.jpg"
        },
        {
            title: "Admin Dashboard",
            short_desc: "This project i create for learning in course nextjs, and learn how to make good ui.",
            desc: "My project is from a Next.js course. I learned how to use Next.js with TypeScript and how to create a more interactive admin dashboard/UI, including features like Skeleton UI. This project is also full-stack, but the API was already provided by the Next.js course.",
            source_code: "https://github.com/Marszell/course-nextjs",
            image: "./public/project3.JPG"
        }
    ],
    certificates: [
        {
            image:"./public/Sertifikat Dicoding.JPG",
        },
        {
            image:"./public/Sertifikat Dibimbing.JPG",
        },
    ],
    Techstack: [
        {
            title:"HTML",
            image:"./public/icon/html.png",
        },
        {
            title:"CSS",
            image:"./public/icon/css.png",
        },
        {
            title:"Javascript",
            image:"./public/icon/javascript.png",
        },
        {
            title:"Python",
            image:"./public/icon/python.png",
        },
        {
            title:"Nextjs",
            image:"./public/icon/nextjs.png",
        },
        {
            title:"Golang",
            image:"./public/icon/golang.png",
        },
        {
            title:"Vercel",
            image:"./public/icon/vercel.jpg",
        },
        {
            title:"Postgresql",
            image:"./public/icon/postgresql.png",
        },
        {
            title:"SQL",
            image:"./public/icon/sql.png",
        },
        {
            title:"Booststrap",
            image:"./public/icon/bootstrap.png",
        },
        {
            title:"Lua",
            image:"./public/icon/lua.png",
        },
    ],
    Tools: [
        {
            title:"WebStorm",
            image:"./public/icon/webstorm.png",
        },
        {
            title:"DataGrip",
            image:"./public/icon/datagrip.jpg",
        },
        {
            title:"Github",
            image:"./public/icon/github.png",
        },
        {
            title:"Postman API",
            image:"./public/icon/postman.png",
        },
        {
            title:"Figma",
            image:"./public/icon/figma.png",
        },
        {
            title:"VSC",
            image:"./public/icon/vsc.png",
        },
    ],
};
// ];

// membuat function untuk menapilkan project
// Function to generate HTML for a single project
function createProjectHTML(project) {
    return `
        <div class="showproject">
            <div class="project-image">
                <img src="${project.image}">
            </div>
            <div class="project-info">
                <div class="project-title">
                    <h4>${project.title}</h4>
                </div>
                <div class="project-desc">
                    <span>${project.short_desc}</span>
                </div>
                <div class="project-button">
                    <button class="learn-more">
                        <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">Details</span>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Function to generate HTML for Tech Stack and Tools
function createTechStackToolsHTML(item) {
    return `
        <div class="showtech-tools">
            <div class="tech-tools-image">
                <img src="${item.image}">
            </div>
            <div class="tech-tools-info">
                <div class="tech-tools-title">
                    <h4>${item.title}</h4>
                </div>
            </div>
        </div>
    `;
}

// Function to generate HTML for Certificates
function createCertificateHTML(item) {
    return `
        <div class="certificate-item">
            <img src="${item.image}" alt="Certificate" class="certificate-image">
        </div>
    `;
}

// Function to display content based on the selected tab
function displayContent(tab) {
    const container = document.getElementById('showproject-container');
    container.innerHTML = ''; // Clear existing content

    const data = contentData[tab];
    if (tab === 'certificates') {
        data.forEach(item => {
            const itemHTML = createCertificateHTML(item);
            container.insertAdjacentHTML('beforeend', itemHTML);
        });

        // Add click event listeners to certificate images
        document.querySelectorAll('.certificate-image').forEach(image => {
            image.addEventListener('click', () => {
                const modal = document.getElementById('certificate-modal');
                const modalImg = document.getElementById('modal-image');
                modal.style.display = 'block';
                modalImg.src = image.src;
            });
        });
    } else if (tab === 'Techstack' || tab === 'Tools') {
        data.forEach(item => {
            const itemHTML = createTechStackToolsHTML(item);
            container.insertAdjacentHTML('beforeend', itemHTML);
        });
    } else {
        data.forEach(item => {
            const itemHTML = createProjectHTML(item);
            container.insertAdjacentHTML('beforeend', itemHTML);
        });
    }
}

// Add event listeners to tabs
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');
        // Display content for the selected tab
        const tab = button.getAttribute('data-tab');
        displayContent(tab);
    });
});

// Close the modal when the close button is clicked
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('certificate-modal').style.display = 'none';
});

// Load default content (Projects) on page load
document.addEventListener('DOMContentLoaded', () => {
    displayContent('project');
});