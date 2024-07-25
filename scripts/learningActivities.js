document.addEventListener('DOMContentLoaded', () => {
    fetch('learningActivities.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const activitiesList = document.getElementById('learning-activities-list');
            data.activities.forEach(activity => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = activity.link;
                link.textContent = activity.week;
                listItem.appendChild(link);
                activitiesList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching learning activities:', error));
});
