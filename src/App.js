import axios from 'axios';
import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      NewsData: []
    }
  }

  componentDidMount = () => {
    axios.get("https://recengine.intoday.in/recengine/at/getarticles")
      .then(async res => (
        await this.setState({
          NewsData: res.data.data
        })
      ))
  }

  render() {
    return (
      <>
        {this.state.NewsData.map((value, index) => (
          <span>
            <th>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={value.mobile_image} />
                <Card.Body>
                  <Card.Title>{value.title}</Card.Title>
                </Card.Body>
              </Card>
            </th>
          </span>
        ))
        }
      </>
    )
  }
}
