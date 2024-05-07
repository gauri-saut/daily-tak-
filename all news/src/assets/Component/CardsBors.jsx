import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function CardsBors({ Title, Description, Img}) {
  return (
  
    <>
    

<div className="ABP">

<Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Img} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{Description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

</div>
    

</>


    
  );
}

export default CardsBors;
