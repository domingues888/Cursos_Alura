// using _05_ByteBank;

using System;

namespace ByteBank
{
    public class ContaCorrente
    {
        
        public static double TaxaOperacao { get; private set; }
        public Cliente Titular { get; set; }
        public static int TotalDeContasCriadas { get; private set; }
        public int ContadorSaquesNaoPermitidos { get; private set; }
        public int ContadorTransferenciasNaoPermitidos { get; private set; }
        
        public int Agencia { get;} //Exemplo de uma variável ReadOnly
        public int Numero { get;} //Exemplo de uma variável ReadOnly

        private double _saldo;
        public double Saldo
        {
            get
            {
                return _saldo;
            }
            set
            {
                if (value < 0)
                {
                    return;
                }
                _saldo = value;
            }
        }
        public ContaCorrente(int agencia, int numero)
        {
            if (agencia <= 0 )
            {
                System.ArgumentException excecao = new System.ArgumentException("O Argumento agência deve ser maior que zero.", nameof(agencia));
                throw excecao;
            }
            Agencia = agencia;

            if (numero <= 0)
            {
                System.ArgumentException excecao = new System.ArgumentException("O Argumento numero deve ser maior que zero.", nameof(numero));
                throw excecao;
            }
            Numero = numero;

            TotalDeContasCriadas++;
            TaxaOperacao = 30 / TotalDeContasCriadas;
        }


        public void Sacar(double valor)
        {
            if (valor < 0)
            {
                throw new ArgumentException("Valor inválido para Saque", nameof(valor));
            }
            if (_saldo < valor)
            {
                ContadorSaquesNaoPermitidos++;
                throw new SaldoInsuficienteException(Saldo, valor);
            }

            _saldo -= valor;
        }

        public void Depositar(double valor)
        {
            _saldo += valor;
        }


        public void Transferir(double valor, ContaCorrente contaDestino)
        {
            if (valor < 0)
            {
                throw new ArgumentException("Valor inválido para Transferência", nameof(valor));
            }
            try
            {
                Sacar(valor);
            }
            catch(SaldoInsuficienteException ex)
            {
                ContadorTransferenciasNaoPermitidos++;
                throw new OperacaoFinanceiraException("Operação não Executada", ex);
            }
            contaDestino.Depositar(valor);
        }
    }
}
