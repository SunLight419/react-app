import { useState } from "react";
import { Cell } from "./Cell";
import './ColorPicker.css';

export const ColorPicker = (props: {onColorChange: (color: number) => void}) => {
    let [selectedColor, setSelectedColor] = useState(2);
    const hoge = (color: number) => {
        props.onColorChange(color);
        setSelectedColor(color);
    }
    
    return (
        <div className="color-picker__body">
            <div>
                <Cell key={1} id={1} color={selectedColor} onMouseDown={() => {return;}}/>
            </div>
            <div className="color-picker__picker">
                <Cell key={0} id={0} color={0} onMouseDown={() => hoge(0)} showSymbol={false}/>
                <Cell key={1} id={1} color={1} onMouseDown={() => hoge(1)} showSymbol={false}/>
                <Cell key={2} id={2} color={2} onMouseDown={() => hoge(2)} showSymbol={false}/>
                <Cell key={3} id={3} color={3} onMouseDown={() => hoge(3)} showSymbol={false}/>
                <Cell key={4} id={4} color={4} onMouseDown={() => hoge(4)} showSymbol={false}/>
                <Cell key={5} id={5} color={5} onMouseDown={() => hoge(5)} showSymbol={false}/>
                <Cell key={6} id={6} color={6} onMouseDown={() => hoge(6)} showSymbol={false}/>
            </div>
        </div>
    )
}