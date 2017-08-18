var bio = {
    "name": "Ananya Sethi",
    "role": "Web-Developer",
    "contacts": {
        "mobile": "9756088272",
        "email": "ananyasethi562gmail.com",
        "github": "ananya00.com",
        "location": "Meerut"
    },
    "welcomeMessage": "Hello Everyone!!!! here is my resume",
    "biopic": "sethi.jpg",
    "skills": ["Dancing", "Coding", "Eating"],
    "display": function() {
        var role = HTMLheaderRole.replace(
            "%data%", bio.role);
        $('#header').prepend(role);
        var name = HTMLheaderName.replace(
            "%data%", bio.name);
        $('#header').prepend(name);
        var message = HTMLwelcomeMsg.replace(
            "%data%", bio.welcomeMessage
        );
        $('#header').append(message);
        var img = HTMLbioPic.replace("%data%",
            bio.biopic);
        $('#header').append(img);
        var contacts = HTMLmobile.replace(
            "%data%", bio.contacts
            .mobile);
        $('#topContacts').append(contacts);
        var mobile = HTMLmobile.replace(
            "%data%", bio.contacts
            .mobile);
        $('#footerContacts').append(mobile);
        var email = HTMLemail.replace(
            "%data%", bio.contacts
            .email);
        $('#topContacts').append(email);
        var email = HTMLemail.replace(
            "%data%", bio.contacts
            .email);
        $('#footerContacts').append(email);
        var github = HTMLgithub.replace(
            "%data%", bio.contacts
            .github);
        $('#topContacts').append(github);
        var github = HTMLgithub.replace(
            "%data%", bio.contacts
            .github);
        $('#footerContacts').append(github);
        var locations = HTMLlocation.replace(
            "%data%", bio.contacts
            .location);
        $('#topContacts').append(locations);
        var locations = HTMLlocation.replace(
            "%data%", bio.contacts
            .location);
        $('#footerContacts').append(locations);
        $('#header').append(HTMLskillsStart);
        for (var skill = 0; skill < bio.skills
            .length; skill++) {
            var skill1 = HTMLskills.replace(
                "%data%", bio
                .skills[
                    skill
                ]);
            $('#header').append(skill1);

        }
    }
};
bio.display();
var work = {
    "jobs": [{
        "employer": "university",
        "title": "A Teacher",
        "dates": "1995-december 2020",
        "location": "Chandigarh",
        "description": "Teacher to complement our qualified workforce of educators. You will be responsible for preparing and implementing a full educational teaching plan according to the school’s requirements. It will be fundamental to provide knowledge and instruction to students while also helping them develop their personalities and skills."
    }, {
        "employer": "worker",
        "title": "National health service",
        "dates": "1998-march 2017",
        "location": "Mumbai",
        "description": "The National Health Service (NHS) is the publicly funded national healthcare system in the United Kingdom. The organization, funded primarily by taxation, provides free or low-cost healthcare to all legal residents of the U.K. Medications are subsidized as well and prescriptions may be free when situations warrant. "
    }],
    "display": function() {
        for (var job = 0; job < work.jobs.length; job++) {
            $('#workExperience').append(
                HTMLworkStart
            );
            var formattedemployer =
                HTMLworkEmployer.replace(
                    "%data%",
                    work.jobs[job]
                    .employer);
            var formattedtitle =
                HTMLworkTitle.replace(
                    "%data%",
                    work.jobs[job]
                    .title);
            var concat =
                formattedemployer.concat(
                    formattedtitle
                );
            $('.work-entry:last').append(
                concat);
            var formatteddates =
                HTMLworkDates.replace(
                    "%data%",
                    work.jobs[job]
                    .dates);
            $('.work-entry:last').append(
                formatteddates
            );
            var formattedloc1 =
                HTMLworkLocation.replace(
                    "%data%",
                    work.jobs[job]
                    .location);
            $('.work-entry:last').append(
                formattedloc1
            );
            var formatteddescription =
                HTMLworkDescription.replace(
                    "%data%",
                    work.jobs[job]
                    .description);
            $('.work-entry:last').append(
                formatteddescription
            );
        }
    }
};
work.display();

