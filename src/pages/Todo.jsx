import {Provider} from "react-redux"
import {Form} from "../components/todoComponents/Form.jsx";
import {List} from "../components/todoComponents/List.jsx";
import {store} from "../shared/store.js"
import {Footer} from "../components/todoComponents/Footer.jsx";
import {useContext} from "react";
import {ThemeContext} from "../helpers/context.js";

function Todo() {
    const [color] = useContext(ThemeContext)
    return (
        <Provider store={store}>
            <div className="container mx-auto flex-grow bg-gray-50 w-full rounded my-16 p-4" style={{color: color.colorFont, backgroundColor: color.colorBg}}>
                <div className="flex flex-col items-center py-8">
                    <h2 className="text-lg font-bold uppercase">todo</h2>
                    <span className="mt-2.5 w-12 h-0.5 bg-[#00A4E5]"></span>
                </div>
                <Form />
                <List />
                <Footer/>
            </div>
        </Provider>
    )
}

export default Todo