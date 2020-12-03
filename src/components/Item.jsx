import {ListGroupItem, Button, Row, Col} from "reactstrap";

const Item = ({index, item, Deletor, ...rest}) => (
    <ListGroupItem>
        <Row>
            <Col><p>{item}</p></Col>
            <Col><Button outline color="danger" onClick = {e => Deletor(index)}>X</Button></Col>
        </Row>  
    </ListGroupItem>    
);

export default Item;