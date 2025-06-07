document.addEventListener("DOMContentLoaded", function () {
    fetch("/api/data")
        .then(response => response.json())
        .then(data => {
            const airCtx = document.getElementById('airChart').getContext('2d');
            new Chart(airCtx, {
                type: 'line',
                data: {
                    labels: Object.keys(data.air_quality),
                    datasets: [{
                        label: 'Air Quality Index (AQI)',
                        data: Object.values(data.air_quality),
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 2
                    }]
                }
            });
        }
    )        
            const crimeCtx = document.getElementById('crimeChart').getContext('2d');
            new Chart(crimeCtx, {
                type: 'bar',
                data: {
                    labels: Object.keys(data.crime_rate),
                    datasets: [{
                        label: 'Crime Incidents',
                        data: Object.values(data.crime_rate),
                        backgroundColor: 'rgba(54, 162, 235, 0.6)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                }
            });
        });
