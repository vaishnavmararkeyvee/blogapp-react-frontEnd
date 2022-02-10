import React from 'react';
import "./AddArticle.css";
import axios from 'axios';
import MyForm from './DbForm';
import { useNavigate } from "react-router-dom";

const AddArticle = () => {
    let navigate = useNavigate();
    var [myvalue, setmyValue] = MyForm({ username: "", title: "", content: "" })
    const addArticles = () => {
        console.log(myvalue)
        axios.post("http://localhost:3005/api/add", myvalue).then(
            (res) => {
                alert("Successfully Added Article")
                navigate("../articlelist", { replace: true })
                console.log("in axios post" + res.data)

            }
        )
    }
    return (

        <div className="container">
            <div className="row">
                <h1>Add Article</h1>
            </div>
            
            <div className="row input-container">
                <div className="col-xs-12">
                    <div className="styled-input wide">
                        <input type="text" required name="username" value={myvalue.username} onChange={setmyValue} />
                        <label>Name</label>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="styled-input">
                        <input type="text" required name="title" value={myvalue.title} onChange={setmyValue} />
                        <label>Title</label>
                    </div>
                </div>

                <div className="col-xs-12">
                    <div className="styled-input wide">
                        <textarea required name="content" value={myvalue.content} onChange={setmyValue}></textarea>
                        <label> Content</label>
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="btn-lrg submit-btn" onClick={addArticles}>Add Article</div>
                </div>
            </div>
        </div>

    );
};

export default AddArticle;