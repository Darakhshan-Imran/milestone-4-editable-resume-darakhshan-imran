
document.getElementById('dynamic-resume')?.addEventListener('submit', (event)=>{
    event.preventDefault();

    // Type Assertion

    const nameElement=document.getElementById('name') as HTMLInputElement;
    const emailElement=document.getElementById('email') as HTMLInputElement;
    const contactElement=document.getElementById('contact') as HTMLInputElement;
    const urlElement=document.getElementById('url') as HTMLInputElement;
    const educationElement=document.getElementById('education') as HTMLInputElement;
    const skillsElement=document.getElementById('skills') as HTMLInputElement;
    const experienceElement=document.getElementById('experience') as HTMLInputElement;
    
    // Apply condition

    if(nameElement && emailElement && contactElement && urlElement && educationElement && skillsElement && experienceElement){

        const name= nameElement.value;
        const email= emailElement.value;
        const contact= contactElement.value;
        const url= urlElement.value;
        const education= educationElement.value;
        const skills= skillsElement.value;
        const experience= experienceElement.value;

    // resume output

    const resume_output = ` 
        <h1>Resume</h1>
        <p><strong>Name:</strong>${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contact}</p>
        <p><strong>Linkedin:</strong> ${url}</p>
        
        <h1>Education</h1>
        <p>${education}</p>
        <h1>Work Experience</h1>
        <p>${experience}</p>
        <h1>Skills</h1>
        <p>${skills}</p>`;

        const resumeOutputElement = document.getElementById('resumeoutput')
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resume_output

            editableContent();
        } else {
            console.error('One or more form elements are missing');
        }
        
    }    
    });

    function editableContent(){
        const editableElemet = document.querySelectorAll('.editable');

        editableElemet.forEach((element) => {
            element.addEventListener('click', ()=>{
                const currentElement = element as HTMLElement;
                const currentValue = currentElement.textContent || "";

                if (currentElement.tagName === "p" ){
                    const input = document.createElement('input')
                    input.type = 'text'
                    input.value = currentValue
                    input.classList.add ('editing-input')

                    currentElement.style.display = 'none'
                    currentElement.parentNode?.insertBefore(input, currentElement)
                    input.focus();
                }
            })
        })
    }

        