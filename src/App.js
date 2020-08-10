import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {

  state = {
    cars: [
      {
        name: 'Первый компонент',
        year: 2015
      },
      {
        name: 'Второй компонент',
        year: 2016
      },
      {
        name: 'Третий компонент',
        year: 2017
      },
    ],
    pageTitle: 'React components',
    showCars: true
  }

  onChangeName = (name, index) => {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;

    this.setState({
      cars
    })
  }

  handleInput = (ev) => {
    this.setState({
      pageTitle: ev.target.value
    })
  }

  toggleShowCars = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onDeleteHandler = index => {
    const cars = [...this.state.cars];
    cars.splice(index, 1);

    this.setState({
      cars
    })
  }

  onSelectInput = (ev) => {
    ev.target.select();
  }

  render() {

    let cars = null;

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car 
            key={index}
            onChangeName={event => this.onChangeName(event.target.value, index)}
            onDelete={() => this.onDeleteHandler(index)}
            onSelectInput={event => this.onSelectInput(event)}
            name={car.name} 
            year={car.year}
          />
        )
      });
    }

    return (
      <div className="App">
        <h1>{ this.state.pageTitle }</h1>

        <input type="text" onChange={this.handleInput} />

        <button onClick={this.toggleShowCars}>Toggle Cars</button>

        <div style={{
          marginTop: 20,
          maxWidth: 1200,
          justifyContent: 'center',
          margin: '20px auto 0',
          display: 'grid',
          gap: 20,
          gridTemplateColumns: 'repeat(auto-fit, 280px)',

        }}>{ cars }</div>
        

      </div>
    );
  }
  
}

export default App;
