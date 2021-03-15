import { RateRequest } from "src/typescript/movieRedux";

export interface IPostRate {
    sendRate: (number: number) => void;
    deleteRate: () => void;
    rateStatus: RateRequest;
    spinner: boolean;
}
