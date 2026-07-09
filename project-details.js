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

// Fetch project details based on the ID in the URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

// Fetch the project data from the contentData object
const project = contentData.project.find(p => p.id == projectId);

if (project) {
    // Populate the project details
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-description').textContent = project.desc;
    document.getElementById('project-image').src = project.image;
    document.getElementById('project-source-code').href = project.source_code;

    // Populate technologies used
    const techList = document.getElementById('project-tech');
    project.tech.forEach(tech => {
        const li = document.createElement('li');
        li.textContent = tech;
        techList.appendChild(li);
    });

    // Populate key features (if any)
    const featuresList = document.getElementById('project-features');
    // Add key features if available in the project data
    project.key_features.forEach(key_features => {
        const li = document.createElement('li');
        li.textContent = key_features;
        featuresList.appendChild(li);
    });
}