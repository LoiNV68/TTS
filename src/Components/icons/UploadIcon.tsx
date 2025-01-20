import React from 'react'
interface UploadIconProps {
    width?: string;
    height?: string;
    fill?: string;
}
const UploadIcon: React.FC<UploadIconProps> = ({ width = "24", height = "24", fill = "none" }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 32 32" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="16" fill="#ED4E6B" />
            <path
                d="M16.0008 16.6668V22.0002M16.0008 16.6668L13.3341 19.3335M16.0008 16.6668L18.6675 19.3335M10.6675 17.9328C10.1722 17.4268 9.79859 16.8147 9.5749 16.1428C9.35121 15.471 9.28335 14.757 9.37645 14.055C9.46955 13.3531 9.72118 12.6815 10.1123 12.0912C10.5034 11.5009 11.0237 11.0073 11.6338 10.6479C12.2439 10.2884 12.9278 10.0725 13.6337 10.0166C14.3395 9.96058 15.0489 10.066 15.7081 10.3247C16.3672 10.5835 16.9588 10.9889 17.438 11.5102C17.9173 12.0315 18.2716 12.655 18.4742 13.3335H19.6675C20.3112 13.3334 20.9378 13.5404 21.4549 13.9238C21.9719 14.3072 22.3519 14.8468 22.5387 15.4627C22.7256 16.0787 22.7093 16.7384 22.4924 17.3444C22.2755 17.9505 21.8695 18.4707 21.3342 18.8282"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default UploadIcon