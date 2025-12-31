function delete_by_id() {
    let id = document.getElementById('id').value;

    fetch(`http://localhost:8000/api/empresas/${id}`, {
        method: 'DELETE'
    })
        .then(response => {
            console.log(response);
            get_empresas();
        })
        .catch(err => console.log(err));
}

function delete_by_cif() {
    let cif = document.getElementById('cif').value;

    fetch(`http://localhost:8000/api/empresas/cif/${cif}`, {
        method: 'DELETE'
    })
        .then(response => {
            console.log(response)
            get_empresas();
        })
        .catch(err => console.log(err));
}

function update_by_id() {
    let id = document.getElementById('id').value;

    let body = {};

    if (!/^\s*$/.test(document.getElementById('nombre').value)) {
        body = { ...body, nombre: document.getElementById('nombre').value };
    }

    if (!/^\s*$/.test(document.getElementById('cif').value)) {
        body = { ...body, cif: document.getElementById('cif').value };
    }

    if (!/^\s*$/.test(document.getElementById('direccion').value)) {
        body = { ...body, direccion: document.getElementById('direccion').value };
    }

    if (!/^\s*$/.test(document.getElementById('ciudad').value)) {
        body = { ...body, ciudad: document.getElementById('ciudad').value };
    }

    if (!/^\s*$/.test(document.getElementById('provincia').value)) {
        body = { ...body, provincia: document.getElementById('provincia').value };
    }

    if (!/^\s*$/.test(document.getElementById('pais').value)) {
        body = { ...body, pais: document.getElementById('pais').value };
    }

    if (!/^\s*$/.test(document.getElementById('latitud').value)) {
        body = { ...body, latitud: document.getElementById('latitud').value };
    }

    if (!/^\s*$/.test(document.getElementById('longitud').value)) {
        body = { ...body, longitud: document.getElementById('longitud').value };
    }

    if (!/^\s*$/.test(document.getElementById('descripcion').value)) {
        body = { ...body, descripcion: document.getElementById('descripcion').value };
    }

    if (!/^\s*$/.test(document.getElementById('sector').value)) {
        body = { ...body, sector: document.getElementById('sector').value };
    }

    if (!/^\s*$/.test(document.getElementById('prioridad').value)) {
        body = { ...body, prioridad: document.getElementById('prioridad').value };
    }

    if (document.getElementById('presencialidad').value !== "seleccionar") {
        body = { ...body, presencialidad: document.getElementById('presencialidad').value };
    }

    if (!/^\s*$/.test(document.getElementById('horario').value)) {
        body = { ...body, horario: document.getElementById('horario').value };
    }

    if (document.getElementById('activa').checked === true) {
        body = { ...body, activa: 1 };
    } else {
        body = { ...body, activa: 0 };
    }

    fetch(`http://localhost:8000/api/empresas/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            get_empresas();
        })
        .catch(err => console.log(err));
}

function update_by_cif() {
    let cif = document.getElementById('cif').value;

    let body = {};

    if (!/^\s*$/.test(document.getElementById('nombre').value)) {
        body = { ...body, nombre: document.getElementById('nombre').value };
    }

    if (!/^\s*$/.test(document.getElementById('cif').value)) {
        body = { ...body, cif: document.getElementById('cif').value };
    }

    if (!/^\s*$/.test(document.getElementById('direccion').value)) {
        body = { ...body, direccion: document.getElementById('direccion').value };
    }

    if (!/^\s*$/.test(document.getElementById('ciudad').value)) {
        body = { ...body, ciudad: document.getElementById('ciudad').value };
    }

    if (!/^\s*$/.test(document.getElementById('provincia').value)) {
        body = { ...body, provincia: document.getElementById('provincia').value };
    }

    if (!/^\s*$/.test(document.getElementById('pais').value)) {
        body = { ...body, pais: document.getElementById('pais').value };
    }

    if (!/^\s*$/.test(document.getElementById('latitud').value)) {
        body = { ...body, latitud: document.getElementById('latitud').value };
    }

    if (!/^\s*$/.test(document.getElementById('longitud').value)) {
        body = { ...body, longitud: document.getElementById('longitud').value };
    }

    if (!/^\s*$/.test(document.getElementById('descripcion').value)) {
        body = { ...body, descripcion: document.getElementById('descripcion').value };
    }

    if (!/^\s*$/.test(document.getElementById('sector').value)) {
        body = { ...body, sector: document.getElementById('sector').value };
    }

    if (!/^\s*$/.test(document.getElementById('prioridad').value)) {
        body = { ...body, prioridad: document.getElementById('prioridad').value };
    }

    if (document.getElementById('presencialidad').value !== "seleccionar") {
        body = { ...body, presencialidad: document.getElementById('presencialidad').value };
    }

    if (!/^\s*$/.test(document.getElementById('horario').value)) {
        body = { ...body, horario: document.getElementById('horario').value };
    }

    if (document.getElementById('activa').checked === true) {
        body = { ...body, activa: 1 };
    } else {
        body = { ...body, activa: 0 };
    }


    fetch(`http://localhost:8000/api/empresas/cif/${cif}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            get_empresas();
        })
        .catch(err => console.log(err));
}

function get_empresas() {
    document.getElementById('cards').innerHTML = '';

    fetch('http://localhost:8000/api/empresas')
        .then(response => response.json())
        .then(data => {
            data.forEach((empresa) => {
                const divEmpresaCard = document.createElement('div');
                divEmpresaCard.classList.add('empresa-card');
                divEmpresaCard.innerHTML = `
                    <div>
                        <div class="empresa-nombre">${empresa.id} ${empresa.nombre}</div>
                        <div class="empresa-direccion">${empresa.direccion}</div>
                        <div class="empresa-ciudad">${empresa.cif}</div>
                        <div class="empresa-ciudad">${empresa.ciudad}</div>

                        <div class="empresa-descripcion">
                            ${empresa.descripcion}
                        </div>
                </div>

                <div class="empresa-sector">${empresa.sector}</div>`;
                document.getElementById('cards').append(divEmpresaCard);
            })
        })
        .catch(err => console.log(err));
}

get_empresas();

document.getElementById('actualizarPorId').addEventListener('click', update_by_id);
document.getElementById('actualizarPorCif').addEventListener('click', update_by_cif);
document.getElementById('eliminarPorId').addEventListener('click', delete_by_id);
document.getElementById('eliminarPorCif').addEventListener('click', delete_by_cif);






