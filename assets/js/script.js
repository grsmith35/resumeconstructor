console.log("It's working!");
let jobcounter = 2;
let educationcounter = 2;

var addJob = function() {
    var jobSection = document.querySelector("#pastjob");
    var newjobArea = document.createElement("div");
    newjobArea.innerHTML = 
    '<hr>'+
    '<h3>Work History #' + jobcounter + '</h3>' +
    '<div class="row">'+
    '<div class="col-md-6 input mb-3">'+
        '<input type="text" name="worktitle" id="pastjobtitle" class="form-control" placeholder="Job Title">'+
    '</div>'+
    '<div class="col-md-6">'+
        '<input type="text" name="workcompany" id="pastjobcompany" class="form-control" placeholder="Company">'+
    '</div>'+
'</div>'+
'<div class="row">'+
    '<div class=" col-md-6">'+
        '<textarea name="pastjobdescription" id="pastjobdescription" cols="51" rows="5" placeholder="Job Summary" class="form-control mt-3"></textarea>'+
    '</div>'+
    '<div class="col-md-3">'+
        '<label for="startdateinputfield">Start Date</label>'+
        '<input type="date" id="startdateinputfield" class="form-control">'+
    '</div>'+
    '<div class="col-md-3">'+
        '<label for="emddateinputfield">End Date</label>'+
        '<input type="date" id="enddateinputfield" class="form-control">'+
        '<div class="row mt-3">'+
            '<button type="button" id="addjobbtn" class="btn btn-primary">Add Another Job</button>'+
        '</div>'+
    '</div>'+
'</div>';
    jobcounter += 1;
    jobSection.appendChild(newjobArea);
    var jobbtnrmv = document.querySelector("#addjobbtn");
    jobbtnrmv.remove();
    document.getElementById("addjobbtn").addEventListener("click", addJob);
};

var addEducation = function() {
    var educationsect = document.querySelector("#education");
    var neweducationArea = document.createElement("div");
    neweducationArea.innerHTML = 
    '<hr>'+
    '<h3>Education #' + educationcounter + '</h3>' +
    '<div class="row mt-3">'+
        '<div class="col-md-3">'+
            '<label for="educationschool" class="form-label">Degree Earned</label>'+
        '</div>'+
        '<div class="col-md-6 form-check">'+
            '<input type="text" name="education" id="educationscool" class="form-control" placeholder="Degree Earned">'+
        '</div>'+
    '</div>'+
    '<div class="row mt-3">'+
        '<div class="col-md-3">'+
            '<label for="school" class="form-label">School</label>'+
        '</div>'+
        '<div class="col-md-6 form-check">'+
            '<input type="text" name="school" id="school" class="form-control" placeholder="School Name">'+
        '</div>'+
    '</div>'+
    '<div class="row mt-3">'+
        '<div class="col-md-3">'+
            '<label for="year" class="form-label">Year Earned</label>'+
        '</div>'+
        '<div class="col-md-6 form-check">'+
            '<input type="text" name="year" id="year" class="form-control" placeholder="Year Earned">'+
        '</div>'+
    '</div>'+
    '<div class="row m-3">'+
        '<div class="row">'+
            '<button type="button" class="btn btn-primary" id="addedubtn">Add Additional Education</button>'+
        '</div>'+
    '</div>';
    educationcounter += 1;
    educationsect.appendChild(neweducationArea);
    var edubtnrmv = document.querySelector("#addedubtn");
    edubtnrmv.remove();
    document.getElementById("addedubtn").addEventListener("click", addEducation);
}

var addSkill = function() {
    var skillsect = document.querySelector("#skillsarea");
    var newSkill = document.createElement("div");
    newSkill.innerHTML = 
    '<div class="row mt-3">'+
        '<div class="col-md-6">'+
            '<input type="text" name="skill" id="skill" class="form-control" placeholder="">'+
        '</div>'+
    '</div>';
    skillsect.appendChild(newSkill);
};

var createResume = function() {
    //start to get all the info from the form 
    console.log('created!');
};

document.getElementById("createbtn").addEventListener("click", createResume);
document.getElementById("addskillbtn").addEventListener("click", addSkill);
document.getElementById("addjobbtn").addEventListener("click", addJob);
document.getElementById("addedubtn").addEventListener("click", addEducation);
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