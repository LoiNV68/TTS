import React from 'react'
import { MyCard, MyCardContent } from '../../components/core'
import Remark from '../guest-profile/Remark'
import { MyTextArea } from '../../components/input'

const DetailInformation = () => {
    return (
        <MyCard header='DETAIL INFORMATION' >
            <div className="charge-container">
                <div className="charge-item">
                    <p className="charge-label">
                        Total Room Charge
                    </p>
                    <span>0</span>
                </div>
                <div className="charge-item">
                    <p className="charge-label">
                        Special Service Charge
                    </p>
                    <span>0</span>
                </div>
                <div className="total charge-item">
                    <p className='charge-label-price'>Total Charge</p>
                    <span className='charge-price'>0</span>
                </div>
                <div className="charge-item">
                    <p className='charge-label-price'>Deposit</p>
                    <span className='charge-price'>-</span>
                </div>
                <div className="charge-item">
                    <p className='charge-label-price'>Amount Paid</p>
                    <span className='charge-price'>-</span>
                </div>
                <div className="charge-item">
                    <p className='charge-label-price'>Balance</p>
                    <span className='charge-price'>0</span>
                </div>
            </div>
            <div className="promotion-voucher">
                <MyCardContent>
                    <div className="promotion">
                        <div className="title">
                            <p>Promotion</p>
                            <a className='btn'>Detail</a>
                        </div>
                        <div className="container">
                            <span>Breakfast</span>
                        </div>
                    </div>
                    <div className="voucher">
                        <div className="title">
                            <p>Voucher</p>
                            <a className='btn'>Detail</a>
                        </div>
                        <div className="container">
                        </div>
                    </div>
                </MyCardContent>
            </div>
            <div className="remark-container">
                <h2>Remark</h2>
                <MyTextArea formItem={{
                    hideLabel: true,
                    name: "remark",
                }} rows={4} maxLength={500} />
            </div>
        </MyCard>
    )
}

export default DetailInformation