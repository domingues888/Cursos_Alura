using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBank
{
    class SaldoInsuficienteException : OperacaoFinanceiraException
    {
        public double Saldo { get; }
        public double ValorRetirado { get; }
        public SaldoInsuficienteException()
            {
            }

        public SaldoInsuficienteException(double saldo, double valorRetirado)
            : this ("Tentativa de retirada de um valor de " + valorRetirado + " em uma conta com o saldo igual a " + saldo)
        {
            Saldo = saldo;
            ValorRetirado = valorRetirado;

        }
        public SaldoInsuficienteException(string mensagem) : base (mensagem)
        {

        }
        public SaldoInsuficienteException(string mensagem, Exception excecaoInterna)
            : base(mensagem, excecaoInterna)
        {

        }
    }
}
