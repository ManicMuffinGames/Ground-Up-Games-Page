paneButtons = document.querySelectorAll('.toggle-text')

function toggleText(event) {
    button = event.target;

    if (button.nodeName == 'I') {
        container = button.parentNode.parentNode;
    }
    else {
        container = button.parentNode;
    }

    if (window.getComputedStyle(container).visibility == 'hidden') {
        Array.from(container.children).forEach(childObj => {
            childObj.style.position = 'relative';
        });

        container.style.position = 'relative';
        container.style.visibility = 'visible';

        if (button.nodeName == 'I') {
            button.className = 'fa fa-chevron-up'
        }
        else {

        }
    }
    else if (window.getComputedStyle(container).visibility == 'visible') {
        Array.from(container.children).forEach(childObj => {
            childObj.style.position = 'absolute';
            childObj.style.top = 0;
            childObj.style.left = 0;
        });

        container.style.position = 'relative';
        container.style.visibility = 'hidden';

        if (button.nodeName == 'I') {
            button.className = 'fa fa-chevron-down'
        }
        else {

        }
    }

    if (button.nodeName == 'I') {
        button.parentNode.style.visibility = 'visible';
        button.parentNode.style.position = 'relative';
    }
    else {
        button.style.visibility = 'visible';
        button.style.position = 'relative';
    }
}

paneButtons.forEach(button => {
    button.addEventListener('click', toggleText);
});