export interface Produto{
    id? : number;
    nome: string;
    descricao: string;
    link: string;
    urlImagem: string;
    ativo: boolean;
    preco: number;
    categoria: string;
    dataDeCriacao ? : string;
    dataDeAlteracao ? : string;
    quantidade : number;
}