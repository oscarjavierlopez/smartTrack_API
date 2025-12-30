function delete_by_id(id) {
    fetch(`http://localhost:8000/api/empresas/${id}`, {
        method: 'DELETE'
    })
        .then(response => console.log(response))
        .catch(err => console.log(err));
}

function delete_by_cif(cif) {
    fetch(`http://localhost:8000/api/empresas/cif/${cif}`, {
        method: 'DELETE'
    })
        .then(response => console.log(response))
        .catch(err => console.log(err));
}

function update_by_id(id) {
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
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

function update_by_cif(cif) {
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

