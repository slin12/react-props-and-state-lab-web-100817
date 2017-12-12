import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  petCards() {
    if(this.props.pets.length > 0) {
      return this.props.pets.map(pet => {
        return <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.checkAdopted(pet)}/>
      })
    } else {
      return null
    }
  }

  checkAdopted(pet) {
    if (this.props.adoptedPets.find(adopted => {return adopted === pet.id})) {
      return true
    } else {
      return false
    }
  }

  onAdoptPet= (id) => {
    this.props.onAdoptPet(id)
  }

  render() {
    return (
      <div className="ui cards">
        {this.petCards()}
      </div>
    );
  }
}

export default PetBrowser;
