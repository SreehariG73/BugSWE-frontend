// Function to fetch data from API
async function fetchData() {
    try {
        const response = await fetch('your_api_endpoint_here');
        const data = await response.json();
        
        // Sample data
        /*const data = {
            "chartData": {
              "skillData": {
                "HTML/CSS": 20,
                "JavaScript": 30,
                "Python": 25,
                "Java": 15,
                "SQL": 10
              },
              "stateData": {
                "New York": 20,
                "California": 30,
                "Texas": 25,
                "Florida": 15,
                "Other": 34
              },
              "experienceData": {
                "0-1 years": 10,
                "1-3 years": 20,
                "3-5 years": 30,
                "5-10 years": 25,
                "10+ years": 15
              },
              "jobRolesData": {
                "Software Engineer": 25,
                "Data Analyst": 20,
                "Web Developer": 30,
                "Product Manager": 15,
                "Other": 10
              }
            }
          }*/
        
        return data.chartData; // Assuming chartData is the key containing the pie chart data
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// Generate pie chart function
async function generatePieCharts() {
    const chartData = await fetchData();
    if (chartData) {
        generatePieChart('skillChart', chartData.skillData, 'Skills');
        generatePieChart('stateChart', chartData.stateData, 'State');
        generatePieChart('experienceChart', chartData.experienceData, 'Experience');
        generatePieChart('jobRolesChart', chartData.jobRolesData, 'Job Roles');
    }
}

// Generate pie chart function
function generatePieChart(canvasId, data, title) {
    const ctx = document.getElementById(canvasId).getContext('2d');

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(data),
            datasets: [{
                label: title,
                data: Object.values(data),
                backgroundColor: [
                    '#4CAF50',
                    '#2196F3',
                    '#FFC107',
                    '#FF5722',
                    '#9C27B0'
                ]
            }]
        },
        options: {
            title: {
                display: true,
                text: title,
                fontSize: 16,
                fontColor: 'white'
            },
            legend: {
                position: 'right',
                labels: {
                    fontColor: 'white' // Set legend text color to white
                }
            }
        }
    });
}

// Call function to generate pie charts
generatePieCharts();