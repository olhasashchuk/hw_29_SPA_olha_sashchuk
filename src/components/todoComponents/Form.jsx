import { Button } from "./Button.jsx";
import {useDispatch, useSelector} from "react-redux";
import selectors from "../../engine/todo/selectors.js";
import { setData } from "../../engine/todo/thunks.js";
export function Form() {
    const dispatch = useDispatch()
    const loading = useSelector(selectors.loading);
    const items = useSelector(selectors.items)
    const onSubmit = (event)=> {
        dispatch(setData(event, items));
    }
    return (
        <form className="form" onSubmit={onSubmit}>

            <input type='text' placeholder='Enter Todos' name="text_input"
                   className="px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500" />

            <Button className="bg-gray-200 hover:bg-gray-300 active:bg-gray-200" disabled={loading}>
                Send
            </Button>
        </form>
    )
}