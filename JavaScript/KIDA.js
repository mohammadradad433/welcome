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
        let postWarGoals = parseFloat(document.getElementById('post-war-goals').value);
        let collectionOfDeposit = parseFloat(document.getElementById('collection-of-deposit').value);
        let reservesAndFunds = parseFloat(document.getElementById('reserves-and-funds').value);
        let collectionOfLoans = parseFloat(document.getElementById('collection-of-loans').value);
        let cashDeposit = parseFloat(document.getElementById('cash-deposit').value);
        let bankedSums = parseFloat(document.getElementById('banked-sums').value);
        let sales = parseFloat(document.getElementById('sales').value);
        let x1,x2,x3,x4,x5;

        if (collectionOfDeposit == 0) {
            Toast.fire({
                icon: "error",
                title: "Invalid input."
            });
            return;
        } else {
            x1 = postWarGoals / collectionOfDeposit;
        }

        if (collectionOfLoans == 0) {
            Toast.fire({
                icon: "error",
                title: "Invalid input."
            });
            return;
        } else {
            x2 = reservesAndFunds / collectionOfLoans;
        }

        if (bankedSums == 0) {
            Toast.fire({
                icon: "error",
                title: "Invalid input."
            });
            return;
        } else {
            x3 = cashDeposit / bankedSums;
        }

        if (collectionOfDeposit == 0) {
            Toast.fire({
                icon: "error",
                title: "Invalid input."
            });
            return;
        } else {
            x4 = sales / collectionOfDeposit;
        }

        if (collectionOfDeposit == 0) {
            Toast.fire({
                icon: "error",
                title: "Invalid input."
            });
            return;
        } else {
            x5 = cashDeposit / collectionOfDeposit;
        }

        let z = (1.042 * x1) + (0.42 * x2) - (0.461 * x3) - (0.463 * x4) - (0.271 * x5);

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
