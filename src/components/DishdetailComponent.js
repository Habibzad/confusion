import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //state goes here
        }
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="col-12 col-md-5 m1">
                    <Card>
                        <CardImg src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    renderComments(comments) {
        if (comments != null) {
            const commentListItem = comments.map(comment => {
                return (
                    <li key={comment.id}>
                        <p><b>Comment: </b>{comment.comment}</p>
                        <p><i>--{comment.author}, {comment.date}</i></p>
                    </li>
                );

            });
            return (
                <div className="col-12 col-md-5 m1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentListItem}
                    </ul>
                </div>
            );
        }
        else {
            return (
                <div></div>
            )
        }

    }

    render() {
        if (this.props.dish != null) {
            return (
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }

    }
}

export default Dishdetail;