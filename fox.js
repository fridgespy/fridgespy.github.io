document.addEventListener('DOMContentLoaded', function() {
    var dropdownElements = document.getElementsByClassName('dropdown');
    var foxElement = document.getElementById('fox');

    for (var i = 0; i < dropdownElements.length; i++) {
        dropdownElements[i].addEventListener('mouseover', function() {
            foxElement.src = 'fox1.jpg';
        });

        dropdownElements[i].addEventListener('mouseout', function() {
            foxElement.src = 'fox2.jpg';
        });
    }
});
