using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBank
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                ContaCorrente conta = new ContaCorrente(1, 10);
                ContaCorrente conta2 = new ContaCorrente(1, 11);
                conta.Depositar(500);
                Console.WriteLine("Saldo da conta 1: "+ conta.Saldo);
                Console.WriteLine("Saldo da conta 2: " + conta2.Saldo);
                conta.Transferir(1000,conta2);
                Console.WriteLine("Saldo da conta 1: " + conta.Saldo);
                Console.WriteLine("Saldo da conta 2: " + conta2.Saldo);
            }
            catch(OperacaoFinanceiraException e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e.StackTrace);

                //Console.WriteLine("-------------- INNER EXCEPTION (Exceção Interna) -------------");
                //Console.WriteLine(e.InnerException.Message);
                //Console.WriteLine(e.InnerException.StackTrace);
            }
            //catch (SaldoInsuficienteException e)
            //{
            //    Console.WriteLine(e.StackTrace);
            //    Console.WriteLine(e.Message);
            //    Console.WriteLine("Ocorreu exceção de Saldo Insuficente");
            //}
            //catch (ArgumentException e)
            //{
            //    Console.WriteLine("Ocorreu exceção de Argumento");
            //    Console.WriteLine("Argumento com Problema:" + e.ParamName);
            //    Console.WriteLine(e.Message);
            //}


            //try
            //{
            //    Metodo();
            //}
            //catch (DivideByZeroException e)
            //{
            //    Console.WriteLine("Não é possível divisão por zero!");
            //}
            //catch(Exception e)
            //{
            //    Console.WriteLine(e.Message);
            //    Console.WriteLine(e.StackTrace);
            //}

            //Console.WriteLine(ContaCorrente.TaxaOperacao);
            Console.ReadLine();
        }

        static void Metodo()
        {
            TestaDivisao(0);
        }

        static void TestaDivisao(int divisor)
        {
            Dividir(10, divisor);
        }
        static int Dividir(int numero, int divisor)
        {
            try
            {
                return numero / divisor;
            }
            catch (DivideByZeroException)
            {
                Console.WriteLine("Valores no momento da divisão: Numero ->" + numero + " e Divisor ->" + divisor);
                throw;
            }
            
        }
    }
}
