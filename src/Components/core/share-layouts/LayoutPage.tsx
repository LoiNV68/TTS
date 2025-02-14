import React, { ReactNode } from 'react';
import "./styles.scss";

interface LayoutPageProps {
    type?: "share" | "page";
    children: ReactNode;
}

const LayoutPage: React.FC<LayoutPageProps> = ({ type = "share", children }) => {
    const layoutType = {
        share: 'shared-layout-container',
        page: 'page-wrapper'
    };

    return <div className={layoutType[type]}>{children}</div>;
};

export default LayoutPage;
