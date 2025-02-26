const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 10000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

document.getElementById('find-z').addEventListener('click', function() {
    try {
        const profitsBeforeTaxes = parseFloat(document.getElementById('profits-before-taxes').value);
        const currentLiabilities = parseFloat(document.getElementById('current-liabilities').value);
        const currentAssets = parseFloat(document.getElementById('current-assets').value);
        const requests = parseFloat(document.getElementById('requests').value);
        const collectionOfDeposits = parseFloat(document.getElementById('collection-of-deposits').value);
        const internalTransferMargin = parseFloat(document.getElementById('internal-transfer-margin').value);
        const dailyOperationalExpenses = parseFloat(document.getElementById('daily-operational-expenses').value);
        
        const x1 = profitsBeforeTaxes / currentLiabilities;
        const x2 = currentAssets / requests;
        const x3 = profitsBeforeTaxes / collectionOfDeposits;
        const x4 = internalTransferMargin / dailyOperationalExpenses;

        const z = (0.53 * x1) + (0.13 * x2) + (0.18 * x3) + (0.16 * x4);

        if (z >= 0.3) {
            alert("Green region");
        } else if (z <= 0.2) {
            alert("Red region");
        } else {
            alert("No Classification");
        }
    } catch (error) {
        alert("Format Error");
    }
});

document.getElementById('back-home').addEventListener('click', function() {
    // Implement back to home functionality, like navigating to a different page
    window.location.href = 'Home.html'; // For example, replace with the actual home URL
});
