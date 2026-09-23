function generateResume() {

    // Get values from input fields
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    let education = document.getElementById("education").value;
    let skills = document.getElementById("skills").value;
    let projects = document.getElementById("projects").value;
    let experience = document.getElementById("experience").value;

    // Display data in resume
    document.getElementById("rName").innerText =
        name || "Your Name";

    document.getElementById("rContact").innerText =
        `${email || "Email"} | ${phone || "Phone"} | ${address || "Address"}`;

    document.getElementById("rEducation").innerText =
        education || "Your education details";

    document.getElementById("rSkills").innerText =
        skills || "Your skills";

    document.getElementById("rProjects").innerText =
        projects || "Your projects";

    document.getElementById("rExperience").innerText =
        experience || "Your experience";


}