// title, coverImage, liveURL, playURL, repoURL, desc, skills, galleryImage, galleryText, inProgress, client, clientImage, 

const projects = [
    {
        title: "Hogwarts Faculty Portal",
        coverImage: "hogwarts-portal1.jpg",
        liveURL: "https://ecstatic-murdock-57ebaa.netlify.app",
        repoURL: "https://github.com/drewgoodman/HogwartsPortal",
        desc: "React app built in Material UI to manage, filter, and search student profiles and school courses. Connects to a Django backend database.",
        skills: ["React.js","Material UI","Django","AWS","MySQL"],
        galleryImage: ["hogwarts-portal1.jpg"],
        galleryText: [
            "A school management mockup app built using React.js and the Material UI component library, using characters from J.K. Rowling's Wizarding World IP for fun and flavor.",
            "Users can view the student roster and filter data by name, assigned tags, current enrollment status, and Hogwarts house. Uses can pin student profiles to the main dashboard and toggle whether they want dark mode enabled, and these settings will be saved for reference.",
            "Users can view all courses currently assigned to a student, see their test scores and grade average, and also view all students enrolled from the course details page. Users can also add or delete tags from student profiles, which will be offered as autosuggestions when inputing filter parameters on the main roster page.",
            "As a contrast to my previous project PetStash, which used primarily class components and component life cycle methods, this app uses entirely functional components and takes advantage of hooks like useState and useEffect for functionality. Routes are controlled by v6 of React Router and uses an external library to control the document title on changing pages.",
            "The project uses Redux for state management, using Thunk middleware and reducer functions to load student and course information and manage global functions like toggling theme and displaying popup messages.",
            "The app is fully mobile responsive and styled using Material UI's API, theming system, and additional inline styles passed as props. Memoization is used for complex calculations to improve performance.",
            "Data for the project is served from a RESTful API in Django hosted on Heroku. Database is MySQL using Heroku's ClearDB add-on. API routes in Django are configured using the Django Rest Frameework library and uses various serializers to return reponses with varying degrees of student detail.",
            "Media uploads for student profile pics and course images are automatically uploaded to and served from an Amazon Web Services S3 bucket."
        ]

    },
    {
        title: "The Good Blog",
        coverImage: "good-blog-banner.jpg",
        liveURL: "https://drgood-blog.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/Django-FirstBlog",
        desc: "Blog site with CRUD functions, PostgreSQL database, social authentication, and AWS S3 static content hosting.",
        skills: ["Django","AWS","Bootstrap","PostGreSQL"],
        galleryImage: ["good-blog.jpg"],
        galleryText: [
            "The Good Blog is a responsive blog built in Django 3.0. It features social user authentication via the Google API, a WYSIWYG editor for drafting new blog posts, pagination, breadcrumbing, search and filtering systems, automatic calculation of read-times based on a 150 WPM read speed, and and a comment thread system. Page styling uses Bootstrap 3.3 as a base.",
            "Database is SQLlite in development mode, PostGreSQL on the live Heroku site. Static files, media and new image uploades are handled by a CDN through an S3 Bucket at Amazon Web Servies.",
            "Additional front-end navigation features include a preloader graphic, scroll to top jQuery script, dynamically updated tags, categories, and monthly archives managed by pre-save post receiver signals.",
            "The back end includes custom workflow features like a custom settings module that will automatically use different configuration settings for development and production, as well as the debug toolbar library for development testing.",
        ],
        // inProgress: true
    },

    {
        title: "Language Summit 2021",
        coverImage: "language-summit.jpg",
        clientURL: "https://hallo.tv",
        repoURL: "",
        desc: "Marketing website for an online streaming conference hosted by Hallo in 2021.",
        skills: ["WordPress","CSS","AWS"],
        galleryImage: ["language-summit2.jpg"],
        galleryText: [
            "'The Language Summit aims to democratize and improve education by bringing the language learning and edtech industries together.'",
            "The official website for Language Summit 2021 is a product of my internship with Hallo. It is a collaboration project designed to provide information for an event originally planned for late August 2020. The site currently provides information to attendees as well as potential sponsors and speakers.",
            "Before coming on board as an intern with the company, it was determined the site would be built using the startup's existing Wordpress and Elementor licenses, with custom CSS styling added as needed. I've worked closely with the team to assist with the page design, event branding, site thematic elements, and set up the hosting service and IP address at Amazon Web Service's Lightsail.",
            "Additional services for their main website were also provided, including migration to a new host, maintenance, and minor layout tweaks as needed."
        ],
        inProgress: false,
        client: true,
        clientImage: ["hallo-icon.png"],
    },

    {
        title: "Personal Portfolio Mk.I",
        coverImage: "landing.jpg",
        repoURL: "https://github.com/drewgoodman/drewgoodman.github.io",
        desc: "Static portfolio site with jQuery functions and simulated backend for projects and skills.",
        skills: ["jQuery","JavaScript","CSS3","HTML5"],
        galleryText: [
            "The very site that you're on right now!",
            "This is the first take I built on my own portfolio website, entirely from scratch. Features custom CSS animations for the landing screen, a sticky sidebar menu layout, and a lightbox to expound on my experiences with various projects. The site is designed as a static page instead of a React project to take avantage of Github's Pages hosting system.",
            "Personal skills and portfolio pieces are generated using jQuery scripts, with the data stored in the script as simulated JSON data from an actual backend API. Different pieces of optional data will populate the available links and information for a given project.",
            "Site is mobile responsive - the sticky sidebar becomes a slideout menu on a phone with an animated button in the corner to activate it. Personal skills and project cards take on different looks better suited to the scrolling nature of mobile viewing.",
            "Despite being 'finished', this site is always a work-in-progress and is frequently updated. Check back in the future for new sections and features!"
        ]
    },

    {
        title: "PetStash Supply Co.",
        coverImage: "petstash-front-banner.jpg",
        liveURL: "https://petstash-supply-co.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/PetStash-StoreFront",
        desc: "Functional eCommerce mockup with account authentication, item searching, cart checkout, and order history.",
        skills: ["React.js","SCSS","MySQL"],
        galleryImage: ["petstash-1.jpg"],
        galleryText: [
            "An eCommerce site mockup for purchasing pet supplies as a final class project. Built in React.js primarily using class components and styled with SASS.",
            "The user can create an account, sign in to that account afterwards, add items to their cart, delete them from the cart, and proceed to checkout. A record of their transaction can be found on their account page afterwards.",
            "Shipping address can added, but no payment info is utilized or current incorporated in the design.",
            "The app is compartmentalized using the React-Router library, though some creative use of the component life cycle was required to avoid a major glitch with shifting between different routes for same component in the actual shop.",
            "Axios is used to make calls to an external API which will return user and product information as needed and post any updates to the account information or shopping history. JSON data is used to construct most of the site's content, including the product category links, the advertising banners on the front page, and the entire selection of items. A search bar allows for basic searches based on the product names, their brands, and descriptions.",
            "I considered using React-Redux to better control user state, but decided against it; most data must be frequently refreshed from the API as the user updates their shopping cart. Otherwise, most data passed as props are booleans controlling modals and basic user session data.",
            "The first release of the front-end app was created over the course of a week, since most of the development time needed to go into researching and building the companion API. Original design was not mobile responsive, though nav menus and media queries were added later on."
        ]
    },

    {
        title: "PetStash Backend API",
        coverImage: "petstash-back.jpg",
        liveURL: "https://petstash-backoffice.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/PetStash-BackOfficeAPI",
        desc: "Restful API with CRUD functionality; handles the shop and user data.",
        skills: ["Python", "MySQL", "Flask", "Boostrap"],
        galleryImage: ["petstash-back2.jpg"],
        galleryText: [
            "The restful API and back office data management app for Pet Stash Supply Co. as a class project. Built with Python 3, Flask, Jinja, MySQL, and Bootstrap.",
            "Additional libraries include WTForms, used for the backend UI to easily add product and category info, Passlib to encrypt user passwords, and Flask-CORS to allow cross-site requests for the storefront.",
            "Building this API from scratch took up the bulk of the time alloted for the project, and presented several challenges I hadn't previously dealt with while learning how to code. I leaned on W3 schools, Stack Overflow, and even Youtube tutorials in order to construct the CRUD functionality and deploy a functioning app to Heroku.",
            "Other challenges included needing ton make a custom JSON encoder to avoid decimal dollar amounts getting converted to strings, authorizing cross-site requests from the deployed React app, and setting default values in a dropdown-box in a dynamic list to avoid user errors. MySQL Workbench and Postman were invaluable for testing the data queries and ensuring that the correct data was retrieved and posted.",
            "The MySQL database is hosted on Heroku via their ClearDB add-on, which allows for a free 5mb database. Because of this, most of the picture data used in the front-end app actually just points to images stored locally since there wasn't room to host them otherwise. "
        ]
    },
    
    {
        title: "React.js Project Portfolio",
        coverImage: "react-portfolio.jpg",
        liveURL: "https://drg-bottega-react-portfolio.herokuapp.com/",
        repoURL: "https://github.com/drewgoodman/My-First-React-Portfolio",
        desc: "Front-end React portfolio and blog with API hooks and in-app content editors.",
        skills: ["React.js", "SCSS",],
        galleryImage: ["react-portfolio-2.jpg"],
        galleryText: [
            "A basic portfolio app built in React.js with display and blog sections -- the user can display their projects as categorized display cards featuring project thumbnails, logo icons, and descriptive text.",
            "The app uses the Axios library to connect to an API managed by my coding school which handles user authentication and data for blog and portfolio entries.",
            "The portfolio owner can login via the admin portal to upload new portfolio project info as well as create blog entries with a WYSIWIG editor. Image uploading is handled with Dropzone.js for a more user friendly interface.",
            "The blog section features an infinite scrolling loading feature for older entries, loading spinner during API calls, and sticky menu icons for admin use. "
        ]
    },

    {
        title: "Triple Triad Browser Game",
        coverImage: "tripletriad-banner.jpg",
        playURL: "https://drg-triple-triad.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/Triple-Triad",
        desc: "Static HTML adaptation of a mini-game from Final Fantasy VIII.",
        skills: ["JavaScript", "HTML5", "CSS3"],
        galleryImage: ["tripletriad-2.jpg"],
        galleryText: [
            "Recreation of a side activity from a 1998 Playstation game, Final Fantasy VIII. It was built over the course of a weekend as a static HTML page.",
            "It allows for a two-player experience where each player can choose a deck of 5 cards out of a small library. They will then be taken to a simple point-and-click interface where they may play matches of Triple Triad up until the point one is declared a winner. Rules are available in the code repository's readme file.",
            "Gameplay consists of a simple point and click interface with a turn count and game state controlled by JavaScript. CSS animations are dynamically added and removed from the game board's cards in order to simulate play effects and flipping.",
            "I started this project following the Bottega Diner interface as a means to get in some practice with more complex scripting. The biggest challenge when creating this app was needing to account for all the potential user inputs at any point in the game state. After the first deployment, the code was refactored slightly to reduce all references to player 1 and player 2 down into two interchangeable object references, significantly reducing the code in the process.",
            "Content scales to viewport width, but is not considered mobile friendly.",
        ]
    },

    {
        title: "jQuery To-Do List",
        coverImage: "todo-list.jpg",
        liveURL: "https://drg-jquery-todo.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/jQuery-ToDoList",
        desc: "Basic to-do list app with complete and delete functions using jQuery on a static page.",
        skills: ["jQuery", "HTML5", "CSS3"],
        galleryImage: ["todo-list2.jpg"],
        galleryText: [
            "What it says on the tin -- it's a static HTML page that lets you track your tasks and check them off as you complete them.",
            "Simply fill out the form to add a task, then use the buttons to either complete it or trash it completely. If you complete a task by accident, you can use the undo button in its new home to send it back to the proper list. Flash notifications feature at the top when you perform certain actions.",
            "This was my first real foray into incorporating jQuery into a more functional project. It allowed me to appreciate how much cleaner the code looked without several document query selectors and how easily animations could be applied without a complex CSS solution."
        ]
    },

    {
        title: "Python Games",
        coverImage: "python-games-banner.png",
        repoURL: "https://github.com/drewgoodman/Python-Games",
        desc: "Hangman, Tic-tac-toe, a Magic 8-Ball, and more built to run in a terminal.",
        skills: ["Python"],
        galleryText: [
            "A collection of games that I scripted using Python 7.3 while I first learning the language. All of them are designed to be run in the terminal, have all been since updated to clear the screen to prevent a scrolling mess where appropriate and use additional scripting to ensure that user input is valid and doesn't break the functionality. Games include:",
            "Guessing Game - a random integer is generated, play by guessing. The game will inform you if you're higher or lower than your guess and uses complex conditionals to determine a final verdict of your abilities once you win.",
            "Hangman - Player 1 inputs a word, and then Player 2 can guess letters or entire words while an ASCII-art hangman slowly fills out.",
            "Tic-Tac-Toe - Customize player 1 and 2, then take turns inputting 1 through 9 to fill out the board. Game state is determined by a creative use of range checking -- this was created before I found better ways to handle x and y functions in my Triple Triad project.",
            "Magic 8-Ball - A simple exercise in randomly returning dictionary values.",
            "Diner.py - A precursor to the Bottega Diner project. While not fully fleshed out, in its current state it uses object classes to provide more complex order customziation to certain menu items."
        ]
    },

    {
        title: "eCommerce UI Mockup",
        coverImage: "eCommerce.jpg",
        liveURL: "https://drgood-ecommerce-react.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/practice-ecommerce-react-app",
        desc: "Front-end React mockup of an eCommerce app for purchasing stickers.",
        skills: ["React.js", "Redux", "SCSS"],
        galleryText: [
            "A basic mockup of an eCommerce site, built as a class project and what I would consider 'warm up' before tackling my first fully functional React app, PetStash. The backend is simulated JSON data but is not connected to an API. State is controlled through Redux, which allows the retention of a shopping cart and user shipping details at checkout.",
            "One of the best takaways from this project was being exposed to a new way of handling CSS Grid by explicitly labeling grid lines with brackets. This proved invaluable in future projects where I quickly needed to adjust the entire structure of a grid container or create media queries and only needed a fraction of the code to accomplish what I needed."
        ]
    },

    {
        title: "Bottega Diner",
        coverImage: "diner.jpg",
        liveURL: "https://drg-bottega-diner.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/Bottega-Diner",
        desc: "Interactive diner menu with commentary.",
        skills: ["JavaScript", "HTML5", "CSS3"],
        galleryText: [
            "A mockup interactive diner menu on a static HTML page. Each time of day corresponds to a different menu, pulled from product data in arrays to simulate backend data. A tag system applied to each product object allows different items to appear in multiple menus and sorted into their correct product category.",
            "The user can point and click to add items to their order, which will result in a randomly generated waitress giving feedback and commentary. You can delete items from the order and press checkout when finished.",
            "My first serious attempt at creating an app that dynamically added and changed HTML elements. The original code featured a lot of innerHTML manipulations to dynamically add nested elements to the menu and order roster. The code was later refactored to instead create elements and append child nodes -- a better practice that became much easier once I started learning jQuery.",
            "The biggest challenge I faced was trying to figure out a way to dynamically track which HTML elements corresponded to specific products or track which part of the order needed to be deleted with each trash button. My beginner solution at the time was to add a very specific event listener at the time of creation that ensured the onClick function would pass the correct index as an argument. Much later on I would learn to better take advantage of element attributes and child node order for future projects.",
            "While the menu and text-size scales to viewport width, this page is not considered mobile friendly."
        ]
    },

    {
        title: "Fantastic Fries",
        coverImage: "coding-fries.jpg",
        liveURL: "https://drgood-fantastic-fries.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/fantastic-fries-html-practice",
        desc: "Front end mockup for a restaurant built in HTML and CSS.",
        skills: ["HTML5","CSS"],
        galleryText: [
            "My first web project!",
            "Nothing too fancy; a static HTML layout site using HTML and CSS styling with an embedded Google Maps locator.",
            "Features custom animations, parallex scrolling images, media queries, and a custom form. Complete with a custom favicon and a splash of PHP so that it would deploy on Heroku."
        ]
    }
]

