document.getElementById('toggleButton').addEventListener('click', function() {
    const shareElement = document.querySelector('.share');
    
    if (shareElement.style.display === 'none' || shareElement.style.display === '') {
        shareElement.style.display = 'flex';
    } else {
        shareElement.style.display = 'none';
    }
});