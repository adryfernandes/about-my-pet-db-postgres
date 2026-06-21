export declare const Sex: {
    readonly MALE: "MALE";
    readonly FEMALE: "FEMALE";
    readonly OTHER: "OTHER";
};
export type Sex = (typeof Sex)[keyof typeof Sex];