const inProgressIcon = '<i class="fas fa-tools">';
const inProgressText = 'In Progress'

const liveIcon = '<i class="fas fa-desktop">';
const liveText = "Live";
const galleryLiveText = "Try It Live";

const clientLiveIcon = '<i class="fas fa-briefcase">';
const clientLiveText = "Company Website"
const galleryClientLiveText = "Visit Company Website"

const playIcon = '<i class="fas fa-gamepad">';
const playText = "Play";
const galleryPlayText = "Play It Live"

const repoIcon = '<i class="fas fa-code">';
const repoText = "Code";
const galleryRepoText = "See the Code"

const infoIcon = '<i class="fas fa-question-circle">';
const infoText = "Info";

var lightboxOpen = false;


function closeMobilePortfolio() {
    $('.project-wrapper').removeClass('project-mobile-expand');
    $('.project-actions').addClass('project-mobile-toggle');
    $('.project-desc').addClass('project-mobile-toggle');
}

function loadProjects() {
    var projectIndex = 0;
    projects.forEach(project => {
        buildProject(project, projectIndex);
        projectIndex++;
    })
}

function buildProject(project, projectIndex) {
    var newProject = $("<div></div>",
        {
            "class": "project-wrapper",
            "style": `background-image: url('../static/images/project/${project.coverImage}')`
        });

    var projectActions = $("<div></div", { "class": "project-actions project-bg project-mobile-toggle" });
    var newInfoIcon = $("<a></a>", { "class": "project-action project-active info-btn", "project-index": projectIndex }).append($(infoIcon), infoText)
    if(project.inProgress) {
        var inProgressAlert = $("<div></div>", {
            "class": "project-action project-inprogress"
        }).append(inProgressIcon,inProgressText);
        projectActions.append(
            inProgressAlert,
            buildActionIcon(project.repoURL, repoIcon, repoText),
            );
    } else {
        projectActions.append(
            buildActionIcon(project.liveURL, liveIcon, liveText),
            buildActionIcon(project.clientURL, clientLiveIcon, clientLiveText),
            buildActionIcon(project.playURL, playIcon, playText),
            buildActionIcon(project.repoURL, repoIcon, repoText),
            );
    }
    projectActions.append(newInfoIcon);

    var projectTitle = $("<div></div>", { "class": "project-title" }).append(project.title);

    var projectDesc = $("<div></div>", { "class": "project-desc project-bg project-mobile-toggle" }).append(project.desc);

    var projectSkillsWrapper = $("<div></div>", { "class": "project-skills-wrapper" });
    appendSkills(project.skills, projectSkillsWrapper)

    newProject.append(
        projectActions,
        projectTitle,
        $("<span></span>", { "class": "project-divider" }),
        $("<span></span>", { "class": "project-shader" }),
        projectDesc,
        projectSkillsWrapper
    );
    if(project.clientImage) {
        newProject.append(
            $("<div></div>",
            {
                "class": "project-client-icon",
                "style": `background-image: url('../static/images/project/${project.clientImage}')`
            })
        )
    }
    if(project.client) {
        $("#client-projects-container").append(newProject);
    } else {
        $("#projects-container").append(newProject);
    }
}

