import React from "react";
import { Card, Button, } from "semantic-ui-react";

const FlashCard = ({ flashCards, remove }) => (
  <Card.Group itemsPerRow={3} >
  <Card>
    {
      flashCards.map( FlashCard => (
    <Card.Content key={FlashCard.id} {...FlashCard} remove={remove} >
      <Card.Header>{flashCards.front}</Card.Header>
      <Card.Description>{flashCards.back}</Card.Description>
        <Button basic color='blue'>
          Edit
        </Button>
        <Button basic color='red'>
          Delete
        </Button>
    </Card.Content>
  ))
      }
  </Card>
  </Card.Group>

 
);
export default FlashCard;
