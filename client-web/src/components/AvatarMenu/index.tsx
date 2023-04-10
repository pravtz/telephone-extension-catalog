import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Avatar,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { MdPersonAdd, MdPhone, MdPerson, MdLogout } from "react-icons/md";
import {MdDarkMode, MdLightMode} from "react-icons/md"
import { useUserAuth } from "../../hooks/useUserAuth";

export const AvatarMenu = () => {
  const props = useUserAuth()
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('#eee', '#252525');
  return (
    <Menu >
      <MenuButton as={Avatar}></MenuButton>
      <MenuList bg={bg}>
        <MenuItem bg="inherit" icon={<MdPerson/>}>Meu Perfil</MenuItem>
        <MenuDivider />
        <MenuItem bg="inherit"  icon={<MdPersonAdd />}>Add Pessoa</MenuItem>
        <MenuItem  bg="inherit" icon={<MdPhone/>}>Add Ramal</MenuItem>
        <MenuItem  bg="inherit" 
          onClick={toggleColorMode} 
          icon={colorMode === 'dark' ? <MdDarkMode/> : <MdLightMode />} 
          closeOnSelect={false}
        >
          {colorMode === "dark" ? "Dark Ativo": "Light Ativo"}
        </MenuItem>
        <MenuDivider />
        <MenuItem onClick={()=>props?.signOutEmail()}  bg="inherit" icon={<MdLogout/>}>Sair</MenuItem>

      </MenuList>
    </Menu>
  );
};
