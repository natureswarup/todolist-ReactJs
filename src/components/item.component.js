import './item.css'

const Item = (props) => {
    return (
        <div className="itemContainer" key={props.key}>
            <span>{props.item}</span>
            <span class='delete' onClick={props.onClick}>X</span>
        </div>
    )
}

export default Item