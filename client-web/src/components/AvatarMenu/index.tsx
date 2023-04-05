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
} from "@chakra-ui/react";
import { ButtonDarkMode } from "../ButtonDarkMode";
import { MdPersonAdd, MdPhone, MdPerson, MdLogout } from "react-icons/md";


export const AvatarMenu = () => {
  return (
    <Menu>
      <MenuButton as={Avatar}></MenuButton>
      <MenuList>
        <MenuItem icon={<MdPerson/>}>Meu Perfil</MenuItem>
        <MenuDivider />
        <MenuItem icon={<MdPersonAdd />}>Add Pessoa</MenuItem>
        <MenuItem icon={<MdPhone/>}>Add Ramal</MenuItem>
        <MenuDivider />
        <MenuItem icon={<MdLogout/>}>Sair</MenuItem>
      </MenuList>
    </Menu>
  );
};
