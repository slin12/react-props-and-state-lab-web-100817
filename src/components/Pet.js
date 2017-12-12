import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super(props);

    this.adoptPet = this.adoptPet.bind(this)
  }

  adoptPet() {
    this.props.onAdoptPet(this.props.pet.id)
  }

  checkAdopted() {
    if (this.props.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={this.adoptPet}>Adopt pet</button>
    }
  }

  render() {
    const adoptedButton = this.checkAdopted();
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} gender: {this.props.pet.gender === 'female' ? '♀' :  '♂'}</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {adoptedButton}
        </div>
      </div>
    );
  }
}

export default Pet;
