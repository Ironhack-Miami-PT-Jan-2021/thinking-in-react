import React from 'react';



class ProductRow extends React.Component {

    render(){
         const stocked = this.props.stocked;
         const styleObj = {color: stocked? 'black' : 'red'}
        return(
            <div>
                <p style={styleObj}>{this.props.name}</p>
            </div>
        )
    }


}

export default ProductRow;