import React from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";

function SearchContainer() {
  return (
    <div>
      Hey you are search
      <Container className="d-flex justify-content-center">
        <Form className="d-flex justify-content-center gap-2">
          <FormControl type="text" placeholder="Syllabus" />
          <FormControl type="text" placeholder="Topic" />
          <div>
            <input type="text" placeholder="Year" />

            <input type="text" placeholder="Paper" />

            <input type="text" placeholder="Difficulty level" />
          </div>
          <Button type="submit" />
        </Form>
      </Container>
    </div>
  );
}

export default SearchContainer;
