import React from "react"
import "./styles.scss"

interface MyCardProp {
    header: string;
    children: React.ReactNode;
}

const MyCard: React.FC<MyCardProp> = ({ header, children}) => {
    return (
        <div className="my-card">
            <div className="my-card-header">
                <p>{header.toUpperCase()}</p>
            </div>
            <div className={`my-card-body`}>
                {children}
            </div>
        </div>
    )
}

export default MyCard;
