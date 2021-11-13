let jobs = [];
let education = [];
let skills = [];

const addEd = () => {
    education.push({
        id: Date.now(),
        degEarned: '',
        school: ''
    })
    renderEducation();
};

const editEdu = (i, educationF, school,) => {
    let edufound = education[i];
    if(edufound) {
        education[i]['degEarned'] = educationF;
        education[i]['school'] = school;
    }
};

const addSkill =() => {
    skills.push({
        id: Date.now(),
        name: ''
    })
    renderSkills();
};

const editSkill = (i, skill) => {
    skills[i]['name'] = skill;
    console.log(skills)
}

const addJobs = () => {
    jobs.push({
        id: Date.now(),
        jobTitle: '',
        company: '',
        summary: '',
        startDate: '',
        endDate: ''
    })
    renderJobs();
}

const editJob = (i, jobtitle, company, summary, startd, endd) => {
    jobs[i]['jobTitle'] = jobtitle;
    jobs[i]['company'] = company;
    jobs[i]['summary'] = summary;
    jobs[i]['startDate'] = startd;
    jobs[i]['endDate'] = endd;
    //renderJobs();
}

var deleteEdu = (id) => {
    education = education.filter(edu => edu.id !== id);
    renderEducation()
}

var deleteJob = (id) => {
    jobs = jobs.filter(j => j.id !== id);
    renderJobs();
}

var deleteSkill = (id) => {
    skills = skills.filter(skill => skill.id !== id);
    renderSkills();
}

