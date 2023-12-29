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

            if (currentLength === 0) {
                const prevInput = input.previousElementSibling;
                if (prevInput) {
                    prevInput.focus();
                }
            }
        }
