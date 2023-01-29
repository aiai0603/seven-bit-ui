import type { ExtractPropTypes } from 'vue';
export declare const ButtonType: string[];
export declare const ButtonSize: string[];
export declare const buttonProps: {
    type: {
        type: StringConstructor;
        validator(value: string): boolean;
        default: string;
    };
    size: {
        type: StringConstructor;
        validator(value: string): boolean;
    };
    round: BooleanConstructor;
    disabled: BooleanConstructor;
};
export declare type ButtonProps = ExtractPropTypes<typeof buttonProps>;
