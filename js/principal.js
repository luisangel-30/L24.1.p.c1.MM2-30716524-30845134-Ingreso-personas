/*Dado el nombre, sexo (F-M) y el ingreso de varias personas. Determinar e imprimir:
promedio de ingreso de las mujeres y el monto de ingreso mayor y quien lo tiene.
Se dispone de los siguientes datos de varias personas: (nombre, sexo, ingreso) (Mary, F,
150), (José, M, 135), (Carlos, M, 160), (Pedro, M, 75), (Rosa, F, 120), (Carmen, F, 120)
Promedio de ingreso de las mujeres: 130
Nombre de la persona con mayor ingreso: Mary con un ingreso de 150$ 
*/

import CL_persona from "./CL_persona.js";
import CL_reporte from "./CL_reporte.js";

let perso1 = new CL_persona("Mary", "F", 150);
let perso2 = new CL_persona("José", "M", 135);
let perso3 = new CL_persona("Carlos", "M", 160);
let perso4 = new CL_persona("Pedro", "M", 75);
let perso5 = new CL_persona("Rosa", "F", 120);
let perso6 = new CL_persona("Carmen", "F", 120);

let reporte = new CL_reporte();

reporte.procesarpersona(perso1);
reporte.procesarpersona(perso2);
reporte.procesarpersona(perso3);
reporte.procesarpersona(perso4);
reporte.procesarpersona(perso5);
reporte.procesarpersona(perso6);

let salida = document.getElementById("salida");

salida.innerHTML=`
<br> Promedio de ingreso de las mujeres: ${reporte.promedioingmuj()}
<br> Nombre de la persona con mayor ingreso: ${reporte.nombremayoring()} con un ingreso de ${reporte.montmayor()}$ 
`