function appendSkills(skills, newSkillsWrapper) {
    skills.forEach(skill => {
        newSkillsWrapper.append($("<div></div>", { "class": "project-skill no-select" }).append(skill));
    });
    return true;
}

function buildActionIcon(url, icon, text, forLightbox=false) {
    if (url) {
        var newIcon = $("<a></a>",
            {
                "class": "project-action project-active",
                "target": "_blank",
                "href": url
            }).append($(icon), text);
        return newIcon;
    } else {
        return false;
    }
}

function openLightbox(projectIndex) {
    let project = projects[projectIndex];
    $("#lightbox-title").text(project.title)
    let baseGalleryImg = project.galleryImage ? project.galleryImage[0] : project.coverImage;
    $("#lightbox-gallery").css("background-image", `url('../static/images/project/${baseGalleryImg}')`)
    $("#lightbox-skills-wrapper").empty()
    appendSkills(project.skills, $("#lightbox-skills-wrapper"));
    $("#lightbox-text").empty();
    if (project.inProgress) {
        inProgressAlert = $("<p></p>", {
            "class": "lightbox-inprogress"
        }).append(inProgressIcon, "Under construction. Check back soon for updates.")
        $("#lightbox-text").append(inProgressAlert);
    }
    if (project.galleryText) {
        project.galleryText.forEach(paragraph => {
            $("#lightbox-text").append($("<p></p>").text(paragraph));
        })
    } else if (project.desc) {
        $("#lightbox-text").append($("<p></p>").text(project.desc));
    } else {
        $("#lightbox-text").append($("<p></p>").text("Project description coming soon."));
    }
    $("#lightbox-actions").empty().append(
        buildActionIcon(project.liveURL, liveIcon, galleryLiveText),
        buildActionIcon(project.clientURL, clientLiveIcon, galleryClientLiveText),
        buildActionIcon(project.playURL, playIcon, galleryPlayText),
        buildActionIcon(project.repoURL, repoIcon, galleryRepoText)
        )

    $("#lightbox").fadeIn();
    $('.lightbox-content').animate({scrollTop: 0}, 0);
    $('body').addClass("disable-scrolling");
    $('.unfocus-for-lightbox').addClass("blur-content");
    $('#menu-toggle').addClass("hide-content");
    $('#scroll-to-top').fadeOut();
    setTimeout(function () {
        lightboxOpen = true;
    }, 500);
}

function closeLightbox() {
    $("#lightbox").fadeOut();
    $('body').removeClass("disable-scrolling");
    $('.unfocus-for-lightbox').removeClass("blur-content");
    closeMobilePortfolio();
    setTimeout(function () {
        $('#menu-toggle').removeClass("hide-content");
        if ($(window).scrollTop() > $(window).height()) {
            $('#scroll-to-top').fadeIn();
        }
        lightboxOpen = false;
    }, 300);

}

function setCurrentYear() {
    const date = new Date();
    $('#current-year').text(date.getFullYear());
}


$(document).ready(function () {

    $(document).on('click', '.info-btn', function () {
        let projectIndex = $(this).attr("project-index");
        openLightbox(projectIndex);
    })

    $(document).on('click', '.project-wrapper', function () {
        closeMobilePortfolio();
        $(this).addClass('project-mobile-expand');
        $(this).find('.project-actions').removeClass('project-mobile-toggle');
        $(this).find('.project-desc').removeClass('project-mobile-toggle');
    })

    $(".lightbox-click-close").click(function () {
        if (lightboxOpen) {
            closeLightbox();
        }
    })

    loadProjects();
    setCurrentYear();
})