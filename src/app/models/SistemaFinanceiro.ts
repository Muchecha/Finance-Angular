export class SistemaFinanceiro {
    id: number;
    nome: string;
    Mes: number;
    Ano: number;
    DiaFechamento: number;
    GerarCopiaDespesa: boolean;
    MesCopia: number;
    AnoCopia: number;

    NomePropriedade: string = "";
    mensagem: string = "";
    notificacoes: []=[];
}