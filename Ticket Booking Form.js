
const processBooking = () => {
    const name = document.getElementById("name").value.trim();
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const from = document.getElementById("from").value.trim();
    const to = document.getElementById("to").value.trim();
    const travelClass = document.getElementById("class").value;
    const seats = document.getElementById("seats").value;
    const payment = document.getElementById("payment").value;

    if (name === "" || gender === "" || email === "" || date === "" || from === "" || to === "" || travelClass === "" || seats === "" || payment === "") {
        alert("Please fill out all fields.");
        return false;
    }

    
    localStorage.setItem("bookingName", name);
    localStorage.setItem("bookingGender", gender);
    localStorage.setItem("bookingEmail", email);
    localStorage.setItem("bookingDate", date);
    localStorage.setItem("bookingFrom", from);
    localStorage.setItem("bookingTo", to);
    localStorage.setItem("bookingClass", travelClass);
    localStorage.setItem("bookingSeats", seats);
    localStorage.setItem("bookingPayment", payment);

    
    window.location.href = "confirmation.html";

    return false;  
};
