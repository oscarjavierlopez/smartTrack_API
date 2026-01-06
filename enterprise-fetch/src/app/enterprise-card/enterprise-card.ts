import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-enterprise-card',
  imports: [],
  templateUrl: './enterprise-card.html',
  styleUrl: './enterprise-card.css',
})
export class EnterpriseCard {
  @Input() id = 0;
  @Input() nombre = "";
  @Input() direccion = "";
  @Input() cif = "";
  @Input() ciudad = "";
  @Input() descripcion = "";
  @Input() sector = "";
}
