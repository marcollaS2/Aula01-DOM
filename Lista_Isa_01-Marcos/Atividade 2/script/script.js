const bntBrown = document.getElementById('bntBrown');
const bntPurple = document.getElementById('bntPurple');
const bntPink = document.getElementById('bntPink');
const body = document.body;

bntBrown.addEventListener('click', function() {
    body.style.backgroundColor = 'brown';
});

bntPurple.addEventListener('click', function() {
    body.style.backgroundColor = 'purple';
});

bntPink.addEventListener('click', function() {
    body.style.backgroundColor = 'pink';
});
