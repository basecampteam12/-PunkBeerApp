import React, { Component } from "react";

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {beer : "" };
        this.onInputChange = this.onInputChange.bind(this);
    }

    render(){
        return(
            <div className="search-bar">
                <input value={this.state.beer} 
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
        );
    }

    onInputChange(beer){
        this.setState({beer});
        this.props.onSearchTermChange(beer);
    }
}

export default SearchBar;