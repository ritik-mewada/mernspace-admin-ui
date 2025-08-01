import { CreateUserData, Credentials } from "../types";
import { api } from "./client";

export const login = async (credentials: Credentials) =>
    api.post("/auth/login", credentials);

export const self = async () => api.get("/auth/self");

export const logout = async () => api.post("/auth/logout");

export const getUsers = async () => api.get("/users");

export const getTenants = async () => api.get("/tenants");

export const createUser = async (user: CreateUserData) =>
    api.post("/users", user);
