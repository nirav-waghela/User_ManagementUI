import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    updateProduct,
    getAllProducts,
    deleteProduct,
    getAllGroups
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
                    allGroups={this.props.groups}
                    getAllGroups={this.props.getAllGroups}
                />

            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return{
        products:state.Root.products,
        groups:state.Root.allGroups
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllProducts: (data) => dispatch(getAllProducts(data)),
        updateProduct: (payload) => dispatch(updateProduct(payload)),
        deleteProduct: (id) => dispatch(deleteProduct(id)),
        getAllGroups:(data) => dispatch(getAllGroups(data)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);

