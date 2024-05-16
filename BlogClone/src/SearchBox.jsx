import Icon from "./Icon"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export default function SearchBox() {


    return (
        <div className="SearchBox">
            <input type="text" placeholder="Search for something..." className="p-2 w-1/4 outline outline-1 rounded outline-slate-300 hover:outline-slate-400 transition-all ease-in-out delay-3 flex-grow w-96" />
            <Icon iconName={faMagnifyingGlass} />

        </div>
    )
}