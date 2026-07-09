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
            id:1,
            title: "Bot Discord Reminder",
            short_desc: "A Python-based Discord bot designed to automate schedule reminders and improve productivity.",
            desc: "Developed to address the challenge of forgetting university classes and Zoom meetings, this bot leverages Discord’s always-on presence to deliver timely reminders. Built with Python, it ensures users stay organized through customizable alerts and interactive features.",
            source_code: "https://github.com/Marszell/bot_discord_reminder",
            image: "./public/project1.png",
            tech:[
                "Python"
            ],
            key_features:[
                "Create and manage personalized reminders.",
                "User tagging for guaranteed notifications.",
                "View and track all active reminders.",
                "Interactive chat functionality (private or group).",
                "Simple, user-friendly commands for seamless interaction.",
            ],
        },
        {
            id:2,
            title: "E-Commerce",
            short_desc: "A full-stack e-commerce platform inspired by Codashop, built with Next.js and PostgreSQL.",
            desc: "This university project involved creating a feature-rich e-commerce site for game top-ups, complete with an admin dashboard. The platform supports secure transactions, inventory management, and user-friendly navigation, developed using Next.js, PostgreSQL, Prisma, and bcrypt for authentication.",
            source_code: "https://github.com/Marszell/nextadmin",
            image: "./public/dashboard user_2.jpg",
            tech:[
                "Nextjs",
                "Postgresql",
                "Prisma",
                "CSS",
            ],
            key_features:[
                "Secure item purchases and game top-ups.",
                "Advanced search functionality for games and items.",
                "Bcrypt-secured admin access and user data protection.",
                "Admin portal with CRUD operations for games, items, and transactions.",
                "Comprehensive transaction monitoring and reporting.",
            ],
        },
        {
            id:3,
            title: "Admin Dashboard",
            short_desc: "A dynamic admin dashboard built with Next.js, focusing on UI/UX best practices and data visualization.",
            desc: "Developed as part of a Next.js course, this project highlights my ability to create interactive, full-stack dashboards. It includes real-time data tracking, order management, and customer insights, with a polished UI featuring Skeleton loading states.",
            source_code: "https://github.com/Marszell/course-nextjs",
            image: "./public/project3.JPG",
            tech:[
                "Nextjs",
                "Postgresql",
                "CSS",
            ],
            key_features:[
                "Monitor real-time user transactions and orders.",
                "Visualize company growth with interactive charts.",
                "Track customer demographics and engagement metrics.",
                "Responsive design with optimized performance.",
            ],
        },
        {
            id:4,
            title: "Todo List",
            short_desc: "A CRUD-based task management app built with Next.js and PostgreSQL.",
            desc: "Designed to replace ad-hoc note-taking on messaging apps, this tool helps users organize tasks efficiently. It includes secure authentication, editable tasks, and status tracking, showcasing my full-stack development skills.",
            source_code:"https://github.com/Marszell/todo-list",
            image:"./public/todo.JPG",
            tech:[
                "Nextjs",
                "Postgresql",
                "Prisma",
                "CSS",
            ],
            key_features:[
                "Create, edit, and delete tasks with ease.",
                "Mark tasks as complete/incomplete dynamically.",
                "Bcrypt-secured user accounts.",
                "Clean, intuitive interface for seamless usability.",
            ],
        },
        {
            id:6,
            title: "PixelHub",
            short_desc: "A blockchain-based digital art commission platform connecting clients and artists through on-chain escrow payments.",
            desc: "A thesis project that bridges clients and digital artists with a trustless commission workflow. Payments are locked in a Solidity escrow smart contract until work is submitted and approved, delivered artwork is stored permanently on IPFS via Pinata, and users authenticate with their Ethereum wallet instead of a username/password. The platform also includes a gallery feed, likes, and per-order chat between client and artist.",
            source_code: "https://github.com/Marszell/pixelhub-b26",
            image: "./public/project6.jpg",
            tech:[
                "Nextjs",
                "Postgresql",
                "Prisma",
                "Solidity",
                "Ethers.js",
                "NextAuth",
            ],
            key_features:[
                "Wallet-based authentication via Sign-In with Ethereum (SIWE), no username/password.",
                "On-chain escrow smart contracts (EscrowFactory & RemotePayment) automating deposit, work submission, approval, and refund flows.",
                "Automatic deadlines with fallback refund/auto-release if either party goes unresponsive.",
                "Dispute resolution flow handled by a neutral arbiter.",
                "Artwork storage on IPFS via Pinata, ensuring delivered files can't be deleted or altered.",
                "Artist gallery/feed with likes and real-time chat per order.",
            ],
        },
        {
            id:7,
            title: "Daily Management",
            short_desc: "A daily expense tracker and shopping list manager built with a Spring Boot REST API and Next.js frontend.",
            desc: "A full-stack daily utility app for keeping personal spending and shopping needs organized. The Java/Spring Boot backend exposes a REST API backed by PostgreSQL to record money entries and shopping items, while the Next.js frontend presents a spending summary panel alongside a shopping list where each item carries an urgency level and status.",
            source_code: "https://github.com/Marszell/Daily-Management",
            image: "./public/project7.jpg",
            tech:[
                "Java",
                "Nextjs",
                "Postgresql",
            ],
            key_features:[
                "Log daily expenses with price, note, and date.",
                "Spending summary panel to review recorded expenses at a glance.",
                "Shopping list with urgency levels and pending/done status tracking.",
                "REST API backend built with Spring Boot and Spring Data JPA.",
                "PostgreSQL persistence for both expense and shopping data.",
            ],
        },
        {
            id:5,
            title: "PortoV1",
            short_desc: "A responsive portfolio website with parallax effects, created as part of a Dibimbing course assignment.",
            desc: "This project demonstrates foundational frontend skills, combining HTML, CSS, and JavaScript to build a visually engaging portfolio. The parallax scrolling and mobile-friendly design highlight my attention to detail and creativity.",
            source_code:"https://github.com/Marszell/Marszell.github.io",
            image:"./public/PortoV1.JPG",
            tech:[
                "HTML",
                "CSS",
                "Javascript",
            ],
            key_features:[
                "Parallax effects for enhanced visual appeal.",
                "Fully responsive layout for all devices.",
                "Clean, modern design to showcase projects effectively.",
            ],
        },
    ],
    certificates: [
        {
            image:"./public/Sertifikat Dicoding.JPG",
        },
        {
            image:"./public/Sertifikat Dibimbing.JPG",
        },
        {
            image:"./public/Sertifikat Dicoding Java.JPG",
        },
        {
            image:"./public/Achievements Binus Online Learning.jpg",
        }
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
            title:"Java",
            image:"./public/icon/java.png",
        },
        {
            title:"Golang",
            image:"./public/icon/golang.png",
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
                    <button class="learn-more" data-id="${project.id}">
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
            <div class="certificate-image-container">
                <img src="${item.image}" alt="Certificate" class="certificate-image">
                <div class="overlay-text">View Certificate</div>
            </div>
        </div>
    `;
}

// Project preview limit before "See More" is needed
const PROJECT_PREVIEW_COUNT = 6;
let isProjectExpanded = false;

// Function to generate the See More / See Less toggle button
function createToggleButtonHTML(expanded) {
    return `
        <div class="toggle-projects-wrapper">
            <button class="button-cv toggle-projects-btn">
                <span class="front text">${expanded ? 'See Less' : 'See More'}</span>
            </button>
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

        document.querySelectorAll('.certificate-image').forEach(image => {
            image.addEventListener('click', () => {
                const modal = document.getElementById('modal-wrapper');
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
        const visibleProjects = isProjectExpanded ? data : data.slice(0, PROJECT_PREVIEW_COUNT);
        visibleProjects.forEach(item => {
            const itemHTML = createProjectHTML(item);
            container.insertAdjacentHTML('beforeend', itemHTML);
        });

        if (data.length > PROJECT_PREVIEW_COUNT) {
            container.insertAdjacentHTML('beforeend', createToggleButtonHTML(isProjectExpanded));
        }
    }
}

// Delegated click handling so it keeps working after the container is re-rendered
document.getElementById('showproject-container').addEventListener('click', (event) => {
    const learnMoreBtn = event.target.closest('.learn-more');
    if (learnMoreBtn) {
        const projectId = learnMoreBtn.getAttribute('data-id');
        window.location.href = `project-details.html?id=${projectId}`;
        return;
    }

    const toggleBtn = event.target.closest('.toggle-projects-btn');
    if (toggleBtn) {
        isProjectExpanded = !isProjectExpanded;
        displayContent('project');
    }
});

// Add event listeners to tabs
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const tab = button.getAttribute('data-tab');
        if (tab === 'project') {
            isProjectExpanded = false;
        }
        displayContent(tab);
    });
});

// Close the modal when the close button is clicked
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal-wrapper').style.display = 'none';
});

window.onclick = function(event) {
    const modalWrapper = document.getElementById('modal-wrapper');
    if (event.target == modalWrapper) {
        modalWrapper.style.display = "none";
    }
};

// Load default content (Projects) on page load
document.addEventListener('DOMContentLoaded', () => {
    displayContent('project');
});