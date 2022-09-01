import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function UpdateProduct(){
    let history = useNavigate();
    const {id} = useParams();
    const [product,setProduct]=useState({
        id:"",
        Name:"",
        Description:"",
        Price:""
    })
    useEffect(()=>{
        loadProducts();
    }
    )
    const {Name,Description,Price} = product;
    const handleChange=(e)=>{
        setProduct({...product,[e.target.name]: e.target.value })
    }
    /*Fetching asynchronous data and display in console*/
    const updateForm= async (e)=>{
        e.preventDefault();
        console.log(product);

        await axios.post("http://localhost/crud-project/php-files/update.php",product)
        .then((results)=>{
            console.log(results);
            if(results.data.status==='valid'){
                history(`/read-product`);
            }
        else{
            alert('Please try updating the product again');
        }
    });
}
const loadProducts=async ()=>{

    const results = await axios.get("http://localhost/crud-project/php-files/edit.php?id="+id);
    setProduct(results.data);
}
    return(
        <form onSubmit={e => updateForm(e)}>
        {/* code for the form */}
            <div className="container_form">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2>Update a Product</h2>
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
                            <button type="button" className="btn btn-outline-warning" value="addProduct">Update Product</button>
                        </div>  
                </div>
            </div>
        </form>
    )
}

export default UpdateProduct;
