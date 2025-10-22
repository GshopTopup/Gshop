document.getElementById('rec').style.display = 'none';
document.getElementById('uid').style.display = 'none';
document.getElementById('pmnt').style.display = 'none';

document.getElementById('continue').addEventListener('click', function(event) {
    event.preventDefault();

    // Hide all the <p> tags under the 'alt' div
    document.getElementById('rec').style.display = 'none';
    document.getElementById('uid').style.display = 'none';
    document.getElementById('pmnt').style.display = 'none';

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
      document.getElementById('uid').style.display = 'block';
      return;
    }

    // Display different alerts based on the section that is not selected
    if (!amountSelected) {
      document.getElementById('rec').style.display = 'block';
    } else if (!paymentSelected) {
      document.getElementById('pmnt').style.display = 'block';
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