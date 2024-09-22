const color = document.getElementById('pickColor')

color.addEventListener('input', (e) => {
    document.body.style.backgroundColor = e.target.value
    document.getElementById('sp').textContent=e.target.value
})
