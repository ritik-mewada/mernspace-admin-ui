import { Credentials } from "../types";
import { api } from "./client";

export const login = async (credentials: Credentials) =>
  api.post("/auth/login", credentials);
