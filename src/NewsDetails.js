import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
import {Card, ListGroup} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import useFetch from './useFetch';

const NewsDetails = () => {

    const {title} = useParams();

    const {data} = useFetch();

    const getNews = data.find((card) => card.title === title);

    return ( 

        data.length === 0?
        <div></div>:

            <body>
            <Card style={{ width: '50rem' }} >
            
            <Card.Body>
                <Card.Title>{getNews.title}</Card.Title>
                <ListGroup className="list-group-flush">
                <ListGroup.Item>{getNews.author}</ListGroup.Item>
                <ListGroup.Item>{getNews.publishedAt}</ListGroup.Item>
                
            </ListGroup>
                <Card.Text>
                {getNews.description}
                </Card.Text>
                <Card.Img src={getNews.urlToImage} />
                <Card.Text>
                {getNews.content}
                </Card.Text>
            </Card.Body>
                
            </Card>
            </body>

    );
}
 
export default NewsDetails;