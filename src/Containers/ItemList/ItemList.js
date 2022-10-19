import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ productsList }) => {
    return (
        <div style={styles.container}>
            {productsList && productsList.map((productos) =>
                <Item/>
            )}
        </div>
    )
}

const styles = {
    container:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
    }
  }

export default ItemList