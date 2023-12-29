//your JS code here. If required.
 function focusNext(input) {
            const maxLength = parseInt(input.getAttribute('maxlength'));
            const currentLength = input.value.length;

            if (currentLength >= maxLength) {
                const nextInput = input.nextElementSibling;
                if (nextInput) {
                    nextInput.focus();
                }
            }
        }

        function focusPrevious(input) {
            if (event.key === "Backspace" && input.value.length === 0) {
                const prevInput = input.previousElementSibling;
                if (prevInput) {
                    prevInput.focus();
                }
            }
        }
