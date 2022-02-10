import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "./articlelist.css"

const ArticlesList = () => {
    let navigate = useNavigate();
    let [Data, SetData] = useState([]);
    useEffect(() => {
        articleData();
    }, []);

    function articleData() {
        axios.get("http://localhost:3005/api/view")
            .then((response) => {
                console.log(response.data);
                SetData(Data = response.data);
            }
            )
    }
    function updateArticle(event) {
        var id = event.target.getAttribute("name");
        console.log("in update", id)
        var s = `../updatearticle/${id}`;
        console.log(s)
        navigate(s, { replace: true })
    }
    function deleteArticle(event) {
        console.log(event.target.getAttribute("name"))
        axios.post("http://localhost:3005/api/delete", { title: event.target.getAttribute("name") })
            .then((res) => {
                alert("Successfully Deleted");

                navigate("../", { replace: true })

            }
            )
    }

    return (
        <>

            {Data.map((article, key) => (
                <div className='articlelist'>
                    <Link  className="l" key={key} to={`/articlelist/${article._id}`}>

                        <h2>Article Title : "{article.title}"</h2>
                        <h3>UserName : {article.username}</h3>
                    </Link>
                    <button name={article._id} onClick={updateArticle}>Update</button>
                    <button name={article.title} onClick={deleteArticle}>Delete</button>
                </div>




            ))}


        </>
    );
}
export default ArticlesList;