import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addProduct,createGroup} from '../store/actions'
import AddProduct from '../components/addProduct'

class AddProductWrapper extends Component{
    render(){
        console.log(this.props)
        return(
            <AddProduct createGroup={this.props.createGroup}/>
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
        createGroup:(payload)=> dispatch(createGroup(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddProductWrapper);