import React from "react"
import { CustomButton } from "../../button";
import "./styles.scss"
interface MyCardProp {
    header?: string;
    children: React.ReactNode,
    classType?: string;

}
const MyCardContent: React.FC<MyCardProp> = ({ header, children, classType = "" }) => {
    return (
        <div className='my-card-content text-gray text-sm bg-stone-50 p-6 rounded-lg'>
            {header &&
                <div className="my-card-content-header mb-6">
                    <p className="text-stone-700 font-medium">{header.toUpperCase()}</p>
                    <div className="my-card-content-more-action">
                        <CustomButton text="Detail" detail />
                    </div>
                </div>}
            <div className={`my-card-content-body  ${classType}`}>
                {children}
            </div>
        </div>
    )
}

export default MyCardContent