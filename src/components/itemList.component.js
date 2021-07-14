import './itemList.css'

import Item from './item.component'

const ItemList = (props) => {
    return (
      <div className={props.items.length > 0 ? 'itemList' : ''}>
          {props.items.map((item, index)=>{
            return(
                <Item key={index} item={item} onClick={()=>props.deleteHandler(index)}/>
            )
          })}
      </div>
    );
}

export default ItemList