document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.getElementById('dropdownButton');
    const colorDropdown = document.getElementById('colorDropdown');
    const selectedColor = document.getElementById('selectedColor');

    dropdownButton.addEventListener('click', function () {
        const computedStyle = getComputedStyle(colorDropdown);

        if (computedStyle.display === 'none' || computedStyle.opacity === '0') {
            colorDropdown.style.display = 'block';
            setTimeout(() => {
                colorDropdown.style.opacity = '1';
                colorDropdown.style.transform = 'translateY(0)';
            }, 10);
        } else {
            colorDropdown.style.opacity = '0';
            colorDropdown.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                colorDropdown.style.display = 'none';
            }, 300);
        }
    });

    function submitColor(color) {
        selectedColor.textContent = 'Selected Color: ' + color;
        colorDropdown.style.opacity = '0';
        colorDropdown.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            colorDropdown.style.display = 'none';
        }, 300);
    }    
});
