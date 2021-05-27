import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import DISHES from '../shared/dishes';
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        dishes: state.dishes
    }
}
class Main extends Component {

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dish={this.props.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === this.props.selectedDish)[0]} />
            </div>
        );
    }
}

export default (connect(mapStateToProps)(Main));