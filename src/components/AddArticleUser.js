import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "./articlelist.css"

const ArticlesListUser = () => {
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
    

    return (
        <>

            {Data.map((article, key) => (
                <div className='articlelist'>
                    <Link  className="l" key={key} to={`/articlelist/${article._id}`}>

                        <h2>Article Title : "{article.title}"</h2>
                        <h3>UserName : {article.username}</h3>
                    </Link>
                    
                </div>




            ))}


        </>
    );
}
export default ArticlesListUser;