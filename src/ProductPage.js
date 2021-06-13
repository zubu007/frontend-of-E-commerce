import Card from './Card'
import React from 'react'
import data from './Data'
import './Card.css'


class ProductPage extends React.Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    fetchData(){
        fetch('http://127.0.0.1:8000/api/datas/')
        .then(res => res.json())
        .then((data)=>{
            this.setState({
                data: data
            });
            console.log(data)
        })
    }

    componentDidMount(){
        this.fetchData();
    }

    render(){
        const empData = this.state.data;
        const key = "category"
        const value = this.props.location.state
        const result = empData.filter(d => d[key]==value);
 

    return (
        <div className='product-page'>
            <div className='product-page-container'>
            <h1>{value}</h1>
            <div className="cards">
            {
                result.map((product) => (
                    <Card image = {product.image} name={product.name} description ={product.description} price = {product.price} category = {product.category} stars = {product.stars}/>
                ))
            }
            </div>
            </div>
            
        </div>
    )
    }
}

export default ProductPage
