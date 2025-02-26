const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
function openAltman() {
    window.location.href="Altman.html";
}

function openKIDA() {
    window.location.href="KIDA.html";
}

function openTaffler() {
    window.location.href="Taffler.html";
}

function exitApp() {
    if (confirm("Are you sure you want to exit?")) {
        Toast.fire({
            icon: "success",
            title: "Signed in successfully"
          });
        window.close();
    }
}