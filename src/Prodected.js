import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Prodected = (props) => {
    const history=useHistory();
    useEffect(() => {
        if(!localStorage.getItem('user-details'))
        {
            history.push("./login")
        }
    }, [])
    let Cmp = props.Cmp
    return (
        <div>
            <Cmp />
        </div>
    )
}

export default Prodected

