import React, { Fragment } from "react";
import "./styles.scss";
import { CustomButton } from "../../button";
import { ShareLayoutProps } from "../../../interfaces/layouts/ShareLayout";

const ShareLayout: React.FC<ShareLayoutProps> = ({ children, buttons = {}, showHeader = false, type, handleExport }) => {
    const layoutContent = {
        content: <div className="shared-layout-content">{children}</div>,
        filter: <div className="content-filter">{children}</div>,
    };
    return (
        <Fragment>
            <div className="content">
                {showHeader && (
                    <div className="content-header header">
                        <div className="content-header-left">
                            {buttons?.export && <CustomButton text="Export" iconName="export" outline onClick={handleExport} />}
                            {buttons?.add && <CustomButton text="Add" iconName="plus" outline />}
                            {buttons?.reload && <CustomButton text="Reload" iconName="reload" outline />}
                            {buttons?.cancel && <CustomButton text="Cancel" iconName="cancel" outline />}
                        </div>
                        <div className="content-header-right"></div>
                    </div>
                )}
                {type ? layoutContent[type] : children}


            </div>
        </Fragment>
    );
};

export default ShareLayout;