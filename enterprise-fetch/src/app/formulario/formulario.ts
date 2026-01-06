import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmpresasApiService } from '../services/empresas.api.service';



@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  id = "";
  nombre = "";
  cif = "";
  direccion = "";
  ciudad = "";
  provincia = "";
  pais = "";
  latitud = "";
  longitud = "";
  descripcion = "";
  sector = "";
  prioridad = "";
  presencialidad = "seleccionar";
  horario = "";
  activa = true;

  constructor(public empresasApiService: EmpresasApiService) { }

  actualizarPorId() {
    let body = {};

    if (!/^\s*$/.test(this.nombre)) {
      body = { ...body, nombre: this.nombre };
    }

    if (!/^\s*$/.test(this.cif)) {
      body = { ...body, cif: this.cif };
    }

    if (!/^\s*$/.test(this.direccion)) {
      body = { ...body, direccion: this.direccion };
    }

    if (!/^\s*$/.test(this.ciudad)) {
      body = { ...body, ciudad: this.ciudad };
    }

    if (!/^\s*$/.test(this.provincia)) {
      body = { ...body, provincia: this.provincia };
    }

    if (!/^\s*$/.test(this.pais)) {
      body = { ...body, pais: this.pais };
    }

    if (!/^\s*$/.test(this.latitud)) {
      body = { ...body, latitud: this.latitud };
    }

    if (!/^\s*$/.test(this.longitud)) {
      body = { ...body, longitud: this.longitud };
    }

    if (!/^\s*$/.test(this.descripcion)) {
      body = { ...body, descripcion: this.descripcion };
    }

    if (!/^\s*$/.test(this.sector)) {
      body = { ...body, sector: this.sector };
    }

    if (!/^\s*$/.test(this.prioridad)) {
      body = { ...body, prioridad: this.prioridad };
    }

    if (this.presencialidad !== "seleccionar") {
      body = { ...body, presencialidad: this.presencialidad };
    }

    if (!/^\s*$/.test(this.horario)) {
      body = { ...body, horario: this.horario };
    }

    if (this.activa === true) {
      body = { ...body, activa: 1 };
    } else {
      body = { ...body, activa: 0 };
    }

    this.empresasApiService.updateById(parseInt(this.id), body).subscribe({
      next: (data) => {
        console.log(data);
        this.empresasApiService.getEmpresas().subscribe({
          next: (data) => {
            this.empresasApiService.empresas = data;
          },
          error: (e) => {
            console.log(e)
          }
        })
      },
      error: (e) => {
        console.log(e)
      }
    })
  }
  actualizarPorCif() {
    let body = {};

    if (!/^\s*$/.test(this.nombre)) {
      body = { ...body, nombre: this.nombre };
    }

    if (!/^\s*$/.test(this.direccion)) {
      body = { ...body, direccion: this.direccion };
    }

    if (!/^\s*$/.test(this.ciudad)) {
      body = { ...body, ciudad: this.ciudad };
    }

    if (!/^\s*$/.test(this.provincia)) {
      body = { ...body, provincia: this.provincia };
    }

    if (!/^\s*$/.test(this.pais)) {
      body = { ...body, pais: this.pais };
    }

    if (!/^\s*$/.test(this.latitud)) {
      body = { ...body, latitud: this.latitud };
    }

    if (!/^\s*$/.test(this.longitud)) {
      body = { ...body, longitud: this.longitud };
    }

    if (!/^\s*$/.test(this.descripcion)) {
      body = { ...body, descripcion: this.descripcion };
    }

    if (!/^\s*$/.test(this.sector)) {
      body = { ...body, sector: this.sector };
    }

    if (!/^\s*$/.test(this.prioridad)) {
      body = { ...body, prioridad: this.prioridad };
    }

    if (this.presencialidad !== "seleccionar") {
      body = { ...body, presencialidad: this.presencialidad };
    }

    if (!/^\s*$/.test(this.horario)) {
      body = { ...body, horario: this.horario };
    }

    if (this.activa === true) {
      body = { ...body, activa: 1 };
    } else {
      body = { ...body, activa: 0 };
    }

    this.empresasApiService.updateByCif(this.cif, body).subscribe({
      next: (data) => {
        console.log(data);
        this.empresasApiService.getEmpresas().subscribe({
          next: (data) => {
            this.empresasApiService.empresas = data;
          },
          error: (e) => {
            console.log(e)
          }
        })
      },
      error: (e) => {
        console.log(e)
      }
    })
  }
  eliminarPorId() {
    this.empresasApiService.deleteById(parseInt(this.id)).subscribe({
      next: () => {
        this.empresasApiService.getEmpresas().subscribe({
          next: (data) => {
            this.empresasApiService.empresas = data;
          },
          error: (e) => {
            console.log(e)
          }
        });
      },
      error: (e) => {
        console.log(e)
      }
    });
  }
  eliminarPorCif() {
    this.empresasApiService.deleteByCif(this.cif).subscribe({
      next: () => {
        this.empresasApiService.getEmpresas().subscribe({
          next: (data) => {
            this.empresasApiService.empresas = data;
          },
          error: (e) => {
            console.log(e)
          }
        });
      },
      error: (e) => {
        console.log(e)
      }
    });
  }
}
