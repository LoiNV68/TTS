import React from 'react'
import { MyInput } from '../input'
import { SearchIcon } from '../icons'

const MyAdvancedSearchInput = () => {
    return (
        <MyInput formItem={{ style: { margin: "0" , width: "430px"}, name: "advanced-input", isShowLabel: false }}
            placeholder='Search by Room type, Package, Alotment ID'
            suffix={<SearchIcon stroke="black" />}  
        />
    )
}

export default MyAdvancedSearchInput