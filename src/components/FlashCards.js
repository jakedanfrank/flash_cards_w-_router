import React, {Component} from "react";
import { Container, Header, } from "semantic-ui-react";
import FlashCard from "./FlashCard";
import CardForm from "./CardForm";

class FlashCards extends Component {
  state = {
    flashCards: [
      {id: 1, front: "Front 1", back: "Back 1", },
      {id: 2, front: "Front 2", back: "Back 2", },
      {id: 3, front: "Front 3", back: "Back 3", },
    ]
  };
  
  getId = () => {
    return Math.floor((1 + Math.random()) *0x10000);
  };

  addFlashCard = (FlashCardData) => {
    const FlashCard = {id: this.getId(), ...FlashCardData, }
    this.setState({ flashCards: [FlashCard, ...this.state.flashCards], });
  };

  removeFlashCard = (id) => {
    const flashCards = this.state.flashCards.filter( FlashCard => {
      if (FlashCard.id !== id)
      return FlashCard 
    });
    this.setState({ flashCards: [...flashCards], });
  }

  render() {
    return (
  
      <Container textAlign="center" style={{ paddingTop: "35px" }}>
        <Header as="h1">FLASH CARDS</Header>
        <CardForm add={this.addFlashCard} />
        <FlashCard flashCards={this.state.flashCard} remove={this.removeFlashCard} />
      </Container>
    )
  };
};
    
export default FlashCards;


