import { CreateTenantData, CreateUserData, Credentials } from "../types";
import { api } from "./client";

export const login = async (credentials: Credentials) =>
  api.post("/auth/login", credentials);

export const self = async () => api.get("/auth/self");

export const logout = async () => api.post("/auth/logout");

export const getUsers = async (queryString: string) =>
  api.get(`/users?${queryString}`);

export const getTenants = async (queryString: string) =>
  api.get(`/tenants?${queryString}`);

export const createUser = async (user: CreateUserData) =>
  api.post("/users", user);

export const createTenant = (tenant: CreateTenantData) =>
  api.post("/tenants", tenant);

export const updateUser = (user: CreateUserData, id: string) =>
  api.patch(`/users/ ${id}`, user);
