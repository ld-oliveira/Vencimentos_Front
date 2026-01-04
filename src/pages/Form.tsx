import Header from "../components/Header";
import { useState } from "react";
import "../styles/Form.scss";

type Produto = {
    Produto: string;
    Quantidade: number;
    Validade: string;
}


function Form(){

    const [Produto, setProduto] = useState<Produto>({
        Produto:"",
        Quantidade:0,
        Validade:"",
    });

    function handleProdutoChange(event: React.ChangeEvent<HTMLInputElement>){
        setProduto({...Produto, Produto: event.target.value });
    }

    function handleQuantidadeChange(event: React.ChangeEvent<HTMLInputElement>){
        setProduto({...Produto, Quantidade: parseInt(event.target.value) });
    }

    function handleValidadeChange(event: React.ChangeEvent<HTMLInputElement>){
        setProduto({...Produto, Validade: event.target.value });
    }

    function btnSalvarClick(){
        alert(Produto.Validade)
    }


    return(
        <>
            <Header />
            <div>
                <form>
                    <fieldset>
                        <legend>
                            <h2>Adicionar produto</h2>
                        </legend>
                        <div>
                            <label>Produto:
                                <input type="text" id="Produto" onChange={handleProdutoChange} value={Produto.Produto}/>
                            </label>
                        </div>
                        <div>
                            <label>Quantidade:
                                <input type="number" id="Quantidade" onChange={handleQuantidadeChange} value={Produto.Quantidade}/>
                            </label>
                        </div>
                        <div>
                            <label>Validade:
                                <input type="date" id="Validade"onChange={handleValidadeChange} value={Produto.Validade}/>
                            </label>
                        </div>
                        <button type="button" onClick={btnSalvarClick}> Salvar</button>
                    </fieldset>
                </form>
                
            </div>
        </>
    )

}

export default Form