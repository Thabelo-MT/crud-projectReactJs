import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function ReadProduct(){
    const [ setProduct]= useState([]);
        
    useEffect(()=>{
        loadProducts();
    },
    )
    const loadProducts=async ()=>{
        const results = await axios.get("http://localhost/crud-project/php-files/view.php");
        setProduct(results.data.info);
        // console.log(results);
    }
    const deleteProduct=(id)=>{
        axios.delete("http://localhost/crud-project/php-files/delete.php",{ data: { id: id } })
        .then((results)=>{
            loadProducts();
        }).catch(()=>{
            alert('Unable to delete');
        });
    }
    return(
        <div className="container_form">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>View your products</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-2">Name</div>
                <div className="col-md-2">Description</div>
                <div className="col-md-2">Price</div>
                <div className="col-md-2">Update</div>
                <div className="col-md-2">Delete</div>
            </div>
        {/*Error: loadProducts.map is not a function */}
            {loadProducts.map((products, index)=> (
            <div className="row">
                <div className="col-md-2">{index+1}</div>
                <div className="col-md-2">{products.Name}</div>
                <div className="col-md-2">{products.Description}</div>
                <div className="col-md-2">{products.Price}</div>
                <div className="col-md-2">
                    <Link className="btn btn-success" to={`/update-product/${products.id}`}>Update</Link>
                </div>
                <div className="col-md-2">
                    <Link className="btn btn-danger" to="#" onClick={()=> deleteProduct(products.id)}>Delete</Link>
                </div>
            </div>
            ))};
        </div>
    )
}

export default ReadProduct;
