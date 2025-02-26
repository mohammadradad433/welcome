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
        const postWarGoals = parseFloat(document.getElementById('post-war-goals').value);
        const collectionOfDeposit = parseFloat(document.getElementById('collection-of-deposit').value);
        const reservesAndFunds = parseFloat(document.getElementById('reserves-and-funds').value);
        const collectionOfLoans = parseFloat(document.getElementById('collection-of-loans').value);
        const cashDeposit = parseFloat(document.getElementById('cash-deposit').value);
        const bankedSums = parseFloat(document.getElementById('banked-sums').value);
        const sales = parseFloat(document.getElementById('sales').value);
        
        const x1 = postWarGoals / collectionOfDeposit;
        const x2 = reservesAndFunds / collectionOfLoans;
        const x3 = cashDeposit / bankedSums;
        const x4 = sales / collectionOfDeposit;
        const x5 = cashDeposit / collectionOfDeposit;
        
        const z = (1.042 * x1) + (0.42 * x2) - (0.461 * x3) - (0.463 * x4) - (0.271 * x5);

        if (z >= 0) {
            Toast.fire({
                icon: "success",
                title: "The company is performing well and is unlikely to go bankrupt."
              });
        } else {
            Toast.fire({
                icon: "error",
                title: "RED REGION."
              });
        }
    } catch (error) {
        Toast.fire({
            icon: "error",
            title: "Error..."
          });
    }
});

document.getElementById('back-home').addEventListener('click', function() {
    window.location.href = 'Home.html'; 
});
