import './Cell.css';

const num2color: string[] = [
    "gray",
    "red",
    "blue",
    "yellow",
    "green",
    "purple",
];

export const Cell = 
(props: {id: number, color: number, onMouseDown: () => void, showSymbol?: boolean, onRightClick?: () => void, onMouseEnter?: () => void }) => 
{
    let back: string = props.color >= 1 ? "cell__circle" : "";
    let showSymbol = props.showSymbol || false;
    if (props.color >= 1) {
        back += ` ${num2color[props.color - 1]}-circle`;
    }

    const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.onRightClick?.();
    };
    const handleMouseEnter = () => props.onMouseEnter?.();

    return (
        <>
            <button key={props.id} className="cell__button" onMouseDown={() => props.onMouseDown()} onContextMenu={(e: React.MouseEvent<HTMLButtonElement>) => handleRightClick(e)} onMouseEnter={handleMouseEnter}>
                <div className={back}></div>
                {showSymbol && <span className="cell__symbol">{props.color}</span>}
            </button>
        </>
    )
}