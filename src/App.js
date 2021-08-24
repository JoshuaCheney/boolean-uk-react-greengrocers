import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import StoreListItem from './components/Store-Items/StoreItems'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

const initialStoreItems = [
  {
    id: `001-beetroot`,
    name: `Beetroot`,
    price: 0.5
  },
  {
    id: `002-carrot`,
    name: `carrot`,
    price: 0.3
  },
  {
    id: `003-apple`,
    name: `Apple`,
    price: 0.35
  },
  {
    id: `004-apricot`,
    name: `Apricot`,
    price: 0.4
  },
  {
    id: `005-avocado`,
    name: `Avacado`,
    price: 0.4
  },
  {
    id: `006-bananas`,
    name: `Bananas`,
    price: 0.4
  },
  {
    id: `007-bell-pepper`,
    name: `Bell Pepper`,
    price: 0.4
  },
  {
    id: `008-berry`,
    name: `Berry`,
    price: 0.4
  },
  {
    id: `009-blueberry`,
    name: `Blueberry`,
    price: 0.4
  },
  {
    id: `010-eggplant`,
    name: `Eggplant`,
    price: 0.4
  }
]

const cartItems = [
  {
    item: {
      id: '001-beetroot',
      name: 'beetroot',
      price: 0.35
    },
    quantity: 1
  },
  {
    item: {
      id: `002-carrot`,
      name: `carrot`
    },
    quantity: 1
  },
  {
    item: {
      id: `003-apple`,
      name: `Apple`
    },
    quantity: 1
  },
  {
    item: {
      id: `004-apricot`,
      name: `Apricot`
    },
    quantity: 1
  },
  {
    item: {
      id: `005-avocado`,
      name: `Avacado`
    },
    quantity: 1
  },
  {
    item: {
      id: `006-bananas`,
      name: `Bananas`
    },
    quantity: 1
  },
  {
    item: {
      id: `007-bell-pepper`,
      name: `Bell Pepper`
    },
    quantity: 1
  },
  {
    item: {
      id: `008-berry`,
      name: `Berry`
    },
    quantity: 1
  },
  {
    item: {
      id: `009-blueberry`,
      name: `Blueberry`
    },
    quantity: 1
  },
  {
    item: {
      id: `010-eggplant`,
      name: `Eggplant`
    },
    quantity: 1
  }
]

export default function App() {
  // Setup state here...
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])

  const addToCart = storeItem => {
    console.log('Inside addToCart: ', storeItem, cartItems)

    let itemFound = false

    const updatedCartItems = cartItems.map(cartItem => {
      if (storeItem.id === cartItem.item.id) {
        const cartItemToUpdate = {
          ...cartItem,
          quantity: cartItem.quantity + 1
        }

        itemFound = true

        return cartItemToUpdate
      } else {
        return cartItem
      }
    })

    if (!itemFound) {
      const cartItemToAdd = {
        item: storeItem,
        quantity: 1
      }

      console.log('Item Not Found!')

      setCartItems([...cartItems, cartItemToAdd])
    } else {
      console.log('Updated Items: ', updatedCartItems)

      setCartItems(updatedCartItems)
    }
  }
  // console.log(storeItems)
  // console.log("inside cart items", cartItems)

  // Where your functions ago...
  // addToCart()

  // - Does the item exist in the cart?
  // - If the item doesn't exist in the cart add it to cart with a quantity of 1
  // - If the item does exist in the cart then update the quantity by + 1

  // input: an object that represents a storeItem, an array for the cart
  // output: ??

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul class="item-list store--item-list">
          {storeItems.map((storeItems, setStoreItems) => (
            <StoreListItem
              storeitem={storeItems}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ))}
          {/* Wrtite some code here... */}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div class="cart--item-list-container">
          <ul class="item-list cart--item-list">
            {cartItems.map(cartItem => (
              <li>
                <div class="store--item-icon">
                  <img
                    src={`/assets/icons/${cartItem.item.id}.svg`}
                    alt="storeitem"
                  />
                  console.log('cart item', cartItem)
                </div>
                <button onClick={() => addToCart(cartItem.item)}>
                  Add to cart
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div class="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span class="total-number">£0.00</span>
          </div>
        </div>
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
