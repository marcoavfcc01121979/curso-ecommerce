import React , { Component } from 'react'
import ButtonSimples from '../../components/Button/Simples'
import Titulo from '../../components/Texto/Titulo'
import { TextoDados } from '../../components/Texto/Dados';
import TabelaSimples from '../../components/Tabelas/Simples';

class DetalhesDoPedido extends Component {

  renderCabecalho() {
    return(
      <div>
        <div>
          <Titulo tipo="h2" titulo="Pedido = Cliente 1 - 02/01/2021" />
        </div>
        <div>
          <ButtonSimples 
            type="d anger" 
            label="CANCELAR PEDIDO" 
            onClick={() => alert("Cancelado")} 
          />
        </div>
      </div>
    )
  }

  renderDadosDoCliente() {
    return(
      <div>
        <Titulo tipo="h4" titulo="Dados do Cliente" />
        <br/>
        <TextoDados chave="Nome" valor="Cliente 1" />
        <TextoDados chave="CPF" valor="111.222.333-45" />
        <TextoDados chave="Telefone" valor="11 1234-5678" />
        <TextoDados chave="Data de nascimento" valor="10/04/1990" />
      </div>
    )
  }

  renderDadosDeEntrega() {
    return(
      <div>
        <Titulo tipo="h4" titulo="Dados de Entrega" />
        <br/>
        <TextoDados chave="Endereco" valor="Rua teste, 123" />
        <TextoDados chave="Bairro" valor="Centro" />
        <TextoDados chave="Cidade" valor="Teresina" />
        <TextoDados chave="Estado" valor="Piaui" />
        <TextoDados chave="CEP" valor="38540-123" />
      </div>
    )
  }

  renderDadosDePagamento() {
    return(
      <div>
        <Titulo tipo="h4" titulo="Dados de Pagamento" />
        <br/>
        <TextoDados chave="Taxa de entrega" valor="R$ 15,50 (PAC)" />
        <TextoDados chave="Valor do pedido" valor="R$ 32,00" />
        <TextoDados chave="Valor total" valor="R$ 47,50" />
        <TextoDados chave="Forma de pagamento" valor="Boleto" />
      </div>
    )
  }

  renderDadosDoCarrinho() {
    const dados = [
      {
        "Produto": "Produto 1",
        "Preco Unid": "R$ 10,00",
        "Quantidade": "1",
        "Preço total": "R$ 10,00"
      },
      {
        "Produto": "Produto 2",
        "Preco Unid": "R$ 15,00",
        "Quantidade": "2",
        "Preço total": "R$ 30,00"
      }
    ]
    return(
      <div>
        <Titulo tipo="h4" titulo="Dados do carrinho" />
        <br/>
        <TabelaSimples 
          cabecalho={["Produto", "Preco Unid", "Quantidade", "Preço total"]} 
          dados={dados}
        />
      </div>
    )
  }

  render() {
    return(
      <div className="detalhes-do-pedido">
        { this.renderCabecalho() }
        { this.renderDadosDoCliente() }
        { this.renderDadosDoCarrinho() }
        { this.renderDadosDeEntrega() }
        { this.renderDadosDePagamento() }
      </div>
    )
  }
}

export default DetalhesDoPedido;