import useFetch from "./useFetch";

const Carddetails = () => {
    
    const{data} = useFetch('https://newsapi.org/v2/everything?q=tesla&from=2022-11-30&sortBy=publishedAt&apiKey=API_KEY');
    
    return ( 
        <div className="Carddetails">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                {data.description}
                </Card.Text>
                <Button variant="primary">Learn more</Button>
            </Card.Body>
            </Card>
        </div>
    );
}
 
export default Carddetails;