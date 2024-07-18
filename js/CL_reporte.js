export default class CL_reporte{
    constructor(){
        this.contmuj = 0;
        this.acumingmuj = 0.0;
        this.mayor = 0;
        this.nombremayor = 0;
    }
    procesarpersona(per){
        if(per.sexo == "F")
            this.contmuj++;
        if(per.sexo == "F")
            this.acumingmuj+= per.ingreso;
        if(per.ingreso > this.mayor){   
            this.mayor = per.ingreso;
            this.nombremayor = per.nombre; }
    }
    promedioingmuj(){
        return this.acumingmuj/this.contmuj;
    }
    nombremayoring(){
        return this.nombremayor;
    }
    montmayor(){
        return this.mayor;
    }

}