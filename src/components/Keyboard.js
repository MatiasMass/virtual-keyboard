import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
    setValue,
    del,
    reset
} from '../features/keyboard/keyboardSlice'
import './Keyboard.css'


function Keyboard() {

  const [display, setDisplay] = useState('')
  const [key, setKey] = useState('')

  const {value} = useSelector(state => state.keyboard)

  const dispatch = useDispatch()

  useEffect(() => {
    setDisplay(() => value) //  buena practica pasarlo como funcion
  }, [value])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleClick = ({currentTarget}) => {
    const {value} = currentTarget
    dispatch(setValue(value))
  }

  const handleDel = () => {
    return dispatch(del())
  }

  const handleKeyDown = (event) => {
    console.log(event.key);
    setKey(event.key)
    if (event.key === 'Backspace') {
        return handleDel()
    } else if (event.key === 'Enter') {
        return dispatch(setValue('\n'))
    } else if (event.key === ' ') {
        return dispatch(setValue(' '))
    } else {
        return dispatch(setValue(event.key))
    }
  };

  const handleReset = () => {
    setDisplay('')
    dispatch(reset())
}
  
  return (
    <div className='keyboard'>
        <div className='keyboard-text'>
            <h2>{!display && <br/>}{display}</h2>
        </div>
          {/* <button className='del' onClick={handleDel} value="del">DEL</button> */}
        <div className="keyboard-background">
            <div className="reset-button">
              <button className='key reset' onClick={handleReset}>Reset</button>
            </div>
          <div className="keyboard-row">
            <button className="key" onClick={handleClick} value="1">1</button>
            <button className="key" onClick={handleClick} value="2">2</button>
            <button className="key" onClick={handleClick} value="3">3</button>
            <button className="key" onClick={handleClick} value="4">4</button>
            <button className="key" onClick={handleClick} value="5">5</button>
            <button className="key" onClick={handleClick} value="6">6</button>
            <button className="key" onClick={handleClick} value="7">7</button>
            <button className="key" onClick={handleClick} value="8">8</button>
            <button className="key" onClick={handleClick} value="9">9</button>
            <button className="key" onClick={handleClick} value="0">0</button>
            <button className="key" onClick={handleClick} value="0">-</button>
            <button className="key" onClick={handleDel}>Bs</button>
          </div>
          <div className="keyboard-row">
            <button className="key" onClick={handleClick} value="q">q</button>
            <button className="key" onClick={handleClick} value="w">w</button>
            <button className="key" onClick={handleClick} value="e">e</button>
            <button className="key" onClick={handleClick} value="r">r</button>
            <button className="key" onClick={handleClick} value="t">t</button>
            <button className="key" onClick={handleClick} value="y">y</button>
            <button className="key" onClick={handleClick} value="u">u</button>
            <button className="key" onClick={handleClick} value="i">i</button>
            <button className="key" onClick={handleClick} value="o">o</button>
            <button className="key" onClick={handleClick} value="p">p</button>
            <button className="key" onClick={handleClick} value="[">[</button>
            <button className="key" onClick={handleClick} value="]">]</button>
            <button className="key" onClick={handleClick} value="\">\</button>
          </div>
          <div className="keyboard-row">
            <button className="key" onClick={handleClick} value="a">a</button>
            <button className="key" onClick={handleClick} value="s">s</button>
            <button className="key" onClick={handleClick} value="d">d</button>
            <button className="key" onClick={handleClick} value="f">f</button>
            <button className="key" onClick={handleClick} value="g">g</button>
            <button className="key" onClick={handleClick} value="h">h</button>
            <button className="key" onClick={handleClick} value="k">k</button>
            <button className="key" onClick={handleClick} value="i">i</button>
            <button className="key" onClick={handleClick} value="l">l</button>
            <button className="key" onClick={handleClick} value=";">;</button>
            <button className="key" onClick={handleClick} value="'">'</button>
            {/* <button className="key" onClick={handleClick} value="p">p</button> */}
          </div>
          <div className="keyboard-row">
            <button className="key" onClick={handleClick} value="z">z</button>
            <button className="key" onClick={handleClick} value="x">x</button>
            <button className="key" onClick={handleClick} value="c">c</button>
            <button className="key" onClick={handleClick} value="v">v</button>
            <button className="key" onClick={handleClick} value="b">b</button>
            <button className="key" onClick={handleClick} value="n">n</button>
            <button className="key" onClick={handleClick} value="m">m</button>
            <button className="key" onClick={handleClick} value=",">,</button>
            <button className="key" onClick={handleClick} value=".">.</button>
            <button className="key" onClick={handleClick} value="/">/</button>
          </div>
          <div className="keyboard-row">
            <button className="key space" onClick={handleClick} value=" ">space</button>
          </div>
        </div>

    </div>

  )
}

export default Keyboard