const projects = [
    {
        title: "PetStash Supply Co.",
        coverImage: "petstash-front-banner.jpg",
        liveURL: "https://petstash-supply-co.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/PetStash-StoreFront",
        desc: "Functional eCommerce site with account signup, searching, and checkout",
        skills: ["React.js", "SCSS", "Postman"],
        galleryImage: ["petstash-1.png"],
        galleryText: [
            "An eCommerce site mockup for purchasing pet supplies as a final class project. Built in React.js and styled with SCSS.",
            "The user can create an account, sign in to that account afterwards, add items to their cart, delete them from the cart, and proceed to checkout. A record of their transaction can be found on their account page afterwards.",
            "Shipping address can added, but no payment info is utilized or current incorporated in the design.",
            "The app is compartmentalized using the React-Router library, though some creative use of the component life cycle was required to avoid a major glitch with shifting between different routes for same component in the actual shop.",
            "Axios is used to make calls to an external API which will return user and product information as needed and post any updates to the account information or shopping history. JSON data is used to construct most of the site's content, including the product category links, the advertising banners on the front page, and the entire selection of items. A search bar allows for basic searches based on the product names, their brands, and descriptions.",
            "I considered using React-Redux to better control user state, but decided against it; most data must be frequently refreshed from the API as the user updates their shopping cart. Otherwise, most data passed as props are booleans controlling modals and basic user session data.",
            "The first release of this app was created over the course of a week, since most of the development time needed to go into researching and building the companion API. Original design was not mobile responsive, though nav menus and media queries were added later on."
        ]
    },

    {
        title: "PetStash Backend API",
        coverImage: "petstash-back2.png",
        liveURL: "https://petstash-backoffice.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/PetStash-BackOfficeAPI",
        desc: "Restful API with CRUD functionality; handles the shop and user data.",
        skills: ["Python", "MySQL", "Flask", "Boostrap"],
        galleryText: [
            "The restful API and back office data management app for Pet Stash Supply Co. as a class project. Built with Python 3, Flask, Jinja, MySQL, and Bootstrap.",
            "Additional libaries include WTForms, used for the backend UI to easily add product and category info, Passlib to encrypt user passwords, and Flask-CORS to allow cross-site requests for the storefront.",
            "Building this API from scratch took up the bulk of the time alloted for the project, and presented several challenges I hadn't previously dealt with while learning how to code. I leaned on W3 schools, Stack Overflow, and even Youtube tutorials in order to construct the CRUD functionality and deploy a functioning app to Heroku.",
            "Other challenges included needing ton make a custom JSON encoder to avoid decimal dollar amounts getting converted to strings, authorizing cross-site requests from the deployed React app, and setting default values in a dropdown-box in a dynamic list to avoid user errors. MySQL Workbench and Postman were invaluable for testing the data queries and ensuring that the correct data was retrieved and posted.",
            "The MySQL database is hosted on Heroku via their ClearDB add-on, which allows for a free 5mb database. Because of this, most of the picture data used in the front-end app actually just points to images stored locally since there wasn't room to host them otherwise. "
        ]
    },

    {
        title: "Triple Triad Browser Game",
        coverImage: "tripletriad-banner.png",
        liveURL: "https://drg-triple-triad.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/Triple-Triad",
        desc: "Static HTML adaptation of a mini-game from Final Fantasy VIII.",
        skills: ["JavaScript", "HTML5", "CSS3"],
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
        coverImage: "todo-list.png",
        liveURL: "https://drg-jquery-todo.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/jQuery-ToDoList",
        desc: "Basic to-do list app with complete and delete functions.",
        skills: ["jQuery", "HTML5", "CSS3"],
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
        title: "eCommerce Mockup",
        coverImage: "eCommerce.png",
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
        coverImage: "diner.png",
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
    }
]

const liveIcon = '<i class="fas fa-desktop">';
const liveText = "Live";
const galleryLiveText = "Try It Live";
const repoIcon = '<i class="fas fa-code">';
const repoText = "Code";
const galleryRepoText = "See the Code"
const infoIcon = '<i class="fas fa-question-circle">';
const infoText = "More Info";

var lightboxOpen = false;

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

    var projectActions = $("<div></div", { "class": "project-actions project-bg" });
    var newInfoIcon = $("<a></a>", { "class": "project-action info-btn", "project-index": projectIndex }).append($(infoIcon), infoText)
    projectActions.append(buildActionIcon(project.liveURL, liveIcon, liveText), buildActionIcon(project.repoURL, repoIcon, repoText), newInfoIcon);

    var projectTitle = $("<div></div>", { "class": "project-title" }).append(project.title);

    var projectDesc = $("<div></div>", { "class": "project-desc project-bg" }).append(project.desc);

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
    $("#projects-container").append(newProject);
}

function appendSkills(skills, newSkillsWrapper) {
    skills.forEach(skill => {
        newSkillsWrapper.append($("<div></div>", { "class": "project-skill no-select" }).append(skill));
    });
    return true;
}

function buildActionIcon(url, icon, text) {
    if (url) {
        var newIcon = $("<a></a>",
            {
                "class": "project-action",
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
    if (project.galleryText) {
        project.galleryText.forEach(paragraph => {
            $("#lightbox-text").append($("<p></p>").text(paragraph));
        })
    } else if (project.desc) {
        $("#lightbox-text").append($("<p></p>").text(project.desc));
    } else {
        $("#lightbox-text").append($("<p></p>").text("Project description coming soon."));
    }
    $("#lightbox-actions").empty().append(buildActionIcon(project.liveURL, liveIcon, galleryLiveText), buildActionIcon(project.repoURL, repoIcon, galleryRepoText))

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

    setTimeout(function () {
        $('#menu-toggle').removeClass("hide-content");
        if ($(window).scrollTop() > $(window).height()) {
            $('#scroll-to-top').fadeIn();
        }
        lightboxOpen = false;
    }, 300);

}

$(document).ready(function () {

    $(document).on('click', '.info-btn', function () {
        let projectIndex = $(this).attr("project-index");
        openLightbox(projectIndex);
    })

    $(".lightbox-click-close").click(function () {
        if (lightboxOpen) {
            closeLightbox();
        }
    })

    loadProjects();
})