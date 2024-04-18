import { Dispatch, SetStateAction } from "react";

interface props {
    itemAmount: number;
    setAmount: Dispatch<SetStateAction<number>>;
}

export default function ItemAmountControls({itemAmount, setAmount}: props){
    
    async function increase() {
        setAmount(itemAmount + 1)
    }


    async function decrease() {
        setAmount(itemAmount - 1)
    }


    return (
        <div className="item-controls">
            <button className="control-btn" onClick={decrease} disabled={itemAmount <= 1}>◄</button>
            <input className="item-amount" type="text" defaultValue={itemAmount}/>
            <button className="control-btn" onClick={increase}>►</button>
        </div>
    );
}