import React, { useEffect, useState } from "react";
import Tabela from "./Tabela";

function TabelaClass({ resultadosIMC }) {
    const [classificacao, setClassificacao] = useState("");

    useEffect(() => {
        if (resultadosIMC < 18.5) {
            setClassificacao("Abaixo do peso");
        } else if (resultadosIMC >= 18.5 && resultadosIMC <= 24.9) {
            setClassificacao("Peso normal");
        } else if (resultadosIMC >= 25 && resultadosIMC <= 29.9) {
            setClassificacao("Sobrepeso");
        } else if (resultadosIMC >= 30 && resultadosIMC <= 34.9) {
            setClassificacao("Obesidade Grau 1");
        } else if (resultadosIMC >= 35 && resultadosIMC <= 39.9) {
            setClassificacao("Obesidade Grau 2");
        } else if (resultadosIMC >= 40){
            setClassificacao("Obesidade Grau 3");
        } else {
            setClassificacao("Nenhum");
        }
    }, [resultadosIMC]);

    return (
        <>
            <h2>Classificação do IMC</h2>
            <p>Seu IMC é {resultadosIMC} e você está classificado como: {classificacao}</p>
        </>
    );
}

export default TabelaClass;
