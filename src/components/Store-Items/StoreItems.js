// function StoreListItem(props) {
//   // console.log('stored items props', props)
//   const addToCart = storeItem => {
//     // console.log('Inside addToCart: ', storeItem, cartItems)

//     const cartItems = props.cartItems
//     const setCartItems = props.setCartItems
//     // console.log('props.cartItem', cartItem)

//     let itemFound = false

//     const updatedCartItems = cartItems.map(cartItem => {
//       if (props.storeitem.id === cartItem.item.id) {
//         const cartItemToUpdate = {
//           ...cartItem,
//           quantity: cartItem.quantity + 1
//         }

//         itemFound = true

//         return cartItemToUpdate
//       } else {
//         return cartItem
//       }
//     })

//     if (!itemFound) {
//       const cartItemToAdd = {
//         item: storeItem,
//         quantity: 1
//       }

//       console.log('Item Not Found!')

//       setCartItems([...cartItems, cartItemToAdd])
//     } else {
//       console.log('Updated Items: ', updatedCartItems)

//       setCartItems(updatedCartItems)
//     }
//   }
// console.log(props)
//   return (
//     <li>
//       <div class="store--item-icon">
//         <img src={`/assets/icons/${props.storeitem.id}.svg`} alt="storeitem" />
//       </div>
//       <button onClick={() => addToCart(props.item)}>Add to cart</button>
//     </li>
//   )
// }

// export default StoreListItem
