function submitQuery() {
    var query = document.getElementById("sqlQuery").value;
    var question = document.getElementById("question").value;

    // Make AJAX request to the backend to get plot data
    fetch("/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ "query": query, "question": question }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        displayPlot(data.plot_div);
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error occurred. Please try again.");
    });
}

function displayPlot(plotDiv) {
    document.getElementById("plotDiv").innerHTML = plotDiv;
}
