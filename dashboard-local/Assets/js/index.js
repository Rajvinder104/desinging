document.querySelectorAll('.accordion-item details').forEach((details) => {
    details.addEventListener('click', function() {
        document.querySelectorAll('.accordion-item details[open]').forEach((openDetails) => {
            // Agar clicked element ke alawa koi aur details open hai toh usse close karenge
            if (openDetails !== details) {
                openDetails.removeAttribute('open');
            }
        });
    });
});
