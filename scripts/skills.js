// Types: Language, Tool, Framework

const skills = [
    {
        title: "Python",
        icon: "devicon-python-plain",
        type: "Language",
    },
    {
        title: "JavaScript",
        icon: "devicon-javascript-plain",
        type: "Language",
    },
    {
        title: "HTML5",
        icon: "devicon-html5-plain",
        type: "Language",
    },
    {
        title: "CSS3",
        icon: "devicon-css3-plain",
        type: "Language",
    },
    {
        title: "React",
        icon: "devicon-react-plain",
        type: "Framework",
    },
    {
        title: "Django",
        icon: "devicon-django-plain",
        type: "Framework",
    },
    {
        title: "jQuery",
        icon: "devicon-jquery-plain",
        type: "Framework",
    },
    {
        title: "Bootstrap",
        icon: "devicon-bootstrap-plain",
        type: "Framework",
    },
    {
        title: "Amazon Web Services",
        icon: "devicon-amazonwebservices-original",
        type: "Tool",
    },
    {
        title: "MySQL",
        icon: "devicon-mysql-plain",
        type: "Tool",
    },
    {
        title: "MongoDB",
        icon: "devicon-mongodb-plain",
        type: "Tool",
    },
    {
        title: "GitHub",
        icon: "devicon-github-plain",
        type: "Tool",
    },
    {
        title: "Heroku",
        icon: "devicon-heroku-plain",
        type: "Tool",
    },
    {
        title: "Visual Studio Code",
        icon: "devicon-visualstudio-plain",
        type: "Tool",
    },
    {
        title: "Wordpress",
        icon: "devicon-wordpress-plain",
        type: "Tool",
    },
    {
        title: "Slack",
        icon: "devicon-slack-plain",
        type: "Tool",
    },

]

function buildSkill(skill) {
    var newSkill = $("<div></div>", {
        "class": "skill-card",
    });

    var skillIcon = $("<div></div>", {
        "class": "skill-icon"
    });

    skillIcon.append(
        $("<i></i>", { "class": `${skill.icon} colored`})
    );

    var skillText = $("<div></div>", {
        "class": "skill-text"
    })

    skillText.append(
        skill.title
    )

    newSkill.append(skillIcon,skillText);


    $(".skills-grid").append(newSkill);

}
function loadSkills() {
    skills.forEach(skill => {
        buildSkill(skill);
    })
}

$(document).ready(function () {
    loadSkills();
})

{/* <div class="skill-card">
<div class="skill-icon">
    <i class="devicon-amazonwebservices-original colored"></i>
</div>
<div class="skill-text">
    Amazon Web Services
</div>
</div> */}