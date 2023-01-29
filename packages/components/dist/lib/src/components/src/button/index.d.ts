declare const LsButton: import("vue").DefineComponent<{
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
}, {
    props: any;
    attrs: {
        [x: string]: unknown;
    };
    emits: (event: "click", ...args: any[]) => void;
    styleClass: import("vue").ComputedRef<{
        [x: string]: string | boolean | undefined;
        'ls-button': boolean;
        'is-round': boolean;
        'is-disabled': boolean;
    }>;
    myClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    round: boolean;
    disabled: boolean;
}>;
export default LsButton;
