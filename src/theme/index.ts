import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import {colors} from "./foundations/colors"

// Global style overrides
import {styles} from "./styles";

// Foundational style overrides
//import borders from './foundations/borders'

// Component style overrides
//import Button from './components/button'

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const overrides = {
  // set configuration
  config,
  styles,
  colors,
  components: {
    // Button,
    // Other components go here
  },
};

export default extendTheme(overrides);
