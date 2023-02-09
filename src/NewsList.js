//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import {Link} from "react-router-dom";
import { Col } from "react-bootstrap";

const NewsList = ({data}) => {

    return ( 
        <div className="justify-content-md-center">
            <Row xs={1} md={3} className="g-4">
            {
                data.map((news)=>(
                    <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={news.urlToImage} />
                    <Card.Body>
                        <Card.Title>{news.title}</Card.Title>
                        <Card.Text>
                        {news.description}
                        </Card.Text>
                        <Link to={`/news/${news.title}`}> Learn More...</Link>
                    </Card.Body>
                    </Card>
                    </Col>
                ))
            }
            </Row>
        </div>
    );
}
 
export default NewsList;