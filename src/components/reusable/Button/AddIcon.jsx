import React from 'react'
import { Link } from 'react-router-dom';
import addIcon from '../../../assets/icons/addIcon.svg'

const AddIcon = ({ path, addStyle }) => {
    return (
        <Link to={path} className={`absolute right-0 bottom-[70px] ${addStyle}`}>
            <img src={addIcon} alt="addIcon" />
        </Link>
    )
}

export {AddIcon}
