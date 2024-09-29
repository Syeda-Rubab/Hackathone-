var form = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resume-output');
var personalInfoOutput = document.getElementById('personal-info-output');
var educationOutput = document.getElementById('education-output');
var workExperienceOutput = document.getElementById('work-experience-output');
var skillsOutput = document.getElementById('skills-output');
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    var profilePic = (_a = document.getElementById('profile-pic').files) === null || _a === void 0 ? void 0 : _a[0];
    if (profilePic) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            var imgElement = document.createElement('img');
            imgElement.src = reader_1.result;
            personalInfoOutput.innerHTML = '';
            personalInfoOutput.appendChild(imgElement);
        };
        reader_1.readAsDataURL(profilePic);
    }
    personalInfoOutput.innerHTML += "<h2>Personal Information</h2>\n                                   <p><strong>Name:</strong> ".concat(name, "</p>\n                                   <p><strong>Email:</strong> ").concat(email, "</p>\n                                   <p><strong>Phone:</strong> ").concat(phone, "</p>");
    educationOutput.innerHTML = "<h2>Education</h2>\n                               <p>".concat(education, "</p>");
    workExperienceOutput.innerHTML = "<h2>Work Experience</h2>\n                                    <p>".concat(workExperience, "</p>");
    skillsOutput.innerHTML = "<h2>Skills</h2>\n                            <ul>".concat((function (skill) { return "<li>".concat(skill.trim(), "</li>"); })(''), "</ul>");
    resumeOutput.classList.remove('hidden');
});
