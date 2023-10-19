document.getElementById('continue').addEventListener('click', function(event) {
    event.preventDefault();

    // Check if an amount option is selected in the 'amount' section
    var amountInputs = document.querySelectorAll('input[name="amount"]');
    var amountSelected = false;
    for (var i = 0; i < amountInputs.length; i++) {
      if (amountInputs[i].checked) {
        amountSelected = true;
        break;
      }
    }

    // Check if a payment method is selected in the 'logo2' section
    var paymentInputs = document.querySelectorAll('input[name="payment"]');
    var paymentSelected = false;
    var selectedPaymentValue = null;
    for (var i = 0; i < paymentInputs.length; i++) {
      if (paymentInputs[i].checked) {
        paymentSelected = true;
        selectedPaymentValue = paymentInputs[i].value;
        break;
      }
    }

    // Check if the player ID (UID) is filled
    var playerIdInput = document.getElementById('in');
    if (playerIdInput.value.trim() === '') {
      alert('Player ID (UID) is not filled.');
      return;
    }

    // Display different alerts based on the section that is not selected
    if (!amountSelected && !paymentSelected) {
      alert('Please select all options.');
    } else if (!amountSelected) {
      alert('Select a recharge.');
    } else if (!paymentSelected) {
      alert('Select Bkash or Nagad');
    } else {
      // Proceed to the next step if both conditions are met
      if (selectedPaymentValue === 'bk') {
        window.open('Bkash-pay.html', '_blank');
      } else if (selectedPaymentValue === 'ng') {
        window.open('Nagad-pay.html', '_blank');
      } else {
        alert('Invalid payment selection');
      }
    }
  });
