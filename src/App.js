import Productcard from './Productcard'
import {useState} from 'react'
import {useEffect} from 'react'
import './App.css'
function App()
{
    const [products,updateproducts]=useState([])

    useEffect(
        ()=>{
            getproducts()
        },[]
    )
    async function getproducts()
    {
        let res=await fetch("https://fakestoreapi.com/products");
        let productlist=await res.json();
        updateproducts(productlist);
        // console.log(productlist)

    }
    if(products.length===0)
        {
            return(<h1>fetching data...</h1>)
        }
    return(
        <>
        <div className='product-list'>
            {products.map((p)=><Productcard {...p}  key={p.id} ></Productcard>)}
        </div>
        </>
    )
}

export default App;