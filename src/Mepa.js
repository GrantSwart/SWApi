import React, { Component } from "react";
import Person from "/src/Person";

class Mepa extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allAEPA: []
    };
  }

  componentDidMount() {
    this.getStarWarsData();
  }

  getStarWarsData() {
    const url = "https://swapi.dev/api/people/";

    fetch(url)
      //call response.json() to convert data into a readable stream
      //xml response.text
      //iimage response.blob
      .then((response) => response.json())
      //conversion methods return another promise of the actual data
      .then((data) => {
        //data json object
        console.log(data);
        //show results in array - there are 10
        console.log(data.results);
        //print name value of first object in results
        console.log(data.results[0].name);
        //curly braces to ensure valid Javascript object
        this.setState({ allAEPA: data });
      });
  }

  render() {
    const data = [{ name: "test1" }, { name: "test2" }];
    const list = data.map((d) => <li key={d.name}>{d.name}</li>);

    return <div></div>;
  }
}

export default Mepa;
