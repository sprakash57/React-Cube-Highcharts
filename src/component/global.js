import React, { Component } from "react";
import { FormGroup, FormControl, InputGroup, Glyphicon } from "react-bootstrap";
import Gallery from "./Gallery";

class Global extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      items: []
    };
  }

  search() {
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
    console.log(BASE_URL + this.state.query);
    fetch(`${BASE_URL}${this.state.query}`, { method: "GET" })
      .then(response => response.json())
      .then(json => {
        let { items } = json;
        this.setState({ items });
      });
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Book Explorer</h1>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for a book"
              onChange={event => {
                this.setState({ query: event.target.value });
              }}
              onKeyPress={event => {
                if (event.key === "Enter") this.search();
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search" />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <Gallery books={this.state.items} />
      </div>
    );
  }
}

export default Global;
