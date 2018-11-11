// Modules
import React from 'react';

// Components
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// Styles 
import '../../../style/list.css';

const CardCreator = ({ handleSubmit }) => (
  <Form  onSubmit = {handleSubmit}>
    <span className="ListCreator">
      <FormGroup>
        <Label for="cardName">Card Name</Label>
        <Input type="text" name="cardName" placeholder="deliver logo" />
      </FormGroup>
      <FormGroup>
        <Label for="dueDate">Due date</Label>
        <Input type="date" name="dueDate" placeholder="" />
      </FormGroup>
    </span>
    <Button className="submit" type="submit" >Submit</Button>
  </Form>
);

export default CardCreator; 