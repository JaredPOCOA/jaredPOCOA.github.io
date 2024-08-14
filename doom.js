document.addEventListener('DOMContentLoaded', () => {
    const p1Image = document.querySelector('.p1-image');
    p1Image.style.filter = 'blur(10px)'

    document.querySelector('.p1').addEventListener('mouseover', () => {
        p1Image.style.filter = 'blur(0)'
    })

    document.querySelector('.p1').addEventListener('mouseout', () => {
        p1Image.style.filter = 'blur(10px)'
    })
})

function changeImage(element, direction) {
    const container = element.closest('.image-container');
    const images = container.querySelectorAll('.product-image');
    let activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'))
     images[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + direction + images.length) % images.length;
    images[activeIndex].classList.add('active')
}