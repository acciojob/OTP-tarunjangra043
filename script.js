document.addEventListener('DOMContentLoaded', () => {
    const codes = document.querySelectorAll('.code');

    codes.forEach((code, index) => {
        code.addEventListener('input', (e) => {
            if (e.inputType === 'deleteContentBackward') {
                if (index > 0) {
                    codes[index - 1].focus();
                }
            } else {
                if (index < codes.length - 1) {
                    codes[index + 1].focus();
                }
            }
        });

        code.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !code.value) {
                if (index > 0) {
                    codes[index - 1].focus();
                }
            }
        });
    });
});
