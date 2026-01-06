import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnterpriseCard } from './enterprise-card/enterprise-card';
import { EmpresasApiService } from './services/empresas.api.service';
import { Formulario } from './formulario/formulario';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EnterpriseCard, Formulario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor(public empresasApiService: EmpresasApiService) { }

  ngOnInit(): void {
    this.getEmpresas();
  }

  getEmpresas() {
    this.empresasApiService.getEmpresas().subscribe({
      next: (data) => {
        this.empresasApiService.empresas = data;
      },
      error: (e) => {
        console.log(e)
      }
    });
  }
}
