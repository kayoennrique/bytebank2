export class Armazenador {
    private constructor() { }

    static salvar(chave: string, valor: any): void {
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem(chave, valorComoString);
    }

    static obter<K>(chave: string, reviver?: (this: any, key: string, value: any) => any): K | null {
        const valor = localStorage.getItem(chave);

        if (valor === null) {
            return null;
        }

        if (reviver) {
            return JSON.parse(valor, reviver) as K;
        }

        return JSON.parse(valor) as K;
    }
}