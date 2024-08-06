
// made so when you press "home","about", "contact us" it says link not work
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            alert('This link is currently not working');
        });
    });
 
    //made it when u hover over the big box on the right it becomes unblurry
    const p1Image = document.querySelector('.p1-image');
    p1Image.style.filter = 'blur(10px)';

    document.querySelector('.p1').addEventListener('mouseover', () => {
        p1Image.style.filter = 'blur(0)';
    });

    document.querySelector('.p1').addEventListener('mouseout', () => {
        p1Image.style.filter = 'blur(10px)';
    });
});
