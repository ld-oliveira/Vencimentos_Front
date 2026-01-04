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

            <div className="form-page">
                <form className="form-container">
                    <fieldset className="form-fieldset">
                        <legend className="form-legend">
                            <h2 className="form-title">Adicionar produto</h2>
                        </legend>

                        <div className="form-group">
                            <label className="form-label">
                                Produto:
                                <input
                                    type="text"
                                    id="Produto"
                                    className="form-input"
                                    onChange={handleProdutoChange}
                                    value={Produto.Produto}
                                />
                            </label>
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                Quantidade:
                                <input
                                    type="number"
                                    id="Quantidade"
                                    className="form-input"
                                    onChange={handleQuantidadeChange}
                                    value={Produto.Quantidade}
                                />
                            </label>
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                Validade:
                                <input
                                    type="date"
                                    id="Validade"
                                    className="form-input"
                                    onChange={handleValidadeChange}
                                    value={Produto.Validade}
                                />
                            </label>
                        </div>

                        <button
                            type="button"
                            className="form-button"
                            onClick={btnSalvarClick}
                        >
                            Salvar
                        </button>
                    </fieldset>
                </form>
            </div>
        </>
    );
}

export default Form;
