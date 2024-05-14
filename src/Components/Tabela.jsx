import React, { useState, useEffect } from 'react';
import './App.css'

function Tabela({resultadosIMC, dadosAtualizados}) {
    const [imcCalculado, setImcCalculado] = useState(false);

    // Aqui você pode simular o cálculo do IMC ou realizar a lógica necessária
    useEffect(() => {
        // Simulando um tempo de espera de 2 segundos para o cálculo do IMC
        const timer = setTimeout(() => {
            setImcCalculado(true);
        }, 1000);

        // Limpando o timer para evitar vazamentos de memória
        return () => clearTimeout(timer);
    }, []);

    // Renderiza a tabela somente quando o IMC estiver calculado
    return (
        <div data-atualizado={dadosAtualizados} className='containerTabela'>
            {imcCalculado && (
                <table >
                    <thead>
                        <tr>
                            <th>IMC</th>
                            <th>Classificação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Menos de 18.5</td>
                            <td>Abaixo do peso</td>
                        </tr>
                        <tr>
                            <td>18.5 - 24.9</td>
                            <td>Peso normal</td>
                        </tr>
                        <tr>
                            <td>25 - 29.9</td>
                            <td>Sobrepeso</td>
                        </tr>
                        <tr>
                            <td>30 - 34.9</td>
                            <td>Obesidade Grau 1</td>
                        </tr>
                        <tr>
                            <td>35 - 39.9</td>
                            <td>Obesidade Grau 2</td>
                        </tr>
                        <tr>
                            <td>Mais de 40</td>
                            <td>Obesidade Grau 3</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Tabela;
