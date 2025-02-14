export interface ShareLayoutProps {
    children: React.ReactNode;
    leftHeader?: boolean;
    rightHeader?: boolean;
    buttons?: {
        export?: boolean;
        add?: boolean;
        reload?: boolean;
        cancel?: boolean;
        filter?: boolean;
    };
    type?: "content" | "filter";
    handleExport?: () => void;
    handleOpenModal?: () => void;
}

export interface LoadingOverlayProps {
    visible?: boolean;
    message?: string;
    subMessage?: string;
}