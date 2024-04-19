export default function OrderedItem({props}: any){
    
    return (
        <div className="item">
            <img src={props.item.imgSrc} alt="item-img" className="item-img"/>
            <p className="item-name">{props.item.name}</p>
            <p className="item-quantity">Quantity: {props.quantity}</p>
        </div>
    );
}