var projects = {
    "projects": [{
        "title": "Projects",
        "dates": "sample 1,1990 march",
        "location": "chandigarh",
        "description": "The snow acts as an insulator, that is, something that is a poor conductor of heat or electricity. So the heat in the igloo, from body temperatures, candles, etc., can't escape through the snow walls.After all, the temperature must be below freezing (32° F) in order to build an igloo! That's where the sink hole comes in. First, since it's lower than the rest of the igloo's floor, cold air settles into it while warm air rises, filling the rest of the igloo. ",
        "images": ["igloo2.jpg"]
    }]
};

projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);
        var formattedtitle = HTMLprojectTitle.replace(
            "%data%",
            projects.projects[project].title
        );
        $('.project-entry:last').append(
            formattedtitle);
        var formatteddates = HTMLprojectDates.replace(
            "%data%",
            projects.projects[project].dates
        );
        $('.project-entry:last').append(
            formatteddates);
        var formatteddes = HTMLprojectDescription.replace(
            "%data%", projects.projects[
                project].description);
        $('.project-entry:last').append(formatteddes);
        for (var img = 0; img < projects.projects[
                project].images
            .length; img++) {
            var formattedimg = HTMLprojectImage.replace(
                "%data%",
                projects.projects[
                    project].images[
                    img]);
            $('.project-entry:last').append(
                formattedimg);
        }
    }
};

projects.display();

var education = {
    "schools": [{
        "name": "ananya",
        "location": "rajpura",
        "degree": "btech",
        "majors": ["cs"],
        "dates": "2013",
        "url": "http.example.com"
    }, {
        "name": "kalindi",
        "location": "rajpura",
        "degree": "gyano",
        "majors": ["md"],
        "dates": "2015",
        "url": "http.example.com"
    }],
    "onlineCourses": [{
        "title": "intro_to_programmming",
        "schools": "udacity",
        "dates": "1998,march 2012",
        "url": "http://ghar.com"
    }]
};
education.display = function() {
    for (var edu = 0; edu < education.schools.length; edu++) {
        $("#education").append(HTMLschoolStart);
        var formattedtitle = HTMLschoolName.replace(
            "%data%",
            education.schools[edu].name);
        $('.education-entry:last').append(
            formattedtitle);
        var formattedloc = HTMLschoolLocation.replace(
            "%data%",
            education.schools[edu].location
        );
        $('.education-entry:last').append(
            formattedloc);
        var formatteddate = HTMLschoolDates.replace(
            "%data%",
            education.schools[edu].dates);
        $('.education-entry:last').append(
            formatteddate);
        var formatteddegree = HTMLschoolDegree.replace(
            "%data%",
            education.schools[edu].degree
        );
        $('.education-entry:last').append(
            formatteddegree);
        var formattedmaster = HTMLschoolMajor.replace(
            "%data%",
            education.schools[edu].majors
        );
        $('.education-entry:last').append(
            formattedmaster);
    }
    for (edu = 0; edu < education.onlineCourses.length; edu++) {
        $(".education-entry:last").append(
            HTMLonlineClasses);
        var formattedtitle = HTMLonlineTitle.replace(
            "%data%",
            education.onlineCourses[edu].title
        );
        $('.education-entry:last').append(
            formattedtitle);
        var formattedschools = HTMLonlineSchool.replace(
            "%data%",
            education.onlineCourses[edu].schools
        );
        $('.education-entry:last').append(
            formattedschools);
        var formatteddates = HTMLonlineDates.replace(
            "%data%",
            education.onlineCourses[edu].dates
        );
        $('.education-entry:last').append(
            formatteddates);
        var formattedurl = HTMLonlineURL.replace(
            "%data%",
            education.onlineCourses[edu].url
        );
        $('.education-entry:last').append(
            formattedurl);
    }
};
education.display();
$('#mapDiv').append(googleMap);
