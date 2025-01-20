import { ExclamationCircleOutlined } from '@ant-design/icons';
import React from 'react';

interface RequiredProps {
    error?: boolean;
}

const Required: React.FC<RequiredProps> = ({ error = false }) => {
    return (
        <div className="flex items-center -mt-3.5 text-stone-500 text-xs">
            {!error ? (<>
                <ExclamationCircleOutlined
                    style={{ color: '#57534e', fontSize: 14, marginTop: '1px', marginRight: '4px' }}
                />
                <span style={{ fontSize: '14px', color: '#57534e' }}>
                    Phone or ID No is required
                </span></>) : (
                <span style={{ fontSize: '14px', color: '#ff4d4f' }}>
                    Phone or ID No is required
                </span>
            )}
        </div>
    );
};

export default Required;
