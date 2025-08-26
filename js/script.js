// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

// (Appears when the guest list is full)
const assignButton = document.querySelector(".assign");
// Targets the list that will populate with the guest’s name and their assigned dish
const assignedItems = document.querySelector(".assigned-items");

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
    // console.log(`${guest} is a guest.`);
    let listItem = document.createElement("li");
    listItem.innerText = guest;
    // console.log(`${listItem.innerText} is a guest.`);
    guestList.append(listItem);
    // console.log(`${guestList.outerHTML}`);
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

const assignItems = function () {
    const potluckItems = ["chicken", "potato salad", "pasta",
        "tortilla chips", "salsa", "chili", "mixed fruit",
        "ambrosia", "cookies", "apple pie", "pizza", "sodas"
    ]

    // Select elements
    const allGuests = document.querySelectorAll(".guest-list li");
    // console.log(allGuests.outerHTML);

    // Loop through the array and assign dishes
    for (let guest of allGuests) {
        let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
        let randomPotluckItem = potluckItems[randomPotluckIndex];
        let listItem = document.createElement("li");
        listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
        // console.log(listItem.innerText);
        assignedItems.append(listItem);

        // Clear item from list so it doesn't get reassigned
        potluckItems.splice(randomPotluckIndex, 1);
    }
}

// Add an event listener
assignButton.addEventListener("click", function () {
    // Update potluckItems array
    assignItems();

    // Disable button after dishes have been assigned to prevent another dish assignment
    assignButton.disabled = true;
});