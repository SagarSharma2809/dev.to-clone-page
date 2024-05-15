import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchIcon() {
    return (
        <>
            <button>
                <FontAwesomeIcon className='text-2xl hover:bg-indigo-100 hover:text-indigo-700 p-2 rounded-lg' icon={faMagnifyingGlass} />
            </button>
        </>
    )
}