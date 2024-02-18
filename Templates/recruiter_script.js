document.getElementById("searchBtn").addEventListener("click", function() {
    // Retrieve filter values
    var jobRole = document.getElementById("jobRole").value;
    var experience = document.getElementById("experience").value;
    var state = document.getElementById("state").value;
    var skill = document.getElementById("skill").value;

    // Perform search (dummy example)
    var searchResults = performSearch(jobRole, experience, state, skill);

    // Display search results or show modal if no results
    if (searchResults.length > 0) {
        displayResults(searchResults);
    } else {
        showModal();
    }
});

function performSearch(jobRole, experience, state, skill) {
    // Dummy data
    var dummyResults = [
        { name: "Candidate 1", jobRole: "Software Engineer", experience: "5 years", state: "California", skills: ["JavaScript", "React", "Node.js"] },
        { name: "Candidate 2", jobRole: "Data Scientist", experience: "3 years", state: "New York", skills: ["Python", "Machine Learning", "Statistics"] }
    ];

    // To test when there is no result how the pop-up will look like!
    //var dummyResults = [];

    // Filtering based on selected criteria
    var filteredResults = dummyResults.filter(function(candidate) {
        return (jobRole === "" || candidate.jobRole === jobRole) &&
               (experience === "" || candidate.experience === experience) &&
               (state === "" || candidate.state === state) &&
               (skill === "" || candidate.skills.includes(skill));
    });

    return filteredResults;
}

function displayResults(results) {
    var resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = ""; // Clear previous results

    var table = document.createElement("table");
    table.classList.add("results-table");

    // Table header
    var headerRow = table.createTHead().insertRow();
    var headers = ["Name", "Job Role", "Experience", "State", "Skills"];
    headers.forEach(function(headerText) {
        var th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    // Table body
    var tbody = table.createTBody();
    results.forEach(function(candidate, index) {
        var row = tbody.insertRow();
        row.classList.add(index % 2 === 0 ? "even-row" : "odd-row"); // Add alternating row colors
        row.insertCell().textContent = candidate.name;
        row.insertCell().textContent = candidate.jobRole;
        row.insertCell().textContent = candidate.experience;
        row.insertCell().textContent = candidate.state;
        var skillsCell = row.insertCell();
        skillsCell.textContent = candidate.skills.join(", ");
    });

    resultsContainer.appendChild(table);
}

function showModal() {
    var modal = document.getElementById("myModal");
    var closeModal = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
