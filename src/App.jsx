import "./App.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

import Card from "./components/layout/Card";

export default () => (
  <div id="app">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#13 - Mega" color="#424242">
        <Mega qtde={7} />
      </Card>
      <Card titulo="#12 - Contador" color="#424242">
        <Contador numeroInicial={10} />
      </Card>
      <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
        <Input />
      </Card>
      <Card titulo="#10 - Comunicação indireta" color="#8BAD39">
        <IndiretaPai />
      </Card>
      <Card titulo="#09 - Comunicação direta" color="#59323C">
        <DiretaPai />
      </Card>
      <Card titulo="#08 - Renderização condicional" color="#982395">
        <ParOuImpar numero={20} />
        {/* <UsuarioInfo usuario={{ nome: "Fernando" }} /> */}
        <UsuarioInfo usuario={{ email: "fer@mail.com" }} />
      </Card>
      <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
        <TabelaProdutos />
      </Card>
      <Card titulo="#06 - Repetição" color="#FF4C65">
        <ListaAlunos />
      </Card>
      <Card titulo="#05 - Componente com filhos" color="#00C8F8">
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>
      <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
        <Aleatorio min={0} max={5} />
      </Card>
      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>
      <Card titulo="#02 - Com Parametro" color="#E8B71A">
        <ComParametro
          titulo="Situação do aluno"
          aluno="Pedro Silva"
          nota={9.3}
        />
      </Card>
      <Card titulo="#01 - Primeiro" color="#588C73">
        <Primeiro> </Primeiro>
      </Card>
    </div>
  </div>
);
