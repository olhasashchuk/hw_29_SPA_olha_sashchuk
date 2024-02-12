import { Button } from './Button.jsx';
import {useDispatch} from "react-redux";
import {deleteData} from "../../engine/todo/thunks.js";
export function ListItem(props) {
    const dispatch = useDispatch();
    const { id, text } = props;
    const removeItem = ()=> {
        dispatch (deleteData(id));
    }
    return (
        <li className="list_component">
            <input id={id} className="" type="checkbox" />
            <label
                htmlFor={id}
                className="list_component_text"
            >
                {text}
            </label>
            <Button className="bg-gray-200 hover:bg-gray-300 active:bg-gray-200" onClick={removeItem}>Remove</Button>
        </li>
    )
}