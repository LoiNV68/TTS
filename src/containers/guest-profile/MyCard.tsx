import React from "react"
interface MyCardProp {
    header: string;
    children: React.ReactNode
}
const MyCard: React.FC<MyCardProp> = ({ header, children }) => {
    return (
        <div className='my-card-content text-gray text-sm bg-stone-50 p-6 rounded-lg'>
            <div className="my-card-content-header mb-6">
                <p className="text-stone-700 font-medium">{header.toUpperCase()}</p>
                <div className="my-card-content-more-action"></div>
            </div>
            <div className="my-card-content-body">
                {children}
            </div>
        </div>
    )
}

export default MyCard