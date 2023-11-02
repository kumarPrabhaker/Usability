        // JavaScript function to handle a button click
        function handleButtonClick() {
            alert("Button clicked!");
        }

        // Add an event listener to a button element
        const button = document.querySelector(".primary-button");
        if (button) {
            button.addEventListener("click", handleButtonClick);
        }
