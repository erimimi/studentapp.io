document.addEventListener('DOMContentLoaded', () => {
    const formularioMateria = document.getElementById('formularioMateria');
    const formularioBoletin = document.getElementById('formularioBoletin');
    const cronograma = document.getElementById('cronograma');
    const boletin = document.getElementById('boletin');
    const contenidoCronograma = document.getElementById('contenidoCronograma');
    const contenidoBoletin = document.getElementById('contenidoBoletin');

    const mostrarCronograma = document.getElementById('mostrar-cronograma');
    const mostrarBoletin = document.getElementById('mostrar-boletin');
    const mostrarInformacionButton = document.getElementById('mostrar-informacion');
    const informacionPersonal = document.getElementById('informacionPersonal');

    mostrarCronograma.addEventListener('click', () => {
        formularioMateria.style.display = 'block';
        cronograma.style.display = 'block';
        formularioBoletin.style.display = 'none';
        boletin.style.display = 'none';
    });

    mostrarBoletin.addEventListener('click', () => {
        formularioBoletin.style.display = 'block';
        boletin.style.display = 'block';
        formularioMateria.style.display = 'none';
        cronograma.style.display = 'none';
    });

    formularioMateria.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombreMateria = document.getElementById('nombreMateria').value;
        const diaMateria = document.getElementById('diaMateria').value;
        const horaMateria = document.getElementById('horaMateria').value;

        const nuevaMateria = `
            <div class="schedule-item">
                <strong>${nombreMateria}</strong> - ${diaMateria} a las ${horaMateria}
            </div>
        `;
        contenidoCronograma.insertAdjacentHTML('beforeend', nuevaMateria);
        formularioMateria.reset();
    });

    formularioBoletin.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombreMateriaBoletin = document.getElementById('nombreMateriaBoletin').value;
        const primerParcial = parseFloat(document.getElementById('primerParcial').value);
        const segundoParcial = parseFloat(document.getElementById('segundoParcial').value);
        const trabajoPractico = parseFloat(document.getElementById('trabajoPractico').value);
        const promedioFinal = ((primerParcial + segundoParcial + trabajoPractico) / 3).toFixed(2);

        const nuevaNota = `
            <div class="boletin-item">
                <strong>${nombreMateriaBoletin}</strong>
                <ul>
                    <li>Primer parcial: ${primerParcial}</li>
                    <li>Segundo parcial: ${segundoParcial}</li>
                    <li>Trabajo práctico: ${trabajoPractico}</li>
                    <li>Promedio final: ${promedioFinal}</li>
                </ul>
            </div>
        `;

        contenidoBoletin.insertAdjacentHTML('beforeend', nuevaNota);
        formularioBoletin.reset();
    });

    mostrarInformacionButton.addEventListener('click', () => {
        if (informacionPersonal.style.display === 'none') {
            informacionPersonal.style.display = 'block';
        } else {
            informacionPersonal.style.display = 'none';
        }
    });
});
