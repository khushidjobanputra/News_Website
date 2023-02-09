import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import useFetch from './useFetch';

const Cards = ()  => {
  const { data:news } = useFetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json');
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>
          {news.description}
        </Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;