import {ListGroupItem} from "reactstrap";

const ListItem = ({item, setName, ...rest}) => (
    <ListGroupItem>
        <p>{item}</p>
    </ListGroupItem>
);

export default ListItem;