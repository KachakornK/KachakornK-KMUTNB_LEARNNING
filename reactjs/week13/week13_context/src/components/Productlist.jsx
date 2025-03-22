// import React,{useState, useEffect} from 'react'


// function Productlist() {
//     const[products, setProducts] = useState([])
//     const[loading, setLoading] = useState(true)
//     const[error, setError] = useState(null)

//     useEffect(() => {
//         // fetch_data_dummy()
//         fetchProduct()
//     },[])
   
// function fetch_data_dummy(){
//     const products =[
//         {'id':1, name:'Product 1', price:100, 'qty':10},
//         {'id':2, name:'Product 2', price:200, 'qty':20},
//     ]
//     setProducts(products)
//     setLoading(false)
// }


// async function fetchProduct(){
//     try{
//         const url = 'http://localhost/webapp/week13/api.php'
//         const response = await fetch(url);
//         if(!response.ok){
//             throw new Error('Network response was not ok')
//         }
//         const data = await response.json()
//         setProducts(data)
//     }catch(error){
//         setError(error.message)
//     }finally{
//         setLoading(false)
//     }
// }
// if(loading) return <p>Loading...</p>
// if(error) return <p>{error}</p>

// const listitem = products.map(
//     product => (
//     <tr key={product.id}>
//         <td>{product.id}</td>
//         <td>{product.name}</td>
//         <td>{product.price}</td>
//         <td>{product.qty}</td>
//     </tr>
// )
// )
// return(
//     <>
//     <h2>Product List</h2>
//     <center>
//     <table border='1'>
//         <thead>
//             <tr>
//                 <th>ID</th>
//                 <th>Product Name</th>
//                 <th>PRICE</th>
//                 <th>Qty</th>
//             </tr>
//         </thead>
//         <tbody>
//             {listitem}
//         </tbody>
//     </table>
//     </center>
//     </>
    
// )
// }
// export default Productlist



import React, { useState, useEffect } from 'react';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchProduct() {
        try {
            const url = 'http://localhost/webapp/week13/api.php';
            const response = await fetch(url); // Corrected typo here
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, []); // Empty dependency array ensures the fetch runs only once when the component mounts

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.qty}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ProductList;
