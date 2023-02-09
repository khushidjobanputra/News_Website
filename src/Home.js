import NewsList from "./NewsList";
import useFetch from "./useFetch";
import { useState } from "react";
import Pagination from "./Pagination";
//import Pagination from './Pagination';

const Home = () => {

    const { data } = useFetch();

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = data.slice(firstPostIndex, lastPostIndex);

    //change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (  
        <div className="Home">
            <NewsList data={currentPosts} />
            <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/>
        </div>
    );
}
 
export default Home;