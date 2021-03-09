export interface IProps {
    name: string;
    info: Array<Company | Countries | Languages> | number | string | any;
    array: boolean;
}

interface Company {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}

interface Countries {
    iso_3166_1: string;
    name: string;
}

interface Languages {
    english_name: string;
    iso_639_1: string;
    name: string;
}
