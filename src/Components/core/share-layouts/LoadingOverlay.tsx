import React from 'react';
import { Progress } from 'antd';
import './styles.scss';
import { LoadingOverlayProps } from '../../../interfaces/layouts/ShareLayout';

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
    visible = false,
    message = 'Loading system data',
    subMessage = 'This takes a few seconds',
}) => {
    return (
        <div className={`shared-loading-overlay ${visible ? 'visible' : ''}`}>
            <div className="not-found">
                <div className="not-found-content">
                    <img src="./images/ic_loading.94e31f1a.svg" alt="loading" />
                    <p className="text-lg font-bold mb-2 text-black text-center">{message}</p>
                    <Progress
                        percent={visible ? 100 : 20}
                        showInfo={false}
                        status="active"
                        className="w-4/5"
                        strokeColor="#1C1917"
                        style={{
                            height: '4px',
                            borderRadius: '100px',
                        }}
                    />
                    <p className="text-xs text-black mt-6 mb-0 text-center">{subMessage}</p>
                </div>
            </div>
        </div>
    );
};

export default LoadingOverlay;
