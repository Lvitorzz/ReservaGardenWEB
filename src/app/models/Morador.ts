export interface Morador{
    id? : number;
    nomeMorador: string;
    endereco: string;
    numeroApartamento: number;
    numeroWhatsApp: string;
    ativo: boolean;
    dataDeCriacao ? : string;
    dataDeAlteracao ? : string;
}