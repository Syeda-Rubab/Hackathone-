//listening element
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();

    //type assertion
    const profilepictureInput = document.getElementById('profilepicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    if(profilepictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){

        const name = nameElement.value ;
        const email = emailElement.value;
        const phone = phoneElement.value ;
        const education = educationElement.value ;
        const experience = experienceElement.value ;
        const skills = skillsElement.value ;

        const profilepictureFile = profilepictureInput.files?.[0]
        const profilepictureURL = profilepictureFile ? URL.createObjectURL(profilepictureFile) : '';




        //create resume output
       const resumeOutput =`
       <h2>Resume</h2>
       ${profilepictureURL ? `<img src="${profilepictureURL} alt="PrOfile Picture" class="profilepicture">`: '' }
       <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name}</span> </p>
       <p><strong>Email:</strong><span id="edit-email class="editable"> ${email}</span> </p>
       <p><strong>Phone Number:</strong><span id="edit-phone" class="editable"> ${phone} </span></P>

       <h3>Education</h3>
       <p id="edit-education" class="editable">${education}</p>

       <h3>Experience</h3>
       <p id="edit-experience" class="editable">${experience}</h3>

       <h3>Skills</h3>
       <p>${skills}</p>
    
       `;
       const resumeOutputElement = document.getElementById('resumeOutput')
       if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
        makeEditable()
        } else {
        console.error('one or more elements are missing')
        }
    }
});

function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element =>{
        element.addEventListener('click', function(){
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "" ;

            if(currentElement.tagName === "p" || currentElement.tagName === "SPAN"){
                const input = document.createElement('input')
                input.type = "text"
                input.value = currentValue
                input.classList.add('editing input')

                input.addEventListener('blur', function(){
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline'
                    input.remove()
                })


                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }
                
        })
    })
}