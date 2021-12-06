import './App.css';
import {useEffect, useState, useRef} from "react";
import soundex from './shared/algorithms/soundex';

// Formulaire non contrôlé : useRef, ref, defaultValue, onSubmit
const SoundexWithReference = () =>
{
    const inputRef = useRef()
    const [soundexValue, setSoundexValue] = useState('')

    const onSubmit = event =>
    {
        event.preventDefault()
        setSoundexValue(soundex(inputRef.current.value))
    }

    return <form className="container" onSubmit={onSubmit}>
        <h1 className="title">Algorithme soundex</h1>
        <input
            className="input"
            type="text"
            defaultValue="Saisir du texte"
            ref={inputRef}/>
        <button>Convertir</button>
        <div className="result">{soundexValue}</div>
    </form>
}

// Formulaire controlé : value, onChange
const Soundex = () =>
{
    const [text, setText] = useState(' ')
    const [soundexValue, setSoundexValue] = useState('')

    useEffect(() => setSoundexValue(soundex(text)), [text])

    const onTextChange = event => setText(event.target.value)
 
    return <div className="container">
        <h1 className="title">Algorithme soundex</h1>
        <label className="label">Nom :</label>
        <input
            className="input"
            type="text"
            value={text}
            onChange={onTextChange} />
        <div className="result">{soundexValue}</div>
    </div>
}

const App = () =>
{
    return <div className="App">
        <SoundexWithReference/>
    </div>
}

export default App;
