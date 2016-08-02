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
  "skills" : [
    "HTML5", "CSS", "JS", "PHP", "Wordpress", "Digital Communications", "Social Media", "Brazilian Jiu Jitsu"
  ],
  "bioPic" : "images/fry.jpg"
}

var education = {
  "schools" : [
    {
      "name" : "Guilford College",
      "city" : "Greensboro",
      "degree" : "BA",
      "Major" : "Political Science",
      "url" : "http://www.guilfordcollege.edu"
    },
    {
          "name" : "Catholic University of America",
          "city" : "Washington, D.C.",
          "degree" : "MA",
          "Major" : "Political Science",
          "url" : "http://www.cua.edu"
    }
  ],
  "onlineCourses": [
    {
      "Title" : "Programming Foundations: HTML5 + CSS3 for Entrepreneurs",
      "school" : "Udemy",
      "dates" : "2016",
      "url" : "https://www.udemy.com/html-css-more/learn/v4/overview"
    },
    {
      "Title" : "JavaScript Basics",
      "school" : "Udacity",
      "dates" : "2016",
      "url" : "https://www.udacity.com/course/javascript-basics--ud804"
    },
    {
      "Title" : "Object-Oriented JavaScript",
      "school" : "Udacity",
      "dates" : "2016",
      "url" : "https://www.udacity.com/course/object-oriented-javascript--ud015"
    },
    {
      "Title" : "Programming Foundations: HTML5 + CSS3 for Entrepreneurs",
      "school" : "Udemy",
      "dates" : "2016",
      "url" : "https://www.udemy.com/html-css-more/learn/v4/overview"
    },
  ],
}

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
}

var projects = {
  "projects":[
    {
    "title" : "Sample project",
    "date" : "2016",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing."
    }
  ]
}
var name = "Christopher W Brown"
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


// $("#main").append(work["position"]);
// $("#main").append(education.name);
