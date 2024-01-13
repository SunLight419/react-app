import { useState } from 'react'
import './App.css'
import { Field } from './Field'
import { ColorPicker } from './ColorPicker'

function App() {
  const [selectedColor, setSelectedColor] = useState(2);
  const handleColorChange = (color: number) => {
    setSelectedColor(color);
  };

  return (
    <div className='app-content'>
      <Field getSelectedColor={() => selectedColor}/>
      <ColorPicker onColorChange={handleColorChange}/>
    </div>
  )
}

export default App
