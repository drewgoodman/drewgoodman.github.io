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
        title: "Amazon Web Services",
        icon: "devicon-amazonwebservices-original",
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