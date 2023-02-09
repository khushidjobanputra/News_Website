import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({postsPerPage, totalPosts, paginate}) => {

    const pageNumber = [];

    for(let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++){
        pageNumber.push(i);
    }
    return (  
        <nav>
            <ul className="pagination">
            {pageNumber.map(number =>{
                return(
                <li key={number} className="page-item">
                    <Link onClick={()=> paginate(number)} className="page-link">
                        {number}
                    </Link>
                </li>
                )
            })}
            </ul>
        </nav>
    );
}
 
export default Pagination;