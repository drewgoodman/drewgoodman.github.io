const projects = [
    {
        title: "PetStash Supply Co.",
        coverImage: "petstash-front-banner.jpg",
        liveURL: "https://petstash-supply-co.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/PetStash-StoreFront",
        desc: "Functional eCommerce site with account signup, searching, and checkout",
        skills: ["React.js","SCSS","Postman"]
    },
    
    {
        title: "PetStash Backend API",
        coverImage: "petstash-back2.png",
        liveURL: "https://petstash-backoffice.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/PetStash-BackOfficeAPI",
        desc: "Restful API with CRUD functionality; handles the shop and user data.",
        skills: ["Python","MySQL","Flask","Boostrap"]
    },

    {
        title: "Triple Triad Browser Game",
        coverImage: "tripletriad-banner.png",
        liveURL: "https://drg-triple-triad.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/Triple-Triad",
        desc: "Static HTML adaptation of a mini-game from Final Fantasy VIII.",
        skills: ["JavaScript","HTML5","CSS3"]
    },
    
    {
        title: "jQuery To-Do List",
        coverImage: "todo-list.png",
        liveURL: "https://drg-jquery-todo.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/jQuery-ToDoList",
        desc: "Basic to-do list app with complete and delete functions.",
        skills: ["jQuery","HTML5", "CSS3"]
    },
    
    
    {
        title: "Python Games",
        coverImage: "python-games-banner.png",
        repoURL: "https://github.com/drewgoodman/jQuery-ToDoList",
        desc: "Hangman, Tic-tac-toe, a Magic 8-Ball, and more built for the terminal.",
        skills: ["Python"]
    },
    
    {
        title: "eCommerce Mockup",
        coverImage: "eCommerce.png",
        liveURL: "https://drgood-ecommerce-react.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/practice-ecommerce-react-app",
        desc: "Front-end React mockup of an eCommerce app for purchasing stickers.",
        skills: ["React.js","Redux","SCSS"]
    },
    
    {
        title: "Bottega Diner",
        coverImage: "diner.png",
        liveURL: "https://drg-bottega-diner.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/Bottega-Diner",
        desc: "Interactive diner menu with commentary.",
        skills: ["JavaScript","HTML5", "CSS3"]
    }
]

const liveIcon = '<i class="fas fa-desktop">';
const repoIcon = '<i class="fas fa-code">'
const infoIcon = '<i class="fas fa-question-circle">'

function loadProjects() {
    projects.forEach(project => {
        buildProject(project);
    })
}

function buildProject(project) {
    var newProject = $("<div></div>",
        {
            "class": "project-wrapper",
            "style": `background-image: url('../static/images/project/${project.coverImage}')`
        });

    var projectActions = $("<div></div", { "class": "project-actions project-bg" });
    var newInfoIcon = $("<a></a>", { "class": "project-action", "href": "#" }).append($(infoIcon), "Info")
    projectActions.append(buildActionIcon(project.liveURL, liveIcon, "Live"), buildActionIcon(project.repoURL, repoIcon, "Repo"), newInfoIcon);

    var projectTitle = $("<div></div>", { "class": "project-title" }).append(project.title);

    var projectDesc = $("<div></div>", { "class": "project-desc project-bg" }).append(project.desc);

    var projectSkills = $("<div></div>", { "class": "project-skills-wrapper" });
    project.skills.forEach(skill => {
        projectSkills.append($("<div></div>", { "class": "project-skill no-select" }).append(skill));
    })

    newProject.append(
        projectActions,
        projectTitle,
        $("<span></span>", { "class": "project-divider"}),
        $("<span></span>", { "class": "project-shader"}),
        projectDesc,
        projectSkills
    );
    $("#projects-container").append(newProject);
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

$(document).ready(function () {

    loadProjects();
})