import NavLeft from "./NavLeft";
import NavRight from "./NavRight";




export default function NavBar() {
    return (
        <nav className="flex justify-between items-center  px-16 pt-1 pb-2 bg-white">
            <NavLeft />
            <NavRight />
        </nav>
    )
}