import SearchBox from "./SearchBox";
import Logo from "./Logo";


export default function NavLeft() {

    let url = "http://localhost:5173/";
    return (
        <div className="flex items-center space-x-5 h-full">
            <Logo link={url} />
            <SearchBox />
        </div>
    )

}