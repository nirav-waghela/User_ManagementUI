import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addProduct} from '../store/actions'
import AddProduct from '../components/addProduct'

class AddProductWrapper extends Component{
    render(){
        console.log(this.props)
        return(
            <AddProduct addProduct={this.props.addProduct}/>
        )
    }
}
function mapStateToProps(state){
    return{
        ...state
    }
}

function mapDispatchToProps(dispatch){
    return{
        addProduct:(payload)=> dispatch(addProduct(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddProductWrapper);