import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Icon({ iconName }) {

    const hoverClasses = 'hover:bg-indigo-100 hover:text-indigo-700 hover:outline hover:outline-1 hover:outline-slate-200';
    const baseClasses = `text-2xl p-2 rounded ${hoverClasses}`;
    const conditionalClasses = iconName === faMagnifyingGlass ? 'relative right-10 top-2.5' : '';

    return (
        <button>
            <FontAwesomeIcon
                className={`${baseClasses} ${conditionalClasses}`}
                icon={iconName}
            />
        </button>
    );
}
