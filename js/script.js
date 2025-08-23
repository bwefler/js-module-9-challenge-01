// invite button
const addGuestButton = document.querySelector(".invite"); // --- 1 --- //
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label"); // --- 2 --- //
// text input box
const guestInput = document.querySelector(".add-guest input"); // --- 3 --- //
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list"); // --- 4 --- //
// span class for number of guests attending
const guestCount = document.querySelector(".attendance"); // --- 5 --- //
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert"); // --- 6 --- //

// event listener for the addGuestButton variable
addGuestButton.addEventListener("click", function() {
    // Capture the value entered in guestInput
    const guest = guestInput.value;
    // console.log(`Guest: ${guest}`);

    // If guest is not an empty string, add to guest list
    if (guest !== "") {
        addToList(guest);
        clearInput();
        updateGuestCount();
    }
});

// Clear the input box
const clearInput = function () {
    guestInput.value = "";
}

// Add guest to the list
const addToList = function (guest) {
    let listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
}

const updateGuestCount = function () {
    let guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;

    // Limit number of guests to 8
    if (guests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");

        guestFull.classList.remove("hide");
    }

}