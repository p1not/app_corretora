export class OrdemModel{
    id : number
    tipo: string
    cod_acao : string
    quantidade : number
    valor_unitario : number
    valor_total : number
    status : string    

    constructor(id? : number, tipo? : string, cod_acao? : string, quantidade? : number, valor_unitario? : number, valor_total? : number, status? : string){
        this.id = id
        this.tipo = tipo
        this.cod_acao = cod_acao
        this.quantidade = quantidade
        this.valor_unitario = valor_unitario
        this.valor_total = valor_total
        this.status = status
    }
    
}