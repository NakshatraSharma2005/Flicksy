import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TooltipProvider } from "@/components/ui/tooltip"
import App from './App.jsx'
import { ThemeProvider } from "./components/theme-provider"
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <TooltipProvider>
            <ThemeProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </TooltipProvider>
    </StrictMode>,
);
