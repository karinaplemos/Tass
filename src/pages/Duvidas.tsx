import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import "./Duvidas.css";

function Duvidas() {
    return (
    <div className="Duvidas">
          <div className="container p-5 py-5 mb-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a className="a_style" href="/">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Dúvidas Frequentes</li>
                </ol>
            </nav>
            <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Meios de pagamento e de frete</Accordion.Header>
                    <Accordion.Body>
                        <h6>Política de frete</h6>
                        Os pedidos realizados em nosso site são enviados através de parceiros de logística reconhecidos no mercado para todas as regiões do Brasil, até 2 dias úteis após o recebimento da confirmação do pagamento dado pela instituição responsável pela cobrança.
                        
                        Para consultar o valor e prazo do frete, escolha quais itens deseja comprar e clique em “Adicionar ao Carrinho”. Em seguida, informe seu CEP, o custo e o prazo serão calculados automaticamente.
                        <br></br>
                        <br></br>

                        <p>Atenção:</p>
                        <ul>
                        <li>
                            O prazo de entrega começa a contar após a aprovação do pagamento. Assim que seu pagamento for aprovado você será notificado por e-mail;
                        </li>
                        <li>
                            Todos os pedidos estão sujeitos à análise e aprovação de dados cadastrais, o que pode demandar um tempinho maior na confirmação do pagamento;
                        </li>
                        </ul> 
                        <h6>
                        Política de pagamento
                        </h6>
                        O prazo de entrega indicado no pedido começa a contar a partir da data de identificação do pagamento, que varia de acordo com a forma de pagamento:
                        <ul>
                        <li>
                            Cartão de Crédito entre quatro (4) e setenta e duas (72) horas úteis
                        </li>
                        <li>
                            Pix em até uma hora
                        </li>
                        <li>
                            Boleto Bancário: após a compensação que pode ocorrer em até 2 dias úteis
                        </li>
                        </ul> 
                        Deste modo, caso tenha urgência no recebimento da entrega, sugerimos efetuar o pagamento via Cartão de Crédito ou Pix.
                        
                        As entregas ocorrem de segunda à sexta-feira das 8h às 18h. Em algumas faixas de CEP de algumas cidades, pode haver entregas aos sábados em horário comercial. Caso você esteja ausente ou havendo necessidade de confirmar endereço e/ou nome do destinatário, ou mesmo na hipótese da caixa ficar retida para análise e validação dos órgãos competentes, o prazo de entrega é pausado.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Política de trocas e devoluções</Accordion.Header>
                    <Accordion.Body>
                        <h6>
                            TROCAS E DEVOLUÇÕES
                        </h6>
                        Olá! Aqui temos algumas dicas se precisar fazer uma troca|devolução de um dos nossos produtos.

                        Veja aqui os casos em que você pode precisar realizar uma troca ou devolução:
                        <br></br>
                        <br></br>
                        <h6>
                            Política de Devolução
                        </h6> 
                        Se você recebeu um produto e não ficou satisfeito, ele não serviu ou se arrependeu da compra, é possível fazer a solicitação de devolução para estorno em até 7 (sete) dias corridos. Para isso, o pedido deverá estar em sua embalagem original, sem indícios de uso e com todos os itens e acessórios recebidos. Para solicitar a troca, basta enviar um e-mail para contatotassonline@gmai.com, informando o número do seu pedido e anexar imagens do produto que demonstrem que não houve uso.
                        <br></br>
                        <br></br>
                        <h6>    
                            Política de Troca
                        </h6>
                        Se você recebeu um produto diferente do comprado em nosso site ou sem algum acessório, entre em contato por meio de nosso e-mail: contatotassonline@gmail.com. Esta solicitação deverá ser feita no prazo máximo de 7 (sete) dias corridos após o recebimento do produto.
                        
                        Para comprovar o erro, solicitamos que sejam enviadas fotos do produto recebido, bem como que seja informado o número do pedido realizado. Iremos analisar as fotografias e, comprovado o erro, iniciaremos o procedimento de troca sem custos adicionais ao cliente. Em caso de erro no tamanho, é importante fotografar também a etiqueta.
                        <br></br>
                        <br></br>
                        <h6>
                            Defeito no produto recebido
                        </h6>
                        
                        Se você identificar algum tipo de defeito de fabricação, você terá 7 (sete) dias corridos após a entrega para solicitar a troca ou a devolução

                        Para comprovar o defeito, solicitamos que sejam enviadas fotos do produto, bem como que seja informado o número do pedido realizado. Iremos analisar as fotografias e, comprovado o erro, iniciaremos o procedimento de troca sem custos adicionais ao cliente.

                        Atenção: Caso o defeito tenha sido causado por problemas na utilização ou uso indevido, a responsabilidade de reparo é totalmente do comprador.
                        <br></br>
                        <br></br>
                        <h6>
                            Condições de Troca e Devolução
                        </h6>
                        
                        Para que a troca ou a devolução seja efetuada, o produto deverá respeitar as seguintes exigências:
                        <ul>
                            <li>
                                Não possuir sinais de uso, manchas, sujeira, suor ou deterioração da peça;
                            </li>
                            <li>
                                Preservar a embalagem interna e etiquetas originais aplicadas à peça;
                            </li>
                            <li>
                                Respeitar os seguintes prazos: 7 (sete) dias corridos em caso de defeitos ou 7 (sete) dias corridos em casos de erro no pedido ou arrependimento de compra, contados a partir da data de recebimento da mercadoria.
                            </li>
                        </ul> 
                        
                        Para trocar um produto, entre em contato por meio de nosso e-mail contatotassonline@gmail.com, anexando as devidas evidências e iremos retornar com as instruções de troca no prazo de até 5 (cinco) dias úteis.
                        <br></br>
                        <br></br>
                        <h6>
                            Formas de Restituição de Valores
                        </h6>
                        
                        Confira a seguir as opções disponíveis para restituição de valores:
                        <br></br>
                        <br></br>
                        <strong>
                            Cupom de desconto
                        </strong> 
                        <p>
                            Você opta pelo cupom de desconto em qualquer situação referente a trocas por insatisfação.
                            O cupom tem validade de 7 (sete) dias e poderá ser utilizado exclusivamente pelo titular da conta na loja virtual, mediante uso de login e senha. Não é permitido vendê-lo para terceiros nem tampouco convertê-lo em dinheiro.Para utilizar o cupom, basta realizar uma nova compra e inseri-lo no momento de finalizar o pedido.
                        </p>
                        <strong>
                            Estorno parcial ou integral - pagamento por cartão de crédito
                        </strong> 
                        <p>
                            Após o recebimento do produto em nosso Centro de Distribuição e aprovação da devolução mediante análise dos itens, a TASS ONLINE envia a solicitação de estorno para a administradora do cartão de crédito em até 7 (sete) dias úteis; esta por sua vez tem o prazo para processar a requisição de acordo com a política de cada administradora de cartão de crédito.
                            Exclusivo para pagamentos em cartão de crédito, o procedimento de estorno parcial ou integral do valor pago em seu pedido seguirá as regras da administradora do cartão, podendo demorar de um a dois meses para que o valor seja devolvido, dependendo da data de vencimento de sua fatura.
                        </p>
                        <strong>
                            Estorno parcial ou integral - pagamento por pix e transferência
                        </strong> 
                        <p>
                            Após o recebimento do produto em nosso Centro de Distribuição e aprovação da devolução mediante análise dos itens, a TASS ONLINE irá realizar o estorno do valor em até 30 (trinta) dias para a conta do intermediador de pagamento e você poderá solicitar o saque do mesmo.
                        </p>
                        <strong>
                            Estorno parcial ou integral - pagamento por boleto
                        </strong> 
                        <p>
                            Após o recebimento do produto em nosso Centro de Distribuição e aprovação da devolução mediante análise dos itens, a TASS ONLINE irá realizar o estorno do valor em até 30 (trinta) dias para a conta do intermediador de pagamento e você poderá solicitar o saque do mesmo.
                       </p>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </div>
        </div>
    </div>
  );
}

export default Duvidas;