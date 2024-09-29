const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;

const personalInfoOutput = document.getElementById('personal-info-output') as HTMLElement;
const educationOutput = document.getElementById('education-output') as HTMLElement;
const workExperienceOutput = document.getElementById('work-experience-output') as HTMLElement;
const skillsOutput = document.getElementById('skills-output') as HTMLElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.split(',');
  const profilePic = (document.getElementById('profile-pic') as HTMLInputElement).files?.[0];

  if (profilePic) {
    const reader = new FileReader();
    reader.onload = function () {
      const imgElement = document.createElement('img');
      imgElement.src = reader.result as string;
      personalInfoOutput.innerHTML = '';
      personalInfoOutput.appendChild(imgElement);
    };
    reader.readAsDataURL(profilePic);
  }

  personalInfoOutput.innerHTML += `<h2>Personal Information</h2>
                                   <p><strong>Name:</strong> ${name}</p>
                                   <p><strong>Email:</strong> ${email}</p>
                                   <p><strong>Phone:</strong> ${phone}</p>`;

  educationOutput.innerHTML = `<h2>Education</h2>
                               <p>${education}</p>`;

  workExperienceOutput.innerHTML = `<h2>Work Experience</h2>
                                    <p>${workExperience}</p>`;

  skillsOutput.innerHTML = `<h2>Skills</h2>
                            <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>`;

  resumeOutput.classList.remove('hidden');
});
