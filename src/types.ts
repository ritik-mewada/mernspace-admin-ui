export type Credentials = {
    email: string;
    password: string;
};

export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
};

export type Tenant = {
    id: number;
    address: string;
    name: string;
};
