//listening element
document.getElementById('resumeForm')?.addEventListener("submit",function(event){
    event.preventDefault();

    //type assertion
    const profilePictureInput = document.getElementById(
        "profilePicture"
    ) as HTMLInputElement;

    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById(
        "education"
    ) as HTMLInputElement;
    const experienceElement = document.getElementById(
        "experience"
    ) as HTMLInputElement;
    const skillsElement = document.getElementById(
        "skills"
    ) as HTMLInputElement;
    const usernameElement = document.getElementById(
        "username"
    ) as HTMLInputElement;

    if(
        profilePictureInput &&
         nameElement &&
         emailElement &&
         phoneElement &&
         educationElement && 
         experienceElement &&
         skillsElement && 
     //** 
         usernameElement
        
        ) {

        const name = nameElement.value ;
        const email = emailElement.value;
        const phone = phoneElement.value ;
        const education = educationElement.value ;
        const experience = experienceElement.value ;
        const skills = skillsElement.value ;
     //** 

        const username = usernameElement.value;
        const uniquePath = `resumes/${username.replace(/\s+/g,'_')}_cv.html`

        //picture Elements
        const profilePictureFile = profilePictureInput.files?.[0]
        const profilePictureURL = profilePictureFile
         ? URL.createObjectURL(profilePictureFile)
          : "";



        //create resume output
       const resumeOutput = `
       <h2>Resume</h2>
      ${
        profilePictureURL
         ? `<img src="${profilePictureURL}" alt="PrOfile Picture" class="profilePicture">`
        : "" 
    }
       <p><strong>Name:</strong> ${name} </p>
       <p><strong>Email:</strong> ${email} </p>
       <p><strong>Phone Number:</strong> ${phone} </P>

       <h3>Education</h3>
       <p>${education}</p>

       <h3>Experience</h3>
       <p>${experience}</h3>

       <h3>Skills</h3>
       <p>${skills}</p>
    
       `;

     //** 
       const downloadLink = document.createElement('a')
       downloadLink.href = 'data:text/html;charset=utf8,' + encodeURIComponent(resumeOutput)
       downloadLink.download = uniquePath;
       downloadLink.textContent = 'Download your 2024 Resume';



       //Resume output
       const resumeOutputElement = document.getElementById('resumeOutput');
       if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput;

        //**
        resumeOutputElement.appendChild(downloadLink) 

       
        resumeOutputElement.style.display ="block";
       }
     } else {
        console.error("One or more form elements are missing.");
        }
    
});