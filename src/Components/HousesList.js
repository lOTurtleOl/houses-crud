import React from 'react';
import { House } from './House';
import { housesApi } from '../rest/HousesApi';

// class to hold houses array in state
export class HousesList extends React.Component {
    state = {
        houses : []
    };

    // on render
    componentDidMount() {
        this.fetchHouses();
    }

    // method to set state of array to the api data
    fetchHouses = async () => {
        const houses = await housesApi.get();
        this.setState({ houses });
    }

    // method that takes argument updateHouse and pushes it to the api before getting the new list
    updateHouse = async (updateHouse) => {
        await housesApi.put(updateHouse);
        this.fetchHouses();
    };

    // map over array, for each house create a House component with house objects, id key updateHouse
    render() {
        return (
            <div className='house-list'>
                {this.state.houses.map((house) => (
                    <House
                        house={house}
                        key={house._id}
                        updateHouse={this.updateHouse}
                    />
                ))}
            </div>
        )
    }
}

