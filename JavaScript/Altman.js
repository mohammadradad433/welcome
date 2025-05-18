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

function calculateZ() {
    let incomestatement = parseFloat(document.getElementById("Incomestatment").value);
    let totalCapital = parseFloat(document.getElementById("totalCapital").value);
    let fixedAssets = parseFloat(document.getElementById("fixedAssets").value);
    let totalCurrentAssets = parseFloat(document.getElementById("totalCurrentAssets").value);
    let profitBeforeInterest = parseFloat(document.getElementById("profitBeforeInterest").value);
    let longTermLiabilities = parseFloat(document.getElementById("longTermLiabilities").value);
    let totalLiabilities = parseFloat(document.getElementById("totalLiabilities").value);
    let salesRevenue = parseFloat(document.getElementById("salesRevenue").value);
    
    if (isNaN(incomestatement) ||isNaN(totalCapital) || isNaN(fixedAssets) || isNaN(totalCurrentAssets) || isNaN(profitBeforeInterest) || 
        isNaN(longTermLiabilities) || isNaN(totalLiabilities) || isNaN(salesRevenue)) {
          Toast.fire({
            icon: "error",
            title: "Please enter valid numbers in all fields."
          });
        return;
    }
    let x1,x2,x3,x4,x5;
    if (totalCapital == 0) {
        Toast.fire({
            icon: "error",
            title: "Invalid input."
        });
        return;
    } else {
         x1 = incomestatement / totalCapital;
    }

    if (totalCurrentAssets == 0) {
        Toast.fire({
            icon: "error",
            title: "Invalid input."
        });
        return;

    } else {
         x2 = fixedAssets / totalCurrentAssets;
    }

    if (totalCapital == 0) {
        Toast.fire({
            icon: "error",
            title: "Invalid input."
        });
        return;
    } else {
         x3 = profitBeforeInterest /totalCapital ;
    }
    if (totalLiabilities == 0) {
        Toast.fire({
            icon: "error",
            title: "Invalid input."
        });
        return;
    } else {
         x4 =  longTermLiabilities/totalLiabilities ;
    }
    if (totalCapital == 0) {
        Toast.fire({
            icon: "error",
            title: "Invalid input."
        });
        return;
    } else {
         x5 = salesRevenue /totalCapital ;
    }

    let z = (1.2 * x1) + (1.4 * x2) + (3.3 * x3) + (0.6 * x4) + (0.999 * x5);
    
    if (z >= 2.99) {
        Toast.fire({
            icon: "success",
            title: "The company is performing well and is unlikely to go bankrupt."
          });
    } else if (z < 2.99 && z > 1.81) {
        Toast.fire({
            icon: "warning",
            title: "The company is in the gray area."
          });
    } else {
        Toast.fire({
            icon: "error",
            title: "The company is at risk of financial distress."
          });
    }
}