import React from 'react';
import data from '../../data.json';
import ProductTable from '../productTable/ProductTable';
import Search from '../search/Search';


class FullTable extends React.Component {

    state={
        products: data.data,
        allProducts: data.data,
    }


    filterResults = (searchTerm) =>{
        const copy = [...this.state.allProducts];
        const results = copy.filter((product)=>{
            return product.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        this.setState({products: results});  
    }

    render(){
        return(
            <div className="full-table">
                <Search executeSearch={this.filterResults} />
                <ProductTable products={this.state.products} />
            </div>
        )
    }


}

export default FullTable;