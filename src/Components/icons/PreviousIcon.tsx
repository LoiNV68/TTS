import React from 'react'
interface PreviousIconProps {
    height?: string;
    width?: string;
}
const PreviousIcon: React.FC<PreviousIconProps> = ({ width = "16px", height = "16px" }) => {
    return (
        <svg
            style={{ marginTop: "4px" }}
            width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99967 12.6673L3.33301 8.00065M3.33301 8.00065L7.99967 3.33398M3.33301 8.00065H12.6663" stroke="#57534E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    )
}

export default PreviousIcon