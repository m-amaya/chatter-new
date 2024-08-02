import "@fontsource-variable/inter"; // Supports weights 100-900
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { router } from "@src/tokens/router.tsx";
import { resolver, theme } from "@src/tokens/theme.ts";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider
      theme={theme}
      cssVariablesResolver={resolver}
      defaultColorScheme="dark"
    >
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
