//Project data
const contentData = {
    project: [
        
        {
            id:1,
            title: "Bot Discord Reminder",
            short_desc: "This bot is designed to provide schedule reminders. This project uses Python.",
            desc: "This project was created to help remind me about my university classroom or Zoom meetings, as I often worry about forgetting to attend classes. To address this, I developed a bot that sends reminders. Since my Discord is always active, I decided to use it as a platform for these reminders. This project is built using Python.",
            source_code: "https://github.com/Marszell/bot_discord_reminder",
            image: "./public/project1.png",
            tech:[
                "Python"
            ],
            key_features:[
                "To create reminders.",
                "The bot can tag users to ensure they are notified.",
                "Users can view their reminder list.",
                "Users can interact with or ask questions to the bot.",
                "Users can chat with the bot privately or in groups.",
            ],
        },
        {
            id:2,
            title: "E-Commerce",
            short_desc: "This project is like Codashop clone (fullstack), using Nextjs, and Postgresql.",
            desc: "This is my university project to create a full-stack web or app. I decided to build an e-commerce platform similar to Codashop because I frequently used Codashop to top up games. This project also includes an admin dashboard for adding games, managing items, and viewing transactions. I developed this project using Next.js, PostgreSQL, CSS, Prisma, and bcrypt.",
            source_code: "https://github.com/Marszell/nextadmin",
            image: "./public/dashboard user_2.jpg",
            tech:[
                "Nextjs",
                "Postgresql",
                "Prisma",
                "CSS",
            ],
            key_features:[
                "Users can make item purchases.",
                "Users can search for desired games using the search bar.",
                "There is an Admin Page secured with bcrypt.",
                "On the Admin page, you can add games, game items, and transaction methods.",
                "Admins can view ongoing transactions.",
                "Admins can delete games, game items, and transaction methods.",
                "Each section (games, game items, transactions, users) includes a search bar.",
            ],
        },
        {
            id:3,
            title: "Admin Dashboard",
            short_desc: "This project i create for learning in course nextjs, and learn how to make good ui.",
            desc: "My project is from a Next.js course. I learned how to use Next.js with TypeScript and how to create a more interactive admin dashboard/UI, including features like Skeleton UI. This project is also full-stack, but the API was already provided by the Next.js course.",
            source_code: "https://github.com/Marszell/course-nextjs",
            image: "./public/project3.JPG",
            tech:[
                "Nextjs",
                "Postgresql",
                "CSS",
            ],
            key_features:[
                "Monitor user transactions.",
                "View company growth through graphical data.",
                "Place orders directly.",
                "Check the total number of customers.",
                "Track the total number of transactions.",
            ],
        },
        {
            id:4,
            title: "Todo List",
            short_desc: "I created this project to learn CRUD and hone my skills in programming, this project using Nextjs, and postgresql",
            desc: "",
            source_code:"https://github.com/Marszell/todo-list",
            image:"./public/todo.JPG",
            tech:[
                "Nextjs",
                "Postgresql",
                "Prisma",
                "CSS",
            ],
            key_features:[
                "Users can create todos freely.",
                "They can edit the title or description of a todo.",
                "They can change the status of a todo to indicate whether the task has been completed or not.",
                "User accounts are secured using bcrypt to ensure the safety of user data.",
            ],
        },
        {
            id:5,
            title: "PortoV1",
            short_desc: "This my first porto, this is an assignment from Dibimbing using HTML, CSS, and a little bit javascript",
            desc: "this a simple porto, i create this for clear assignment from Dibimbing and learn how to implement a Parallax. This course teaches basic HTML, basic CSS, and basic JavaScript. And for the assignment we must create a simple porto for final Assigment ",
            source_code:"https://github.com/Marszell/Marszell.github.io",
            image:"./public/PortoV1.JPG",
            tech:[
                "HTML",
                "CSS",
                "Javascript",
            ],
            key_features:[
                "Create a showcase project.",
                "It includes parallax effects to make it visually appealing.",
                "The design is interactive and optimized for mobile users.",
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
}