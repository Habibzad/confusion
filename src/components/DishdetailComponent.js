import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';


function RenderDish({ dish }) {

    <Card>
        <CardImg src={dish.image} alt={dish.name} />
        <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
        </CardBody>
    </Card>

}

function RenderComments({ comments }) {

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

const DishDetail = (props) => {

    if (this.props.dish != null) {
        return (
            <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.dish.comments} />
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }

}

export default DishDetail;