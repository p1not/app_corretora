import { Injectable } from "@angular/core";
import { AcaoModel } from "./acaomodel";

@Injectable()
export class AcaoProvider{
    acoes : AcaoModel[];

    public static acao=[{
        "codigo": "BIDI4",
        "empresa": "Banco Inter SA",
        "valor": 24.90,
        "icone": "bidi4",
        "imagem": "assets/imgs/acoes/bid4.jpg",
    },
    { 
        "codigo": "CYRE3",
        "empresa": "Cyrela Brazil Realty",
        "valor": 15.25,
        "icone": "cyre3",
        "imagem": "assets/imgs/acoes/cyre3.png"
    },
    {
        "codigo": "EGIE3",
        "empresa": "Engie Brasil",
        "valor": 22.00,
        "icone": "egie3",
        "imagem": "assets/imgs/acoes/egie3.jpg"
    },
    {
        "codigo": "GNDI3",
        "empresa": "Notre Dame Intermedica SA",
        "valor": 24.95,
        "icone": "gndi3",
        "imagem": "assets/imgs/acoes/gndi3.jpg"
    },
    {
        "codigo": "HAPV3",
        "empresa": "Hapvida SA",
        "valor": 24.95,
        "icone": "hapv3",
        "imagem": "assets/imgs/acoes/hapv3.jpg"
    },
    {
        "codigo": "ITUB4",
        "empresa": "Banco Itaú Unibanco",
        "valor": 17.90,
        "icone": "itub4",
        "imagem": "assets/imgs/acoes/itub4.png"
    },
    {
        "codigo": "LINX3",
        "empresa": "Linx",
        "valor": 6.95,
        "icone": "linx3",
        "imagem": "assets/imgs/acoes/linx3.png"
    },
    {
        "codigo": "OIBR3",
        "empresa": "Oi SA",
        "valor": 24.65,
        "icone": "oibr3",
        "imagem": "assets/imgs/acoes/oibr3.jpg"
    },
    {
        "codigo": "PETR4",
        "empresa": "Petroleo Brasileiro SA Petrobras PS",
        "valor": 18.90,
        "icone": "petr4",
        "imagem": "assets/imgs/acoes/petr4.svg"
    },
    {
        "codigo": "PETR3",
        "empresa": "Petroleo Brasileiro SA Petrobras",
        "valor": 17.95,
        "icone": "petr3",
        "imagem": "assets/imgs/acoes/petr3.svg"
    },
    {
        "codigo": "TAEE11",
        "empresa": "TAESA",
        "valor": 35.95,
        "icone": "taee11",
        "imagem": "assets/imgs/acoes/taee11.png"
    },
    {
        "codigo": "TIET3",
        "empresa": "AES Tiete Energia SA",
        "valor": 24.95,
        "icone": "tiet3",
        "imagem": "assets/imgs/acoes/tiet3.jpeg"
    },
    {
        "codigo": "TOTS3",
        "empresa": "TOTVS",
        "valor": 75.45,
        "icone": "tots3",
        "imagem": "assets/imgs/acoes/tots3.png"
    }] as AcaoModel[]    

    public listarAcoes() : AcaoModel[]{
        this.acoes = AcaoProvider.acao
        return this.acoes
    }
}