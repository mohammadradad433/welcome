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
        let profitsBeforeTaxes = parseFloat(document.getElementById('profits-before-taxes').value);
        let currentLiabilities = parseFloat(document.getElementById('current-liabilities').value);
        let currentAssets = parseFloat(document.getElementById('current-assets').value);
        let requests = parseFloat(document.getElementById('requests').value);
        let collectionOfDeposits = parseFloat(document.getElementById('collection-of-deposits').value);
        let internalTransferMargin = parseFloat(document.getElementById('internal-transfer-margin').value);
        let dailyOperationalExpenses = parseFloat(document.getElementById('daily-operational-expenses').value);
        let x1,x2,x3,x4;

        if (
            isNaN(profitsBeforeTaxes) ||
            isNaN(currentLiabilities) ||
            isNaN(currentAssets) ||
            isNaN(requests) ||
            isNaN(collectionOfDeposits) ||
            isNaN(internalTransferMargin) ||
            isNaN(dailyOperationalExpenses)
            ) {
            Toast.fire({
                icon: "error",
                title: "يرجى إدخال أرقام صحيحة في جميع الحقول."
            });
            return;
        }


        if (currentLiabilities == 0) {
            Toast.fire({
                icon: "error",
                title: "Invalid input."
            });
            return;
        } else {
            x1 = profitsBeforeTaxes / currentLiabilities;
        }

        if (requests == 0) {
            Toast.fire({
                icon: "error",
                title: "Invalid input."
            });
            return;
        } else {
            x2 = currentAssets / requests;
        }

        if (collectionOfDeposits == 0) {
            Toast.fire({
                icon: "error",
                title: "Invalid input."
            });
            return;
        } else {
            x3 = profitsBeforeTaxes / collectionOfDeposits;
        }

        if (dailyOperationalExpenses == 0) {
            Toast.fire({
                icon: "error",
                title: "Invalid input."
            });
            return;
        } else {
            x4 = internalTransferMargin / dailyOperationalExpenses;
        }

        let z = (0.53 * x1) + (0.13 * x2) + (0.18 * x3) + (0.16 * x4);

        if (z >= 0.3) {
            Toast.fire({
                icon: "success",
                title: "الشركة في حالة مالية جيدة وقادرة على الاستمرار. احتمالية الإفلاس غير موجودة، والمركز المالي قوي. يمكنك الاطمئنان إلى أن الشركة تسير في الاتجاه الصحيح، ولا توجد مخاطر حالياً تهدد استدامتها المالية"
              });
        } else if (z <= 0.2) {
            Toast.fire({
                icon: "error",
                title: "الشركة تواجه خطرًا كبيرًا من الإفلاس. وفقًا للقيم الحالية، هناك احتمال مرتفع لتعرض الشركة للضائقة المالية. يجب اتخاذ إجراءات عاجلة لتقييم الوضع المالي واتخاذ تدابير لتحسين السيولة وتقليل المخاطر. يُنصح بإجراء مراجعة مالية شاملة ورفع التحذيرات للمسؤولين عن إدارة الشركة"
              });
        } else {
            Toast.fire({
                icon: "warning",
                title: "الشركة في منطقة غير واضحة من حيث الاستدامة المالية. القيم الحالية تشير إلى وضع مالي يحتاج إلى دراسة وتقييم أكثر تفصيلًا. من الصعب تحديد ما إذا كانت الشركة معرضة لخطر الإفلاس أو لا. يُنصح بإجراء تحليل شامل للوضع المالي من خلال مراجعة دقيقة للمؤشرات المالية الأخرى"
              });
        }
    } catch (error) {
        Toast.fire({
            icon: "error",
            title: "Format Error.."
          });
    }
});

document.getElementById('back-home').addEventListener('click', function() {
    window.location.href = 'Home.html'; 
});
