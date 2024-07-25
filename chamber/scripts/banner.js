document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('announcement-banner');
    const closeBanner = document.getElementById('close-banner');

    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    if (today >= 1 && today <= 3) {
        banner.style.display = 'block';
    }

    closeBanner.addEventListener('click', () => {
        banner.style.display = 'none';
    });
});