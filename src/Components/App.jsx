import React, { useState, useEffect } from 'react';
import Tabela from './Tabela';
import TabelaClass from './TabelaClass';
import './App.css'




function App() {
    const [primeiroNumero, setPrimeiroNumero] = useState(0);
    const [segundoNumero, setSegundoNumero] = useState(0);

    const Numero1 = (event) => {
        setPrimeiroNumero(Number(event.target.value));
    };

    const Numero2 = (event) => {
        setSegundoNumero(Number(event.target.value));
    };

    const resultadosIMC = (segundoNumero / (primeiroNumero * primeiroNumero)).toFixed(2);

    const tabelaVisivel = segundoNumero !== 0;
    

    return (
        < >
            <form>
                <div className='containerform'>
                    <input type="number" placeholder='Digite sua altura' onChange={Numero1} />
                    <input type="number" placeholder='Digite seu peso' onChange={Numero2} />
                </div>
                {tabelaVisivel && <Tabela resultadosIMC={resultadosIMC} />}

                <TabelaClass resultadosIMC={resultadosIMC} />
            </form>
        </>
    );
}

export default App;


