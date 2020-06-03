export interface Item {
    key?: string;
    value?: any;
    label?: string;
    class?: string;
    required?: boolean;
    disabled?: boolean;
    options?: Item[];
}
