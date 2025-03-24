// Contact Form Handling
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("responseMessage").innerText = "Thank you, " + name + "! We’ll get back to you soon.";
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("responseMessage").innerText = "Please fill in all fields.";
    }
});

// Financial Calculator Function
function calculateSavings() {
    let income = parseFloat(document.getElementById("income").value);
    let expenses = parseFloat(document.getElementById("expenses").value);

    if (!isNaN(income) && !isNaN(expenses)) {
        let savings = income - expenses;
        document.getElementById("result").innerText = `Your estimated savings: $${savings}`;
    } else {
        document.getElementById("result").innerText = "Please enter valid numbers.";
    }
}
