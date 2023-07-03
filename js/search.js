const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

// Candidates data
var candidates = [
    { "name": "John Doe", "job_role": "Software Engineer", "location": "New York" },
    { "name": "Jane Smith", "job_role": "Data Analyst", "location": "San Francisco" },
    { "name": "Alice Johnson", "job_role": "Project Manager", "location": "Chicago" },
    { "name": "Robert Williams", "job_role": "Software Engineer", "location": "Los Angeles" },
    { "name": "Emily Brown", "job_role": "Software Engineer", "location": "Seattle" },
    { "name": "Michael Johnson", "job_role": "Data Analyst", "location": "New York" },
    { "name": "Jessica Davis", "job_role": "Data Analyst", "location": "San Francisco" },
    { "name": "Daniel Wilson", "job_role": "Data Analyst", "location": "Chicago" },
    { "name": "Olivia Miller", "job_role": "Project Manager", "location": "Los Angeles" },
    { "name": "William Taylor", "job_role": "Project Manager", "location": "Seattle" },
    { "name": "David Brown", "job_role": "Software Engineer", "location": "Chicago" },
    { "name": "Sarah Johnson", "job_role": "Data Analyst", "location": "New York" },
    { "name": "Andrew Wilson", "job_role": "Project Manager", "location": "San Francisco" },
    { "name": "Jennifer Davis", "job_role": "Software Engineer", "location": "Los Angeles" },
    { "name": "Michael Smith", "job_role": "Data Analyst", "location": "Seattle" },
    { "name": "Emma Taylor", "job_role": "Project Manager", "location": "New York" },
    { "name": "Matthew Anderson", "job_role": "Business Analyst", "location": "Chicago" },
    { "name": "Sophia Wilson", "job_role": "Software Engineer", "location": "San Francisco" },
    { "name": "James Martin", "job_role": "Data Analyst", "location": "New York" },
    { "name": "Isabella Thompson", "job_role": "Project Manager", "location": "Seattle" },
    { "name": "Ethan Harris", "job_role": "Software Engineer", "location": "Los Angeles" },
    { "name": "Ava White", "job_role": "Business Analyst", "location": "Chicago" },
    { "name": "Alexander Rodriguez", "job_role": "Data Analyst", "location": "San Francisco" },
    { "name": "Mia Lopez", "job_role": "Project Manager", "location": "New York" },
    { "name": "Jacob Lee", "job_role": "Software Engineer", "location": "Seattle" },
    { "name": "Charlotte Hill", "job_role": "Data Analyst", "location": "Los Angeles" },
    { "name": "Daniel Walker", "job_role": "Business Analyst", "location": "Chicago" },
    { "name": "Amelia Carter", "job_role": "Software Engineer", "location": "San Francisco" },
    { "name": "Matthew Reed", "job_role": "Project Manager", "location": "New York" },
    { "name": "Grace Phillips", "job_role": "Data Analyst", "location": "Seattle" },
    { "name": "Samuel Cooper", "job_role": "Software Engineer", "location": "Los Angeles" },
    { "name": "Ella Bennett", "job_role": "Business Analyst", "location": "Chicago" },
    { "name": "Christopher Bell", "job_role": "Data Analyst", "location": "San Francisco" },
    { "name": "Lily Foster", "job_role": "Project Manager", "location": "New York" },
    { "name": "Ryan Cox", "job_role": "Software Engineer", "location": "Seattle" },
    { "name": "Madison Simmons", "job_role": "Data Analyst", "location": "Los Angeles" },
    { "name": "Nathan Richardson", "job_role": "Business Analyst", "location": "Chicago" },
    { "name": "Avery Hayes", "job_role": "Software Engineer", "location": "San Francisco" },
    { "name": "Hannah Murphy", "job_role": "Project Manager", "location": "New York" },
    { "name": "David Rivera", "job_role": "Data Analyst", "location": "Seattle" },
    { "name": "Sofia Gonzales", "job_role": "Software Engineer", "location": "Los Angeles" },
    { "name": "Aiden Cooper", "job_role": "Business Analyst", "location": "Chicago" },
    { "name": "Victoria Parker", "job_role": "Data Analyst", "location": "San Francisco" },
    { "name": "Josephine Evans", "job_role": "Project Manager", "location": "New York" },
    { "name": "Henry Mitchell", "job_role": "Software Engineer", "location": "Seattle" },
    { "name": "Scarlett Coleman", "job_role": "Data Analyst", "location": "Los Angeles" },
    { "name": "Leo Wright", "job_role": "Business Analyst", "location": "Chicago" },
    { "name": "Abigail Morris", "job_role": "Software Engineer", "location": "San Francisco" },
    { "name": "Jonathan Adams", "job_role": "Project Manager", "location": "New York" },
    { "name": "Chloe Baker", "job_role": "Data Analyst", "location": "Seattle" },
    { "name": "Jack Perry", "job_role": "Software Engineer", "location": "Los Angeles" },
    { "name": "Mila Turner", "job_role": "Business Analyst", "location": "Chicago" },
    { "name": "Carter Howard", "job_role": "Data Analyst", "location": "San Francisco" },
    { "name": "Sophie Cox", "job_role": "Project Manager", "location": "New York" },
    // Add more candidates as needed
];

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("search");
const jobRoleSelect = document.getElementById("jobRole");
const locationSelect = document.getElementById("location");
const candidatesContainer = document.getElementById("candidates");

