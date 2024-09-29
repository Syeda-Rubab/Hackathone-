document
.getElementById("resumeForm")
?.addEventListener("submit",function (event) {
    event.preventDefault();

    
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
    const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;
    const shareableLinkContainer = document.getElementById("shareable-link-container") as HTMLDivElement;
    const shareableLinkElement = document.getElementById("shareable-link") as HTMLAnchorElement;
    const downloadPdfButton = document.getElementById("download-pdf") as HTMLButtonElement;

    if(
        profilePictureInput && 
        nameElement && 
        emailElement && 
        phoneElement && 
        educationElement && 
        experienceElement && 
        skillsElement
    ) {

 //************************************** */

        const name = nameElement.value ;
        const email = emailElement.value;
        const phone = phoneElement.value ;
        const education = educationElement.value ;
        const experience = experienceElement.value ;
        const skills = skillsElement.value ;

//************************************************** */

        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile
        ? URL.createObjectURL(profilePictureFile) 
        : "";



        //create resume output
       const resumeOutput = `
       <h2>Resume</h2>
      ${
        profilePictureURL
         ? `<img src="${profilePictureURL}" alt="PrOfile Picture" class="profilePicture">`
         : '' 
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
     
       const resumeOutputElement = document.getElementById('resumeOutput');
       if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.classList.remove("hidden");

       //ceate container for button
       const buttonsContainer = document.createElement("div");
       buttonsContainer.id ="buttonsContainer";
       resumeOutputElement.appendChild(buttonsContainer);

       //Add download PDF
       const downloadButton = document.createElement("button");
       downloadButton.textContent = "Download as PDF";
       downloadButton.addEventListener("Click",()=>{
        window.print();
       });
       buttonsContainer.appendChild(downloadButton);

       //Add shareable link
       const shareLinkButton = document.createElement("button");
       shareLinkButton.textContent = "Copy Shareabe Link";
       shareLinkButton.addEventListener("Click", async()=>{
        try{
            //create a unique shareable link
            const shareableLink = `https://yourdomain.com/resumes/${name.replace(
                /\s+/g,
                "_"
            )}_cv.html`;

        //use Clipboard AI
        await navigator.clipboard.writeText(shareableLink);
        alert("Shareable link copied to clipboard!");
        } catch(err){
            console.error("Failed to cope link:",err);
        alert("Failed to copy link to clipboard. Please try again.");
        }
       });
       buttonsContainer.appendChild(shareLinkButton);
       } else {
        console.error("Resume output container not found");
        }
    } else{
        console.error("Form elements are missing");
    }
});