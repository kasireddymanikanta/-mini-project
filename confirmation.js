window.onload = function() {
   
    document.getElementById("confirmName").textContent = localStorage.getItem("bookingName");
    document.getElementById("confirmGender").textContent = localStorage.getItem("bookingGender");
    document.getElementById("confirmEmail").textContent = localStorage.getItem("bookingEmail");
    document.getElementById("confirmDate").textContent = localStorage.getItem("bookingDate");
    document.getElementById("confirmFrom").textContent = localStorage.getItem("bookingFrom");
    document.getElementById("confirmTo").textContent = localStorage.getItem("bookingTo");
    document.getElementById("confirmClass").textContent = localStorage.getItem("bookingClass");
    document.getElementById("confirmSeats").textContent = localStorage.getItem("bookingSeats");
    document.getElementById("confirmPayment").textContent = localStorage.getItem("bookingPayment");
};
