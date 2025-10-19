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
            title: "الشركة في حالة مالية جيدة وقادرة على الاستمرار. احتمالية الإفلاس غير موجودة، والمركز المالي قوي. يمكنك الاطمئنان إلى أن الشركة تسير في الاتجاه الصحيح، ولا توجد مخاطر حالياً تهدد استدامتها المالية"
          });
    } else if (z < 2.99 && z > 1.81) {
        Toast.fire({
            icon: "warning",
            title: "الشركة في منطقة غير واضحة من حيث الاستدامة المالية. القيم الحالية تشير إلى وضع مالي يحتاج إلى دراسة وتقييم أكثر تفصيلًا. من الصعب تحديد ما إذا كانت الشركة معرضة لخطر الإفلاس أو لا. يُنصح بإجراء تحليل شامل للوضع المالي من خلال مراجعة دقيقة للمؤشرات المالية الأخرى"
          });
    } else {
        Toast.fire({
            icon: "error",
            title: "الشركة تواجه خطرًا كبيرًا من الإفلاس. وفقًا للقيم الحالية، هناك احتمال مرتفع لتعرض الشركة للضائقة المالية. يجب اتخاذ إجراءات عاجلة لتقييم الوضع المالي واتخاذ تدابير لتحسين السيولة وتقليل المخاطر. يُنصح بإجراء مراجعة مالية شاملة ورفع التحذيرات للمسؤولين عن إدارة الشركة"
          });
    }
}