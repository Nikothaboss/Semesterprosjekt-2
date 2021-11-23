import { extendTheme } from "@chakra-ui/react";
import {colors} from "../app.styled"

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                background: colors.bgGradient,
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
            }
        }
    }
})