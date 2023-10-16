document.getElementById('vy').addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Check if at least one radio input is selected
    var radioInputs = document.querySelectorAll('input[name="amount"]');
    var selected = false;
    for (var i = 0; i < radioInputs.length; i++) {
      if (radioInputs[i].checked) {
        selected = true;
        break; // Exit the loop if a radio input is selected
      }
    }

    if (!selected) {
      alert('Please select a recharge');
      return; // Stop further execution if no radio input is selected
    }

    // Check if the Player ID input field is filled
    var playerIdInput = document.getElementById('in');
    var transactionIdInput = document.getElementById('re2');

    if (playerIdInput.value.trim() === '') {
      alert('Player ID (UID) Not Filled.');
      return; // Stop further execution if the Player ID input is empty
    }

    if (transactionIdInput.value.trim() === '') {
      alert('Transaction ID Not Filled.');
      return; // Stop further execution if the Transaction ID input is empty
    }
      // Redirect to a new page
      window.location.href = 'thank.html'; // Replace 'new_page.html' with your desired page URL
    }, 1000);