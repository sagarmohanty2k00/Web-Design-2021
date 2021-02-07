const panels = document.querySelectorAll('.panel')

console.log(panels);

panels.forEach((element) => {
    element.addEventListener('click', () => {
        removeActiveClasses()
        element.classList.add('active');
    })
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}