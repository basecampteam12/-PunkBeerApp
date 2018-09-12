import _ from "lodash";
import React, { Component } from "react";
import PropTypes from 'prop-types';
import PunkAPI from 'punkapi-lib';


import SearchBar from './Search_bar';
import BeerList from './beer_list';
import '../styles/App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            beers :  PunkAPI.beers({})
        };
    }

    beerSearch(beer){
       let options = (beer)?{beer_name:beer}:'';
       this.setState({
            beers : PunkAPI.beers(options)
        });
    }

    render() {
        const beerSeach = _.debounce(beer => {
            this.beerSearch(beer);
        }, 300);
        console.log(this.state.beers);
        return (
            <div>
                <SearchBar onSearchTermChange={beerSeach} />
                <BeerList beers={this.state.beers} />
            </div>
        );
    }
}

App.protoType = {
    children: PropTypes.object.isRequired
}


export default App;