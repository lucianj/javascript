const maquina = {
  nome: 'Esteira Transportadora',
  funcionando: true,
  exibirStatus: function () {
    console.log(`A máquina ${this.nome} está ${this.funcionando ? 'em funcionamento' : 'parada'}`)
  }
};

maquina.exibirStatus();