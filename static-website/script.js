document.getElementById('changeContentBtn').addEventListener('click', function() {
    var contentSection = document.getElementById('contentSection');
    contentSection.innerHTML = '<p>Content changed! You clicked the button.</p>';
});
