var bio = {
  "name" : "Christopher Brown",
  "role" : "Web Developer",
  "contacts" : {
    "mobile": "202 555-5555",
    "email" : "christopherXXXX@gmail.com",
    "github" : "https://github.com/Chrisx55",
    "twitter" : "@chrisX",
    "location" : "Washington D.C.",
  },
  "welcomeMessage": "Welcome to my Resume page.",
  "skills" : ["HTML5", "CSS", "JS", "PHP", "Wordpress", "Digital Communications", "Social Media", "Brazilian Jiu Jitsu"
  ],
  "bioPic" : "images/fry.jpg"
};

var work = {
  "jobs": [
    {
      "employer": "Independent Consultant",
      "title" : "Communications and Website Development Advisor",
      "dates" : "2015-2016",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing."
    },
    {
      "employer": "Americans for Safe Access",
      "title" : "Press Secretary",
      "dates" : "2014-2015",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing."
    },
    {
      "employer": "Second Chance Campaign",
      "title" : "Communications Director",
      "dates" : "2013-2014",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing."
    },
    {
      "employer": "Media Matters",
      "title" : "Deputy Team Leader",
      "dates" : "2011-2013",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing."
    }
  ]
};

var education = {
  "schools" : [
    {
      "name" : "Guilford College",
      "city" : "Greensboro",
      "degree" : "BA",
      "major" : "Political Science",
      "url" : "http://www.guilfordcollege.edu"
    },
    {
          "name" : "Catholic University of America",
          "city" : "Washington, D.C.",
          "degree" : "MA",
          "major" : "Political Science",
          "url" : "http://www.cua.edu"
    }
  ],
  "onlineCourses": [
    {
      "title" : "Programming Foundations: HTML5 + CSS3 for Entrepreneurs",
      "school" : "Udemy",
      "dates" : "2016",
      "url" : "https://www.udemy.com/html-css-more/learn/v4/overview"
    },
    {
      "title" : "JavaScript Basics",
      "school" : "Udacity",
      "dates" : "2016",
      "url" : "https://www.udacity.com/course/javascript-basics--ud804"
    },
    {
      "title" : "Object-Oriented JavaScript",
      "school" : "Udacity",
      "dates" : "2016",
      "url" : "https://www.udacity.com/course/object-oriented-javascript--ud015"
    },
    {
      "title" : "Programming Foundations: HTML5 + CSS3 for Entrepreneurs",
      "school" : "Udemy",
      "dates" : "2016",
      "url" : "https://www.udemy.com/html-css-more/learn/v4/overview"
    },
  ],
};

var projects = {
  "projects":[
    {
    "title" : "Sample project",
    "date" : "2016",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing."
    }
  ]
};

var name = "Christopher W Brown";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}


		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);


			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);

		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}

	}
}

education.display();

// $("#main").append(work["position"]);
// $("#main").append(education.name);
