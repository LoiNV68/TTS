import React from 'react'
import { CustomButton } from '../../button'

const FooterPage = () => {
    return (
        <div className='page-footer'>
            <div></div>
            <div className='page-footer-action'>
                <CustomButton text='Close' outline />
                <CustomButton text='Book' primary />
            </div>
        </div>
    )
}

export default FooterPage