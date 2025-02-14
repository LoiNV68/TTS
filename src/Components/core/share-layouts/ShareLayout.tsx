import React, { Fragment, useState } from "react";
import "./styles.scss";
import { CustomButton, SelectDropDown } from "../../button";
import { ShareLayoutProps } from "../../../interfaces/layouts/ShareLayout";
import { Form } from "antd";
import { AdvancedSearch, MyAdvancedSearchInput } from "../../filter";
import { MyInput } from "../../input";

const ShareLayout: React.FC<ShareLayoutProps> = ({ children, buttons = {}, leftHeader = false, rightHeader = false, type, handleExport, handleOpenModal }) => {
    const [form] = Form.useForm();
    const [searchFilterAdvanced, setSearchFilterAdvanced] = useState(false);
    const layoutContent = {
        content: <div className="shared-layout-content">{children}</div>,
        filter: <div className="content-filter">{children}</div>,
    };
    return (
        <Fragment>
            <div className="content">
                <div className="content-header header">
                    {leftHeader && (
                        <div className="content-header-left">
                            {buttons?.export && <CustomButton text="Export" iconName="export" outline onClick={handleExport} />}
                            {buttons?.add && <CustomButton text="Add" iconName="plus" outline onClick={handleOpenModal} />}
                            {buttons?.reload && <CustomButton text="Reload" iconName="reload" outline />}
                            {buttons?.cancel && <CustomButton text="Cancel" iconName="cancel" outline />}
                        </div>
                    )}
                    {rightHeader && (
                        <div className="content-header-right" >
                            <Form>
                                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                                    <SelectDropDown />
                                    <MyAdvancedSearchInput />
                                    <CustomButton iconName="filter" outline onClick={() => setSearchFilterAdvanced(true)}/>
                                </div>
                            </Form>
                        </div>
                    )}
                </div>
                {type ? layoutContent[type] : children}
                <AdvancedSearch form={form} open={searchFilterAdvanced} onClose={() => setSearchFilterAdvanced(false)}>
                    <MyInput formItem={{
                        label: 'Search',
                        name: 'search',
                    }} />
                </AdvancedSearch>

            </div>
        </Fragment>
    );
};

export default ShareLayout;