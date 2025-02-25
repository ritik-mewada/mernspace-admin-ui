import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "antd/dist/reset.css";
import { router } from "./router";
import "./index.css";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#F65F42",
                        colorLink: "#F65F42",
                    },
                }}
            >
                <RouterProvider router={router} />
            </ConfigProvider>
        </QueryClientProvider>
    </StrictMode>
);
