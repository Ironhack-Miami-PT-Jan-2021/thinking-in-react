import React from 'react';
import ProductRow from '../productRow/ProductRow';


class Category extends React.Component {

    render(){

        const filteredProducts = this.props.products.filter((product)=>{
            return product.category === this.props.category;
        });

        return(
            <div>
                <h2>{this.props.category}</h2>
                {filteredProducts.map((product)=>{

                    return <ProductRow {...product} key={product.id} />

                })}

            </div>
        )


    }


}

export default Category;