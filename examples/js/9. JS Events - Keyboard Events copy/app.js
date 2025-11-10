document.getElementById('name').addEventListener('keyup', function(event) {
    document.getElementById('reversed-name').textContent = event.target.value.split('').reverse().join('');
})