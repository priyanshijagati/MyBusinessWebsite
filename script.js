document.addEventListener('DOMContentLoaded', function () {
    const clickableImages = document.querySelectorAll('.clickable-image');

    clickableImages.forEach(function (clickableImage) {
        clickableImage.addEventListener('click', function () {
            const overlay = clickableImage.cloneNode(true);
            overlay.classList.add('overlay');
            document.body.appendChild(overlay);
            overlay.addEventListener('click', function (event) {
                if (event.target === overlay) {
                    overlay.remove();
                }
            });
        });
    });
});
