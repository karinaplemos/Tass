import { useEffect, useState } from 'react'
import Slide from '../components/Slide';
import Acessorios from '../components/Acessorios';
import './Home.css';

export enum ButtonTypes {
    All = 1,
    Rings = 2,
    Toys = 3,
    Necklaces = 4
}

export default function Home() {
    const [buttonSelected, setButtonSelected] = useState<ButtonTypes>(ButtonTypes.All);

    // Executar a chamada dos produtos do botão "Todos" ao carregar a página
    useEffect(() => {
      setButtonSelected(ButtonTypes.All);
    }, []);
    return (
    <div>
        <Slide/>
        <div className='container_button'>
            <button  className='button_style'  onClick={() => setButtonSelected(ButtonTypes.All)}>Todos</button>
            <button  className='button_style'  onClick={() => setButtonSelected(ButtonTypes.Rings)}>Anéis</button>
            <button  className='button_style'  onClick={() => setButtonSelected(ButtonTypes.Toys)}>Brincos</button>
            <button  className='button_style'  onClick={() => setButtonSelected(ButtonTypes.Necklaces)}>Colares</button>
        </div>
        {buttonSelected && (
            <Acessorios type={buttonSelected} />
        )}
        </div>
    )
}


