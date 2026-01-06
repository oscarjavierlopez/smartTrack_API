import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../models/empresa.model';

@Injectable({
  providedIn: 'root',
})
export class EmpresasApiService {
  empresas: Empresa[];

  constructor(private http: HttpClient) {
    this.empresas = []
  }

  getEmpresas() {
    return this.http.get<Empresa[]>("http://localhost:8000/api/empresas");
  }

  deleteById(id: number) {
    return this.http.delete(`http://localhost:8000/api/empresas/${id}`);
  }

  deleteByCif(cif: string){
    return this.http.delete(`http://localhost:8000/api/empresas/cif/${cif}`);
  }

  updateById(id: number, body: object){
    return this.http.patch(`http://localhost:8000/api/empresas/${id}`, body);
  }

  updateByCif(cif: string, body: object){
    return this.http.patch(`http://localhost:8000/api/empresas/cif/${cif}`, body);
  }
}