var renderEducation = function() {
    //create variable for main education area
    var educationArea = document.querySelector('#education');
    //clear education area before each render
    educationArea.innerHTML = "";
    for (let i = 0; i < education.length; i++) {
        //create form element
        var educationForm = document.createElement('form');
        //create title div for section
        var titleDiv = document.createElement('div');
        titleDiv.classList = 'row';
        var title = document.createElement('h3');
        title.classList ='mx-3';
        title.textContent = `Education ${i + 1}`;
        //add title to title div and insert into education area
        titleDiv.appendChild(title);
        //if its not the first one, add delete button
        if(i !== 0) {
            var edudelBtn = document.createElement('button');
            edudelBtn.classList = 'btn btn-outline-danger mb-2';
            edudelBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>`
            titleDiv.appendChild(edudelBtn);
            edudelBtn.addEventListener('click', function(e) {
                e.preventDefault();
                deleteEdu(education[i].id);
            })
        }
        educationForm.appendChild(titleDiv);
        //create div row for degree earned
        var earnedDegree = document.createElement('div');
        earnedDegree.classList ='row';
        var earnedCol = document.createElement('div');
        earnedCol.classList = 'col-md-6 mb-3';
        //create education input
        var earnedInput = document.createElement('input');
        earnedInput.classList ='form-control';
        earnedInput.setAttribute('type', 'text');
        if(education[i].degEarned === '') {
            earnedInput.setAttribute('placeholder', 'Degree Earned (e.g. "GED", "Associates")')
        } else {
            earnedInput.value = education[i].degEarned;
        }
        //insert input into earned div
        earnedCol.appendChild(earnedInput)
        earnedDegree.appendChild(earnedCol);
        //insert degree row into area
        educationForm.appendChild(earnedDegree);
        //create row div for the school
        var schoolDiv = document.createElement('div');
        schoolDiv.classList ='row';
        var schoolCol = document.createElement('div');
        schoolCol.classList = 'col-md-6 mb-3';
        //create school input
        var school = document.createElement('input');
        school.classList ='form-control';
        school.setAttribute('type', 'text');
        if(education[i].school === '') {
            school.setAttribute('placeholder', 'School Name');
        } else {
            school.value = education[i].school;
        }
        //insert input into school div
        schoolCol.appendChild(school)
        schoolDiv.appendChild(schoolCol);
        //insert school div into education
        educationForm.appendChild(schoolDiv);
        //add div to area
        educationArea.appendChild(educationForm);
        if(i+1 === education.length) {
            //create the add additional school button
            var addeduBtnDiv = document.createElement('div');
            addeduBtnDiv.classList ='row';
            //create btn
            var addEduBtn = document.createElement('button');
            addEduBtn.classList = 'btn btn-primary mx-auto';
            addEduBtn.textContent = 'Add Additional Education';
            //add btn to div
            addeduBtnDiv.appendChild(addEduBtn);
            educationArea.appendChild(addeduBtnDiv);
            addeduBtnDiv.addEventListener('click', addEd);
        }
        educationForm.addEventListener('change', function(e) {
            e.preventDefault();
            editEdu(i, earnedInput.value.trim(), school.value.trim())
        })
    }
}

var renderSkills = function() {
    var skillsect = document.querySelector("#skillsarea");
    skillsect.innerHTML = "";
    for(let i = 0; i < skills.length; i++) {
        var skillrow = document.createElement('div');
        skillrow.classList = 'row';
        var newSkill = document.createElement("div");
        newSkill.classList = 'col-md-6';
        var skillBox = document.createElement('input');
        skillBox.classList = 'form-control mb-3';
        skillBox.setAttribute('type', 'text');
        skillBox.setAttribute('name', 'skill');
        console.log(skills[i].name)
        if(skills[i].name === '') {
            skillBox.setAttribute('placeholder', 'Skill (e.g. "Forklift", "Lead experience")');
        } else {
            skillBox.value = skills[i].name;
        }
        var skilldelbox = document.createElement('div');
        skilldelbox.classList = 'col-md 6';
        var skilldelBtn = document.createElement('button');
        skilldelBtn.classList = 'btn btn-outline-danger mb-2 mx-2';
        skilldelBtn.innerHTML = "btn btn-outline-danger mb-2 mx-2";
        skilldelBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>`;
        newSkill.appendChild(skillBox);
        skillrow.appendChild(newSkill);
        if(i !== 0) {
            skilldelbox.appendChild(skilldelBtn);
            skillrow.appendChild(skilldelbox);
            skilldelBtn.addEventListener('click', function(e) {
                e.preventDefault();
                deleteSkill(skills[i].id);
            })
        }
        skillsect.appendChild(skillrow);
        if(i + 1 === skills.length) {
            var addskillbox = document.createElement('div');
            addskillbox.classList = 'col-md-5';
            var addskillbtn = document.createElement('button');
            addskillbtn.classList = 'btn btn-primary';
            addskillbtn.textContent = 'Add Skill';
            addskillbox.appendChild(addskillbtn);
            skillsect.appendChild(addskillbox);
            addskillbtn.addEventListener('click',addSkill);
        }
        skillrow.addEventListener('change', function(e) {
            e.preventDefault();
            editSkill(i, skillBox.value.trim());
        })
    }
};

var renderJobs = function() {
    var jobSection = document.querySelector("#pastjob");
    jobSection.innerHTML = "";
    let jobsLen = jobs.length;
    for(let i = 0; i < jobs.length; i++){
        //create div to insert into pastjob area
        var jobdiv = document.createElement('div');
        //create title
        var titleDiv = document.createElement('div');
        titleDiv.classList = "row";
        var title = document.createElement('h3');
        title.classList ='mx-3'
        title.textContent = `Work History ${i + 1}`;
        var delButton = document.createElement('button');
        delButton.classList ="btn btn-outline-danger mb-2 mx-2";
        delButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>`
        titleDiv.appendChild(title);
        if(i !== 0) {
            titleDiv.appendChild(delButton);
        }
        delButton.addEventListener('click', function(e) {
            e.preventDefault();
            deleteJob(jobs[i].id);
        });
        //create row div that holds job title div and job company div
        var jobInfo = document.createElement('div');
        jobInfo.classList = 'row';
        //create div for job title
        var firstBox = document.createElement('div');
        firstBox.classList = 'col-md-6 input mb-3';
        var jobTitle = document.createElement('input');
        jobTitle.classList ='form-control';
        jobTitle.setAttribute('type', 'text');
        jobTitle.setAttribute('name', 'worktitle');
        jobTitle.setAttribute('id', `pastjobtitle${i}`);
        if(jobs[i].jobTitle === '') {
            jobTitle.setAttribute('placeholder', 'Job Title');
        } else {
            jobTitle.value = jobs[i].jobTitle
        }
        //insert job title into col div then into row div
        firstBox.appendChild(jobTitle);
        jobInfo.appendChild(firstBox);
        //create second col div for the company name
        var secondbox = document.createElement('div');
        secondbox.classList = 'col-md-6';
        var companyName = document.createElement('input');
        companyName.classList ='form-control';
        companyName.setAttribute('type', 'text');
        companyName.setAttribute('name', 'workcompany');
        companyName.setAttribute('id', `pastjobcompany${i}`);
        if(jobs[i].company === '') {
            companyName.setAttribute('placeholder', 'Company');
        } else {
            companyName.value = jobs[i].company;
        }
        //insert company into col div then into row div
        secondbox.appendChild(companyName);
        jobInfo.appendChild(secondbox);
        //create new row for job summary, start, end dates
        var secondRow = document.createElement('div');
        secondRow.classList = 'row';
        //create col for summary
        var summaryDiv = document.createElement('div');
        summaryDiv.classList = 'col-md-6';
        //create summary box
        var summary = document.createElement('textarea');
        summary.classList ='form-control mt-3';
        summary.setAttribute('name', 'jobsummary');
        summary.setAttribute('id', `jobsummary${i}`);
        if(jobs[i].summary === '') {
            summary.setAttribute('placeholder', 'Job Summary');
        } else {
            summary.value = jobs[i].summary;
        }
        summary.setAttribute('cols', '51');
        summary.setAttribute('rows', '5')
        //add summary to col div then to row
        summaryDiv.appendChild(summary);
        secondRow.appendChild(summaryDiv);
        //create col to hold start and end dates
        var datesDiv = document.createElement('div');
        datesDiv.classList = 'col-md-3';
        //create start date
        var sdateLabel = document.createElement('label');
        sdateLabel.setAttribute('for', 'startdateinputfield');
        var sdate = document.createElement('input');
        sdate.classList = 'form-control';
        sdate.setAttribute('type', 'date');
        sdate.setAttribute('id', 'startdateinputfield');
        if(jobs[i].startDate !== '') {
            sdate.value = jobs[i].startDate;
        }
        //add label and input to col div
        datesDiv.appendChild(sdateLabel);
        datesDiv.appendChild(sdate);
        secondRow.appendChild(datesDiv);
        //create col for end date and add button
        var edatecol = document.createElement('div');
        edatecol.classList = 'col-md-3';
        //create label, input, and button
        var edatelabel = document.createElement('label');
        edatelabel.setAttribute('for', 'enddateinputfield');
        var edate = document.createElement('input');
        edate.classList = 'form-control';
        edate.setAttribute('type', 'date');
        edate.setAttribute('id', 'enddateinputfield');
        if(jobs[i].endDate !== '') {
            edate.value = jobs[i].edate;
        }
        var buttondiv = document.createElement('div');
        buttondiv.classList = 'row mt-3';
        var newjobbutton = document.createElement('button');
        newjobbutton.classList = 'btn btn-primary';
        newjobbutton.setAttribute('type', 'button');
        newjobbutton.setAttribute('id', 'addjobbtn');
        newjobbutton.textContent = 'Add Another Job';
        //add button to button div
        buttondiv.appendChild(newjobbutton);
        //add label, enddate input and button div to col div
        edatecol.appendChild(edatelabel);
        edatecol.appendChild(edate);
        if(i + 1 === jobsLen) {

            edatecol.appendChild(buttondiv);
            newjobbutton.addEventListener('click', addJobs);
        }
        //add end date to second row
        secondRow.appendChild(edatecol);
        //add elements to job section
        jobdiv.appendChild(titleDiv);
        jobdiv.appendChild(jobInfo);
        jobdiv.appendChild(secondRow);
        // add an hr for looks
        var anHr = document.createElement('hr');
        jobdiv.appendChild(anHr);
        jobSection.appendChild(jobdiv);

        jobdiv.addEventListener('change', function(e) {
            e.preventDefault();
            editJob(i, jobTitle.value.trim(), companyName.value.trim(), summary.value.trim(), sdate.value.trim(), edate.value.trim());
        })
    }
    
}

async function createResume() {
    const address = document.querySelector('#address-2').value.trim();
    const fullName = document.querySelector('#full-name').value.trim();
    const addressLineTwo = document.querySelector('#address-2').value.trim();
    const city = document.querySelector('#city').value.trim();
    const state = document.querySelector('#state').value.trim();
    const zip = document.querySelector('#zip').value.trim();
    const phone = document.querySelector('#number').value.trim();
    const email = document.querySelector('#email').value.trim();
    const curJob = document.querySelector('#notworkingbox');
    const currentjob = [];
    if(curJob.checked === true) {
        const cJobtitle = document.querySelector('#currentjobtitle');
        const cjobcompany = document.querySelector('#currentjobcompany');
        const cjobdescription = document.querySelector("#currentjobdescription");
        const cjobstartdate = document.querySelector('#dateinputfield');
        currentjob.push(cjobcompany, cJobtitle, cjobdescription, cjobstartdate)
    }
    const response = await fetch('/create', {
        method: 'POST',
        body: JSON.stringify({
            fullName,
            address,
            city,
            state,
            addressLineTwo,
            zip,
            phone,
            email,
            currentjob,
            jobs,
            education,
            skills
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(response.ok) {
        console.log('sent it.')
        const downloadlink = document.createElement('a');
        downloadlink.setAttribute('href', '#');
        downloadlink.setAttribute('download', 'downloadedresume.docx');
        downloadlink.textContent = 'Download Resume'
        //downloadlink.style.display = 'none';
        const createArea = document.querySelector('#createArea');
        createArea.appendChild(downloadlink);
    }
};

addJobs();
addSkill();
addEd();
document.getElementById("createbtn").addEventListener("click", createResume);
var checkbox = document.querySelector("#notworkingbox");
checkbox.addEventListener("change", function() {
    if(this.checked) {
        var curjobSec = document.querySelector("#currentjobsect");
        curjobSec.innerHTML = "";
    }
    else {
        var curjobSec = document.querySelector("#currentjobsect");
        curjobSec.innerHTML = 
        '<div class="row">'+
            '<div class="col-md-6 mb-3">'+
                '<input type="text" name="currentjobtitle" id="currentjobtitle" class="form-control" placeholder="Job Title">'+
            '</div>'+
            '<div class="col-md-6">'+
                '<input type="text" name="currentjobcompany" id="currentjobcompany" class="form-control" placeholder="Company">'+
           '</div>'+
        '</div>'+
        '<div class="row">'+
            '<div class=" col-md-6">'+
                '<textarea name="jobdescription" id="currentjobdescription" cols="51" rows="5" placeholder="Job Summary" class="form-control mt-3"></textarea>'+
            '</div>'+
            '<div class="col-md-3 form-check">'+
                '<label for="dateinputfield">Start Date</label>'+
                '<input type="date" id="dateinputfield" class="form-control">'+
            '</div>'+
        '</div>'
    };
});