const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	 const prices = document.querySelectorAll('.prices');
      let total = 0;

      // Loop through each price and sum the values
      prices.forEach(price => {
        total += parseFloat(price.textContent) || 0; // Convert text to a number and sum
      });

      // Create a new row to show the total price
      const table = document.getElementById('groceryTable');
      const newRow = document.createElement('tr');
      const totalCell = document.createElement('td');
      totalCell.setAttribute('colspan', 2); // Make the cell span across both columns

      totalCell.textContent = `Total Price: ₹${total}`; // Display the total price text
      newRow.appendChild(totalCell);

      // Append the new row with the total to the table
      table.appendChild(newRow);
    };
	
};

getSumBtn.addEventListener("click", getSum);

