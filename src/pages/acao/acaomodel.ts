export class AcaoModel{
    codigo : string
    empresa: string
    valor : number
    icone : string
    imagem : string
    

    constructor(codigo : string, empresa : string, valor : number, icone? : string, imagem? : string){
        this.codigo = codigo
        this.empresa = empresa
        this.valor = valor
        this.icone = icone
        this.imagem = imagem
    }
    
}