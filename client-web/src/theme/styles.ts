import { StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      fontFamily: "body",
      color: mode("primary.700", "primary.200")(props),

      lineHeight: "base",
    },
  }),
};
