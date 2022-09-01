import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function CreateProduct(){
    let history = useNavigate();
    const [product,setProduct]=useState({
        Name:"",
        Description:"",
        Price:"",
    })
    const {Name,Description,Price} = product;
    const handleChange=(e)=>{
        setProduct({...product,[e.target.name]: e.target.value })
    }
    /*Fetching asynchronous data and display in console*/
    const submitForm= async (e) =>{
        e.preventDefault();

        // Testing: console.log(product);

        await axios.post("http://localhost/crud-project/php-files/create.php",product)
        .then((results)=>{
            console.log(results);
            if(results.data.status==='valid'){
                history(`/read-product`);
            }
        else{
            alert('Please try adding the product again');
        }
    });
    }
    return(
    <form onSubmit={e => submitForm(e)}>
            {/* code for the form */}
        <div className="container_form">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>Add a Product</h2><a href="./components/Home" className="btn btn-secondary float-end">HOME</a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">Name:</div>
                <div className="col-md-6">
                    <input type="text" name="Name" className="form-control" value={Name} onChange={e => handleChange(e)}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">Description:</div>
                <div className="col-md-6">
                    <input type="text" name="Description" className="form-control" value={Description} onChange={e => handleChange(e)}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">Price:</div>
                <div className="col-md-6">
                    <input type="text" datatype="currency" name="Price" className="form-control" value={Price} onChange={e => handleChange(e)}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Link className="btn btn-outline-warning" to={`/create-product/${product.id}`}>Add Product</Link>
                </div>  
            </div>
        </div>
    </form>
    )
}

export default CreateProduct;