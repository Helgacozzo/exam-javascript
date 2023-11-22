const devTeam = {

    lead: {

        name: "Alice",
        skills: ["JavaScript", "React", "Node.js"]

    },

    testers: [

        {
            name: "Bob",
            skills: ["HTML", "CSS", "JavaScript"]
        },

        {
            name: "Charlie",
            skills: ["Python", "Django", "PostgreSQL"]
        }

    ],

    projectName: "WebApp"

};


// L'espressione soprastante ha inserito in memoria un oggetto principale(devTeam) con all'interno: 

// 1. l'oggetto 'lead' con all'interno l'array di oggetti 'skills'.
// 2. l'oggetto 'testers' con all'interno l'oggetto 'name' e annidato l'array di oggetti 'skills', 
// e un ulteriore oggetto 'name' e annidato l'array di oggetti 'skills.

// in totale in memoria ci sono: 8 oggetti.



const teamLead = devTeam.lead;
teamLead.skills.push('GraphQL');

const devTeamCopy = JSON.parse(JSON.stringify(devTeam));
devTeamCopy.projectName = "MobileApp";

window.addEventListener('load', () => {

    const generateTester = (name) => {

        const skills = [];

        for (let i = 0; i < 3; i++) {
            const skills = ["JavaScript", "React", "Node.js", "HTML", "CSS", "Python", "Django", "PostgreSQL"];
            const randomExpression = Math.floor(Math.random() * skills.length);
            const randomSkills = skills[randomExpression];
            skills.push(randomSkills);
        }

        const tester = {
            name: "Gino",
            skills: skills
        };

        return tester;

    };

    const newTester = generateTester();
    devTeamCopy.testers.push(newTester);

});



// Sono stati creati 2 nuovi oggetti: 

// Uno durante la creazione del nuovo oggetto tester
// Un altro quando è stato aggiunto il nuovo tester all'array testers di devTeamCopy

// In totale, sono stati aggiunti 3 oggetti in più