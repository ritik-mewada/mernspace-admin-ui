import { CreateTenantData, CreateUserData, Credentials } from "../types";
import { api } from "./client";

export const AUTH_SERVICE = "/api/auth";
const CATALOG_SERVICE = "/api/catalog";

// auth services
export const login = async (credentials: Credentials) =>
  api.post(`${AUTH_SERVICE}/auth/login`, credentials);

export const self = async () => api.get(`${AUTH_SERVICE}/auth/self`);

export const logout = async () => api.post(`${AUTH_SERVICE}/auth/logout`);

export const getUsers = async (queryString: string) =>
  api.get(`${AUTH_SERVICE}/users?${queryString}`);

export const getTenants = async (queryString: string) =>
  api.get(`${AUTH_SERVICE}/tenants?${queryString}`);

export const createUser = async (user: CreateUserData) =>
  api.post(`${AUTH_SERVICE}/users`, user);

export const createTenant = async (tenant: CreateTenantData) =>
  api.post(`${AUTH_SERVICE}/tenants`, tenant);

export const updateUser = async (user: CreateUserData, id: string) =>
  api.patch(`${AUTH_SERVICE}/users/ ${id}`, user);

export const updateTenant = async (tenant: CreateTenantData, id: string) =>
  api.patch(`${AUTH_SERVICE}/tenants/${id}`, tenant);

// catelog service
export const getCategories = () => api.get(`${CATALOG_SERVICE}/categories`);
export const getProducts = (queryParam: string) =>
  api.get(`${CATALOG_SERVICE}/products?${queryParam}`);
export const createProduct = (product: FormData) =>
  api.post(`${CATALOG_SERVICE}/products`, product, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const getCategory = (id: string) =>
  api.get(`${CATALOG_SERVICE}/categories/${id}`);
export const updateProduct = (product: FormData, id: string) => {
  return api.put(`${CATALOG_SERVICE}/products/${id}`, product, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
