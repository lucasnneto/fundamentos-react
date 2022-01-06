import { useState } from "react";
import "./mega.css";
export default (props) => {
  function gerarNumeros(qtd) {
    const min = 1;
    const max = 60;
    const list = [];
    while (list.length < qtd) {
      const number = parseInt(Math.random() * (max + 1 - min) + min);
      if (!list.includes(number)) list.push(number);
    }
    return list.sort((n1, n2) => n1 - n2);
  }

  const [qtde, setQtde] = useState(props.qtde || 6);
  const [numeros, setNumeros] = useState(gerarNumeros(qtde));
  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{numeros.join(" ")}</h3>
      <div>
        <label>Qtde de Números:</label>
        <input
          min="6"
          max="15"
          value={qtde}
          onChange={(e) => {
            setQtde(e.target.value);
            setNumeros(gerarNumeros(qtde));
          }}
          type="number"
        />
      </div>
      <button onClick={(_) => setNumeros(gerarNumeros(qtde))}>
        Gerar Números
      </button>
    </div>
  );
};
