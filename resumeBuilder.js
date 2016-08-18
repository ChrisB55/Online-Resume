var bio = {
    "name": "Christopher Brown",
    "role": "Web Developer",
    "contacts": {
        "mobile": "202 555-5555",
        "email": "christopherXXXX@gmail.com",
        "github": "https://github.com/Chrisx55",
        "twitter": "@chrisX",
        "location": "Washington D.C.",
    },
    "welcomeMessage": "Welcome to my Resume page.",
    "skills": ["HTML5", "CSS", "JS", "PHP", "Digital Communications", "Social Media", "Brazilian Jiu Jitsu"],
    "biopic": "images/fry.jpg"
};

var work = {
    "jobs": [{
        "employer": "Independent Consultant",
        "title": "Communications and Website Development Advisor",
        "dates": "2016-Current",
        "location": "Washington, D.C.",
        "description": "Freelance web development and communication consultant."
    }, {
        "employer": "Americans for Safe Access",
        "title": "Press Secretary",
        "dates": "2015",
        "location": "Washington, D.C.",
        "description": "Managed messaging and media strategy on medical cannabis access."
    }, {
        "employer": "Second Chance Campaign",
        "title": "Communications Director",
        "dates": "2013-2014",
        "location": "Washington, D.C.",
        "description": "Managed messaging and comprehensive communications strategy for  multi-state  campaign  to  reform  Stand  Your Ground laws."
    }, {
        "employer": "Media Matters",
        "title": "Deputy Team Leader",
        "dates": "2011-2013",
        "location": "Washington, D.C.",
        "description": "Created website content on gun violence and right-wing extremism."
    }]
};

var education = {
    "schools": [{
        "name": "Guilford College",
        "location": "Greensboro, NC",
        "degree": "BA",
        "dates": "1999-2002",
        "majors": ["Political Science"],
        "url": "http://www.guilfordcollege.edu"
    }, {
        "name": "Catholic University of America",
        "location": "Washington, D.C.",
        "degree": "MA",
        "dates": "2006-2007",
        "majors": ["Political Science"],
        "url": "http://www.cua.edu"
    }],
    "onlineCourses": [{
        "title": "Programming Foundations: HTML5 + CSS3 for Entrepreneurs",
        "school": "Udemy",
        "dates": " June 2016",
        "url": "https://www.udemy.com/html-css-more/learn/v4/overview"
    }, {
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": " July 2016",
        "url": "https://www.udacity.com/course/javascript-basics--ud804"
    }, {
        "title": "Object-Oriented JavaScript",
        "school": "Udacity",
        "dates": "August 2016",
        "url": "https://www.udacity.com/course/object-oriented-javascript--ud015"
    }, {
        "title": "Practical PHP: Master the Basic of and Code Dynamic Website",
        "url": "https://www.udemy.com/code-dynamic-websites/learn/v4/overview",
        "school": "Code College",
        "dates": "July 2016",

    }, ],
};

var projects = {
    "projects": [{
        "title": "Portfolio",
        "url": "https://github.com/Chrisx55/Portfolio-Project",
        "date": "2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        "images": ["images/197x148.gif"]
    }]
};

bio.display = function() {
    var name = "Christopher W Brown";
    var formattedName = HTMLheaderName.replace("%data%", name);
    var role = "Web Developer";
    var formattedRole = HTMLheaderRole.replace("%data%", role);
    var biopic = bio.biopic;
    var formattedBiopic = HTMLbiopic.replace("%data%", biopic);
    $("#header").append(formattedBiopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });
    }


    for (var i in formattedContactInfo) {
        if (formattedContactInfo.hasOwnProperty(i)) {
            $("#topContacts").append(formattedContactInfo[i]);
            $("#footerContacts").append(formattedContactInfo[i]);
        }
    }
};

bio.display();

work.display = function() {

    if (work.jobs.length > 0) {
        $("#workExperience").append(HTMLworkStart);

        for (var i = 0; i < work.jobs.length; i++) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }
};

work.display();

projects.display = function() {
    if (projects.projects.length > 0) {
        $("#projects").append(HTMLprojectStart);

        for (var i = 0; i < projects.projects.length; i++) {
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].date);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for (var j = 0; j < projects.projects[i].images.length; j++) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
            }
        }
    }
};
projects.display();

education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart); {
                var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
                var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
                var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
                var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);


                $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
                $(".education-entry:last").append(formattedSchoolDates);
                $(".education-entry:last").append(formattedSchoolLocation);
                $(".education-entry:last").append(formattedSchoolMajor);
            }

        }
    }
    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        for (var j = 0; j < education.onlineCourses.length; j++) {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title).replace("#", education.onlineCourses[j].url);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url).replace("#", education.onlineCourses[j].url);

            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
};
education.display();
$('#mapDiv').append(googleMap);
