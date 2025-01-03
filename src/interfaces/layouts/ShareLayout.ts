export interface ShareLayoutProps {
    children: React.ReactNode;
    showHeader?: boolean;
    buttons?: {
        export?: boolean;
        add?: boolean;
        reload?: boolean;
        cancel?: boolean;
    };
    type?: "content" | "filter";
    handleExport?: () => void;
}

export interface LoadingOverlayProps {
    visible?: boolean;
    message?: string;
    subMessage?: string;
}