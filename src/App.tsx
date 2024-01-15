import { useState } from 'react'
import './App.css'
import { Field } from './Field'
import { ColorPicker } from './ColorPicker'
import { Config } from './Config'

function App() {
  const [selectedColor, setSelectedColor] = useState(2);
  const [showSymbol, setShowSymbol] = useState(false);
  const handleColorChange = (color: number) => {
    setSelectedColor(color);
  };
  const handleShowSymbolChanged = (checked: boolean) => setShowSymbol(checked);

  return (
    <div className='app-content'>
      <Field getSelectedColor={() => selectedColor}/>
      <ColorPicker onColorChange={handleColorChange}/>
      <Config setParentShowSymbol={(checked: boolean) => handleShowSymbolChanged(checked)}/>
    </div>
  )
}

export default App
