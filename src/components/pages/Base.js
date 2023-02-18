import React from 'react'
import MySidebar from '../sidebar/MySidebar'

const Base = ({children}) => {
    return (
        <div className='d-flex flex-row'>
            <div className='col-auto col-md-2 col-sm-2 col-lg-2'>
                <MySidebar/>

            </div>
            <div className='col-md-10 col-sm-10 col-lg-10'>
                {children}

            </div>
        </div>
    )
}

export default Base
