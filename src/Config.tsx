import { useState } from 'react';
import './Config.css';

export const Config = ( props: {setParentShowSymbol: (checked: boolean) => void} ) => {
    const [showSymbol, setShowSymbol] = useState(false);
    const handleCheckedChange = () => {
        setShowSymbol(!showSymbol);
        props.setParentShowSymbol(showSymbol);
    }
    return (
        <div className='config'>
            <input type='checkbox' id='showSymbol' checked={showSymbol} onChange={handleCheckedChange}/>
            <label htmlFor="showSymbol" className='showSymbol__checkbox'>記号を表示する</label>
        </div>
    )
}