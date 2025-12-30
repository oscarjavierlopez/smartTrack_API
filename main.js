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

    fetch(`http://localhost:8000/api/empresas/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nombre": "Sarabris seguros S.A.",
            "direccion": "Calle Nueva 123",
            "ciudad": "Madrid",
            "provincia": "Madrid",
            "pais": "España",
            "latitud": 40.4167753,
            "longitud": -3.7037902,
            "descripcion": "Empresa dedicada a soluciones tecnológicas.",
            "sector": "Tecnología",
            "prioridad": 7,
            "presencialidad": "híbrido",
            "horario": "Lunes a Viernes 09:00-18:00",
            "activa": 1
        })
    })
        .then(response => response.json())
        .then(data => console.log(data)
        )
        .catch(err => console.log(err));
}

function update_by_cif() {
    let cif = document.getElementById('cif').value;

    fetch(`http://localhost:8000/api/empresas/cif/${cif}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nombre": "empresa actualizada S.A.",
            "direccion": "Calle Nueva 123",
            "ciudad": "Madrid",
            "provincia": "Madrid",
            "pais": "España",
            "latitud": 40.4167753,
            "longitud": -3.7037902,
            "descripcion": "Empresa dedicada a soluciones tecnológicas.",
            "sector": "Tecnología",
            "prioridad": 7,
            "presencialidad": "híbrido",
            "horario": "Lunes a Viernes 09:00-18:00",
            "activa": 1
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
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





