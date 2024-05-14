document.addEventListener("DOMContentLoaded", function() {
    const orderForm = document.getElementById("orderForm");

    orderForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(orderForm);
        const order = {};
        
        formData.forEach((value, key) => {
            order[key] = value;
        });

        console.log("Дані замовлення:", order);

        orderForm.reset();

    });
});