import React from 'react';


class Search extends React.Component {


    doSearch = (e) => {
        this.props.executeSearch(e.target.value);
    }

    render(){
        return(
            <input type="text" placeholder="search" onChange={this.doSearch} />
        )
    }



}

export default Search;