function displayCandidates(filteredCandidates) {
    candidatesContainer.innerHTML = "";

    if (filteredCandidates.length === 0) {
        const noResultsMessage = document.createElement("p");
        noResultsMessage.textContent = "No candidates found.";
        candidatesContainer.appendChild(noResultsMessage);
        return;
    }

    filteredCandidates.forEach(candidate => {
        const candidateCard = document.createElement("div");
        candidateCard.classList.add("candidate");

        const candidateName = document.createElement("h3");
        candidateName.textContent = `Name: ${candidate.name}`;

        const jobRole = document.createElement("p");
        jobRole.textContent = `Job Role: ${candidate.job_role}`;

        const location = document.createElement("p");
        location.textContent = `Location: ${candidate.location}`;

        const hireButton = document.createElement("button");
        hireButton.textContent = "Hire";
        hireButton.classList.add("hire-button");
        hireButton.addEventListener("click", () => {
            hireCandidate(candidate);
        });

        candidateCard.appendChild(candidateName);
        candidateCard.appendChild(jobRole);
        candidateCard.appendChild(location);
        candidateCard.appendChild(hireButton);
        candidatesContainer.appendChild(candidateCard);
    });
    candidatesContainer.classList.add("show");
}

function filterCandidates() {
    const searchQuery = searchInput.value.toLowerCase();
    const selectedJobRole = jobRoleSelect.value;
    const selectedLocation = locationSelect.value;

    const filteredCandidates = candidates.filter(candidate => {
        const nameMatch = candidate.name.toLowerCase().includes(searchQuery);
        const jobRoleMatch = selectedJobRole === "" || candidate.job_role === selectedJobRole;
        const locationMatch = selectedLocation === "" || candidate.location === selectedLocation;

        return nameMatch && jobRoleMatch && locationMatch;
    });

    displayCandidates(filteredCandidates);
}

function hireCandidate(candidate) {
    console.log(`Hired candidate: ${candidate.name}`);
}

searchBtn.addEventListener("click", filterCandidates);

// Display all candidates on page load
displayCandidates(candidates);



// // Function to filter candidates
// function filterCandidates() {
//     var selectedJobRole = document.getElementById("jobRole").value.toLowerCase();
//     var selectedLocation = document.getElementById("location").value.toLowerCase();
//     var searchName = document.getElementById("candidateName").value.toLowerCase();

//     var filteredCandidates = candidates.filter(function (candidate) {
//         if (selectedJobRole && selectedLocation && searchName) {
//             return (
//                 candidate.job_role.toLowerCase().includes(selectedJobRole) &&
//                 candidate.location.toLowerCase().includes(selectedLocation) &&
//                 candidate.name.toLowerCase().includes(searchName)
//             );
//         } else if (selectedJobRole && selectedLocation) {
//             return (
//                 candidate.job_role.toLowerCase().includes(selectedJobRole) &&
//                 candidate.location.toLowerCase().includes(selectedLocation)
//             );
//         } else if (selectedJobRole && searchName) {
//             return (
//                 candidate.job_role.toLowerCase().includes(selectedJobRole) &&
//                 candidate.name.toLowerCase().includes(searchName)
//             );
//         } else if (selectedLocation && searchName) {
//             return (
//                 candidate.location.toLowerCase().includes(selectedLocation) &&
//                 candidate.name.toLowerCase().includes(searchName)
//             );
//         } else if (selectedJobRole) {
//             return candidate.job_role.toLowerCase().includes(selectedJobRole);
//         } else if (selectedLocation) {
//             return candidate.location.toLowerCase().includes(selectedLocation);
//         } else if (searchName) {
//             return candidate.name.toLowerCase().includes(searchName);
//         } else {
//             return true;
//         }
//     });

//     displayCandidates(filteredCandidates);
// }


// function displayCandidates(candidates) {
//     var candidatesContainer = document.getElementById("candidates");
//     candidatesContainer.innerHTML = "";

//     if (candidates.length === 0) {
//         candidatesContainer.innerHTML = "<p>No matching candidates found.</p>";
//         return;
//     }

//     candidates.forEach(function (candidate) {
//         var candidateDiv = document.createElement("div");
//         candidateDiv.className = "candidate";
//         candidateDiv.innerHTML = candidate.name + " - " + candidate.job_role + " in " + candidate.location;
//         candidatesContainer.appendChild(candidateDiv);
//     });
// }
