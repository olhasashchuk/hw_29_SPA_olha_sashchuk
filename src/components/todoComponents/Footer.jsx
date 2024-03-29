import {Button} from "./Button.jsx";
import {useDispatch, useSelector} from "react-redux";
import selectors from "../../engine/todo/selectors.js"
import {clearAllItems} from "../../engine/todo/thunks.js";

export function Footer () {
    const items = useSelector(selectors.items)
    const dispatch = useDispatch();

    const onClear = () => {
        dispatch(clearAllItems())
    }

    return (
        <div className="flex justify-between">
            <span>Count: {items.length}</span>
            <Button className="bg-[#00A4E5] hover:bg-blue-700 active:bg-blue-600" onClick={onClear}>Clear</Button>
        </div>
    )
}