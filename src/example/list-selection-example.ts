import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
/**
 * @title List with selection
 */
@Component({
  selector: 'list-selection-example',
  templateUrl: 'list-selection-example.html',
  standalone: true,
  imports: [MatListModule,MatIconModule],
})
export class ListSelectionExample {
  typesOfShoes: string[] = [
    'CV del responsable de Seguridad y Salud en el Trabajo',
    'Política de Seguridad y Salud en el Trabajo (De la empresa Tercera)',
    'Reglamento Interno de Seguridad y Salud en el Trabajo (RISST) (De la empresa Tercera -Concesionaria)',
    'Procedimientos de SST (De la empresa Tercera - Consecionaria)',
    'Cargo de recepción de la Política de SST, RISST y Procedimientos de SST (De la empresa Tercera - Consecionaria)',
    'Registro de capacitación de la Política de SST, RISST y Procedimientos de SST (De la empresa Tercera - Consecionaria)',
    'Plan Anual de SST (De la empresa Tercera - Consecionaria)',
    'Programa Anual de Seguridad y Salud en el Trabajo (De la empresa Tercera - Consecionaria)',
    'Objetivos y Metas de Seguridad y Salud en el Trabajo (De la empresa Tercera - Consecionaria)',
    'Programa Anual de capacitaciones de acuerdo a los riesgos que van a tener dentro de las instalaciones',
    'Copia del Registro de las capacitaciones firmadas de acuerdo las actividades de alto riesgo que van a realizar dentro de las instalaciones',
    'Declaración Jurada – Empresas terceras debidamente firmada por el Representante Legal de la empresa',
  ];
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
