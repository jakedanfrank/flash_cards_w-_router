import React, { Component} from "react";
import { Form, } from "semantic-ui-react";


class CardForm extends Component {
  state = { front: "", back: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ front: "", back: "", });

  }

  handleChange =  (e) => {
    this.setState({ [e.target.front]: e.target.value, });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            label="Card Front"
            placeholder="Card Front"
            name="front"
            vaule={this.state.front}
            onChange={this.handleChange}
            required
          />
          <Form.Input
            label="Card Back"
            placeholder="Card Back"
            name="back"
            value={this.state.back}
            onChange={this.handleChange}
            required
          />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

export default CardForm;
