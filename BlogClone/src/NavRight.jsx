import CreateButton from "./CreateButton"
import UserProfile from "./UserProfile"
import Icon from "./Icon"
import { faBell } from '@fortawesome/free-regular-svg-icons'

export default function NavRight() {
    return (
        <div className="flex items-center space-x-5 self-end ">
            <CreateButton />
            <Icon iconName={faBell} />
            <UserProfile />
        </div>
    )
}