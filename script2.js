// Fetch data from API
let completedTasks = 0;
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
    const todoList = document.getElementById('todoList');

    // Iterate through the fetched data
    data.forEach(item => {
      // Create table row
      const row = document.createElement('tr');
      // Create userid cell
      const userCell = document.createElement('td');
      userCell.innerText = item.id;
      row.appendChild(userCell);


      // Create title cell
      const taskCell = document.createElement('td');
      taskCell.innerText = item.title;
      row.appendChild(taskCell);

      // Create status cell with checkbox
      const statusCell = document.createElement('td');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = item.completed;
      statusCell.appendChild(checkbox);
      checkbox.addEventListener('change', function() {
        // Update the completed status when the checkbox changes
        item.completed = this.checked;
        if (this.checked) {
            completedTasks++;
        } else {
            completedTasks--;
        }

        if (completedTasks === 5) {
            alert(`Congrats. 5 Tasks have been Successfully Completed`);
        }
    });



      row.appendChild(statusCell);

      // Append row to table body
      todoList.appendChild(row);
    });
  })
  .catch(error => console.error(error));