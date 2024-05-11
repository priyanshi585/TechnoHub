import React, { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        name:"",
        phone:"",
        email:"",
        message:""
    });

    const inputEvent =(event)=>{
        const {name,value} = event.target ;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        })
    };

    const formSubmit =(e)=>{
// e.preventDefault();
alert(`Your Form with Name:${data.name} , Contact No.:${data.phone}, Email: ${data.email} , Message: ${data.message} is successfully submitted.`);
    };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">
                    Contact Us
                </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" required  name="name" value={data.name} onChange={inputEvent}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
                                <input type="tel" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Contact Number" required  name="phone" value={data.phone} onChange={inputEvent}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email address" required  name="email" value={data.email} onChange={inputEvent}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required name="message" value={data.message} onChange={inputEvent}></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;