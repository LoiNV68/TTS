import { Divider, Form } from 'antd'
import React from 'react'
import { SelectDropDown } from '../../components/button'

const RoomInformation = () => {
    return (
        <div className='room-wrapper'>
            <div className="room-search">
                <Form>
                    <div className="room-search-list" style={{gap: "16px"}}>
                        <SelectDropDown />
                        <Divider type="vertical" className="h-6 m-0 border-[#D6D3D1] border" />
                        <SelectDropDown />
                        <Divider type="vertical" className="h-6 m-0 border-[#D6D3D1] border" />
                        <SelectDropDown />
                        <Divider type="vertical" className="h-6 m-0 border-[#D6D3D1] border" />
                        <SelectDropDown />
                    </div>
                </Form>
            </div>
            <div className="room-result">
                <div className="no-data-found show">
                    <img src="https://ta-portal-stg.fourier.group/assets/ic_not_found_black.1cbd5bec.svg" alt="" style={{ width: "100px", marginBottom: "16px" }} />
                    <div className="no-data-txt">No data found</div>
                </div>
            </div>
        </div>
    )
}

export default RoomInformation