document.getElementById('click-me').addEventListener('click', function() {
    const newButton = document.createElement('button');
    newButton.textContent = 'New Button';
    newButton.addEventListener('mouseenter', function() {
        newButton.style.display = 'none';
    })
    document.body.appendChild(newButton);
});

document.getElementById('click-me').addEventListener('dblclick', function() {
    document.body.style.backgroundColor = '#FFFF00';
});