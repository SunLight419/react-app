import { useState } from 'react';
import { Cell } from './Cell';
import './Field.css'

const Height: number = 13;
const Width:  number = 6;

type CellData = {
    id: number;
    color: number;
    showSymbol?: boolean;
    onclick?: () => void;
    onRightClick?: () => void;
    onMouseEnter?: () => void;
}

const initCellData = (h: number, w: number): CellData[] => {
    let data: CellData[] = [];

    for(let i = 0; i < h; ++i) {
        for(let j = 0; j < w; ++j) {
            const id    = w * i + j;
            const color = 0;
            data.push({ id, color });
        }
    }

    return data;
}


export const Field = (props: {getSelectedColor: () => number}) => {
    const [cells, setCells] = useState<CellData[]>(() => initCellData(Height, Width));
    const [isMouseDown, setIsMouseDown] = useState(false);


    const handleCellClick = (id: number) => {
        setCells((cells) => {
            let newCells = [...cells];
            newCells[id].color = props.getSelectedColor();
            return newCells;
        });
    }

    const handleRightClick = (id: number) => {
        setCells((cells) => {
            let newCells = [...cells];
            newCells[id].color = 0;
            return newCells;
        });
    }

    const handleMouseUP    = () => setIsMouseDown(false);
    const handleMouseDown  = () => setIsMouseDown(true);
    const handleMouseEnter = (id: number) => {
        if(isMouseDown) handleCellClick(id);
    }

    return (
        <>
            <div className='field' onMouseDown={handleMouseDown} onMouseUp={handleMouseUP}>
                {cells.map((cell) => {
                    return <Cell key={cell.id} id={cell.id} color={cell.color} showSymbol={true} 
                    onMouseDown     ={() => handleCellClick(cell.id)}
                    onRightClick={() => handleRightClick(cell.id)}
                    onMouseEnter={() => handleMouseEnter(cell.id)} />
                })}
            </div>
        </>
    )
}