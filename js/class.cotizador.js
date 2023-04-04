class Cotizador {
    constructor(personas4, factorPropiedad, IVA) {
        this.personas4 = parseInt(personas4)
        this.factorPr = parseFloat(factorPropiedad)
        this.impuesto = parseFloat(IVA)
    }
    cotizar() {
        return (this.personas4 * this.factorPr * this.impuesto).toFixed(2)
    }
}