import React from 'react';
import Category from '../category/Category'



class ProductTable extends React.Component {

    render(){
        const categories = {};
        this.props.products.forEach((productObj)=>{
                categories[productObj.category] = true;
    //                               |
    //                         'electronics'
    // line 12 equates to categories['electronics'] = true
    // we end up with an object like this {electronics: true, sporting goods: true}
        });
        const categoryArray = Object.keys(categories);
//      then we pull the keys out of it into an array (we did all this to avoid using .includes inside of a loop)



        return(
            <div style={{border: '1px solid blue'}}>

                {categoryArray.map((category)=>{
                    return <Category key={category} category={category} products={this.props.products} />
                })}

                {/* {this.props.products.data.map((product)=>{
                   return <ProductRow {...product} key={product.id} />
                })} */}
            </div>
        )
    }


}

export default ProductTable;