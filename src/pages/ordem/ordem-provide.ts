import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { OrdemModel } from "./ordemmodel";
import { Observable } from "rxjs";

@Injectable()
export class OrdemProvider{

    ordens = new Array()

    constructor(public http: HttpClient){}

    //gravando no json
    public create(ordem : OrdemModel): Observable<OrdemModel>{
        return this.http.post<OrdemModel>("http://localhost:3000/ordem", ordem)
    }

    //lendo as ordens do json
    public listarOrdens() : Observable<OrdemModel[]>{
        return this.http.get<OrdemModel[]>("http://localhost:3000/ordem");
    }

    public saldoPorAcao(codigo : string) : Observable<OrdemModel[]>{
        this.ordens.push(this.http.get<OrdemModel[]>("http://localhost:3000/ordem"));
        
        return this.http.get<OrdemModel[]>("http://localhost:3000/ordem")
    }

    public saldoTotal():Observable<OrdemModel[]>{
        //somente ações executadas
        return this.http.get<OrdemModel[]>("http://localhost:3000/ordem");
    }
}