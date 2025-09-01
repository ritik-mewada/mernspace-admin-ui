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
  tenant: Tenant | null;
};

export type CreateUserData = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  role: string;
  tenantId: number;
};

export type Tenant = {
  id: string;
  address: string;
  name: string;
};

export type FieldData = {
  name: string[];
  value?: string;
};

export type CreateTenantData = {
  name: string;
  address: string;
};
