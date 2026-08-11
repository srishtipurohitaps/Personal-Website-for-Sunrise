const foodButton = document.getElementById("foodButton");
const foodList = document.getElementById("foodList");

foodButton.addEventListener("click", function() {

    if (foodList.style.display === "block") {

        foodList.style.display = "none";
        foodButton.textContent = "My Favourite Foods";

    } else {

        foodList.style.display = "block";
        foodButton.textContent = "Hide My Favourite Foods";

    }

});