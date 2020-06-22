import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    updateProduct,
    getAllProducts,
    deleteProduct
} from '../store/actions/index'
import Dashboard from '../components/dashboard'

class Product extends Component {
    render() {
        return (
            <div>
                <Dashboard
                    products={this.props.products}
                    getProducts={this.props.getAllProducts}
                    deleteProduct={this.props.deleteProduct} 
                />

            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return{
        products:state.Root.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllProducts: () => dispatch(getAllProducts()),
        updateProduct: (payload) => dispatch(updateProduct(payload)),
        deleteProduct: (id) => dispatch(deleteProduct(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);

