export interface Files {
    id: string;
}

export interface Part {
    id: string;
    name: string;
    status: number;
    material: string;
    project: string;
    machine: string;
    needed: string;
    priority: string;
    files: Files;
    link: string;
    dev: {delete: boolean, upload: boolean, download: boolean};
}
