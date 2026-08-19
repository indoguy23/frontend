import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('UseTheme must be used within a ThemeProvider');
    }
    return context;
}

export default useTheme;
