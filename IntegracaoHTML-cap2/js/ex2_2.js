function Convert() {
    var title = document.getElementyById('filmeTitle').value;
    var time = document.getElementById('time').value;

    var hour = time / 60;
    var minutes = time % 60;

    document.getElementById('pTitle').textContent = title;
    document.getElementById('pTime').textContent = `${hour} hora(s) e ${minutes} minuto(s)`;
    
}

var showText = document.getElementById('convert');
showText.addEventListener('click', Convert);