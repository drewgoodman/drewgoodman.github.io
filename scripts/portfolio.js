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
            "This is paragraph #1",
            "Paragraph #2"    
        ]
    },

    {
        title: "PetStash Backend API",
        coverImage: "petstash-back2.png",
        liveURL: "https://petstash-backoffice.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/PetStash-BackOfficeAPI",
        desc: "Restful API with CRUD functionality; handles the shop and user data.",
        skills: ["Python", "MySQL", "Flask", "Boostrap"]
    },

    {
        title: "Triple Triad Browser Game",
        coverImage: "tripletriad-banner.png",
        liveURL: "https://drg-triple-triad.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/Triple-Triad",
        desc: "Static HTML adaptation of a mini-game from Final Fantasy VIII.",
        skills: ["JavaScript", "HTML5", "CSS3"]
    },

    {
        title: "jQuery To-Do List",
        coverImage: "todo-list.png",
        liveURL: "https://drg-jquery-todo.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/jQuery-ToDoList",
        desc: "Basic to-do list app with complete and delete functions.",
        skills: ["jQuery", "HTML5", "CSS3"]
    },

    {
        title: "Python Games",
        coverImage: "python-games-banner.png",
        repoURL: "https://github.com/drewgoodman/Python-Games",
        desc: "Hangman, Tic-tac-toe, a Magic 8-Ball, and more built to run in a terminal.",
        skills: ["Python"]
    },

    {
        title: "eCommerce Mockup",
        coverImage: "eCommerce.png",
        liveURL: "https://drgood-ecommerce-react.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/practice-ecommerce-react-app",
        desc: "Front-end React mockup of an eCommerce app for purchasing stickers.",
        skills: ["React.js", "Redux", "SCSS"]
    },

    {
        title: "Bottega Diner",
        coverImage: "diner.png",
        liveURL: "https://drg-bottega-diner.herokuapp.com",
        repoURL: "https://github.com/drewgoodman/Bottega-Diner",
        desc: "Interactive diner menu with commentary.",
        skills: ["JavaScript", "HTML5", "CSS3"]
    }
]

const liveIcon = '<i class="fas fa-desktop">';
const liveText = "Live";
const galleryLiveText = "Try It Live";
const repoIcon = '<i class="fas fa-code">';
const repoText = "Code";
const galleryRepoText = "See the Code"
const infoIcon = '<i class="fas fa-question-circle">';
const infoText = "Info";

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

    var projectSkillsWrapper =$("<div></div>", { "class": "project-skills-wrapper" });
    appendSkills(project.skills,projectSkillsWrapper)

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

function appendSkills(skills,newSkillsWrapper) {
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
    let baseGalleryImg = project.galleryImage? project.galleryImage[0] : project.coverImage;
    $("#lightbox-gallery").css("background-image",`url('../static/images/project/${baseGalleryImg}')`)
    $("#lightbox-skills-wrapper").empty()
    appendSkills(project.skills,$("#lightbox-skills-wrapper"));
    $("#lightbox-text").empty();
    if(project.galleryText) {
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
    $('body').addClass("disable-scrolling");
    $('.unfocus-for-lightbox').addClass("blur-content");
    $('#menu-toggle').addClass("hide-content");
    $('#scroll-to-top').fadeOut();
    setTimeout( function() {
        lightboxOpen = true;
    }, 500);
}

function closeLightbox() {
    $("#lightbox").fadeOut();
    $('body').removeClass("disable-scrolling");
    $('.unfocus-for-lightbox').removeClass("blur-content");
    
    setTimeout( function() {
        $('#menu-toggle').removeClass("hide-content");
        if($(window).scrollTop() > $(window).height()) {
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
        if(lightboxOpen) {
            closeLightbox();
        }
    })

    loadProjects();
})