const projects = [
    {
        title: "PetStash Supply Co.",
        coverImage: "petstash-1.png",
        liveURL: "https://drg-jquery-todo.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/jQuery-ToDoList",
        desc: "Basic to-do list app with complete and delete functions.",
        skills: ["HTML5", "CSS3", "jQuery"]
    },
    
    {
        title: "PetStasth Backend API",
        coverImage: "petstash-back2.png",
        liveURL: "https://drg-jquery-todo.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/jQuery-ToDoList",
        desc: "Basic to-do list app with complete and delete functions.",
        skills: ["HTML5", "CSS3", "jQuery"]
    },

    {
        title: "Triple Triad Browser Game",
        coverImage: "tripletriad-1.png",
        liveURL: "https://drg-jquery-todo.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/jQuery-ToDoList",
        desc: "Basic to-do list app with complete and delete functions.",
        skills: ["HTML5", "CSS3", "jQuery"]
    },
    
    {
        title: "jQuery To-Do List",
        coverImage: "todo-list.png",
        liveURL: "https://drg-jquery-todo.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/jQuery-ToDoList",
        desc: "Basic to-do list app with complete and delete functions.",
        skills: ["HTML5", "CSS3", "jQuery"]
    },
    
    {
        title: "jQuery To-Do List",
        coverImage: "todo-list.png",
        liveURL: "https://drg-jquery-todo.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/jQuery-ToDoList",
        desc: "Basic to-do list app with complete and delete functions.",
        skills: ["HTML5", "CSS3", "jQuery"]
    },
    
    {
        title: "jQuery To-Do List",
        coverImage: "todo-list.png",
        liveURL: "https://drg-jquery-todo.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/jQuery-ToDoList",
        desc: "Basic to-do list app with complete and delete functions.",
        skills: ["HTML5", "CSS3", "jQuery"]
    }
]

const liveIcon = '<i class="fas fa-desktop">';
const repoIcon = '<i class="fas fa-code">'
const infoIcon = '<i class="fas fa-camera">'

function loadProjects() {
    console.log(projects);
    projects.forEach(project => {
        console.log(project.name);
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
    var newIcon = $("<a></a>",
        {
            "class": "project-action",
            "target": "_blank",
            "href": url
        }).append($(icon), text);
    return newIcon;
}

$(document).ready(function () {
    loadProjects();
})