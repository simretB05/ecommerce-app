import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import data from "./components/dataSlider/data";
import { useState,useEffect } from "react";

  

function App() {
const cartItemFromlocalstorage=JSON.parse(localStorage.getItem('cartItem')||'[]');

const { products } = data;

  // const [storageItem,setStorageItem]=useState('');
  const [cartItem, setCartItem] = useState([cartItemFromlocalstorage]);
  console.log(cartItem)
  
const onTrash = (product) => {
    const exist = cartItem.find((x) => x.id === product.id);
    
    if (exist) {
      setCartItem(
        cartItem.map((x) =>
          x.id === product.id ? { ...exist, qty: product.qty = 0 } : x
        )
      );
      console.log(product);
    }
  };


  useEffect(()=>{

localStorage.setItem('cartItem',JSON.stringify(cartItem));

  },[cartItem]);

  const onAdd = (product) => {
    const exist = cartItem.find((x) => x.id === product.id);
    if (exist) {
      setCartItem(
        cartItem.map((x) =>
          x.id === product.id ? { ...exist, qty: product.qty ++ } : x
         
        )
        
      );
          console.log(product)

    } else {
      setCartItem([...cartItem, { ...product, qty:0 }]);
    }
  };

 //on Remove for the minus sign to deduct numbers 
   const onRemove = (product) => {
    
    const exist = cartItem.find((x) => x.id === product.id);
    if (product.qty===0) {
      setCartItem(cartItem.filter((x) => x.id !== product.id));
      console.log(product)
    }
    
    else {
      setCartItem(
        cartItem.map((x) =>
          x.id === product.id ? { ...exist, qty: product.qty -- } : x
        )
        
      );
          console.log(product)
           console.log(cartItem)
   
    }
  };


//   // to svae the qty to the local storage on save
//   const setData =(product)=>{

// //setting data with localstorage
// localStorage.setItem('mydata',JSON.stringify(product));

//   }
 
// //to get the qty from local storage 
//  const getData=(mydata)=>{

//    let newData=JSON.parse(localStorage.getItem('mydata'));
  
//    console.log(newData)

//      const avialable  = storageItem.find((y) => y.id === newData.id);
//      if(avialable){
//        setStorageItem.map((y) =>
//           y.id === newData.id ? { ...avialable, qty: newData.qty  } : y

//    )

      
//      }
     
//        console.log(newData.qty)

//  }





  return (
    <>
      <Header onTrash={onTrash}   products={products} onRemove={onRemove} onAdd={onAdd} cartItem={cartItem} />
      <Hero  products={products} onAdd={onAdd} onRemove={onRemove} cartItem={cartItem} />
    </>
  );
}

export default App;
