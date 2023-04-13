import { Flex, Text } from "@chakra-ui/react";
import { BoxContent } from "../components/BoxContent";
import { FormSearch } from "../components/FormSearch";
import { useState } from "react";

const fakedata = {
  extension: {
    "6200": {
      prefix: 3288,
      name: ["Sandra Regina", "Julia"],
      address: {
        room_number: "13",
        floor_room_number: 1,
        name_building: "Prédio Central",
      },
      service: "Telefonia",
    },
    "6344": {
      prefix: 3288,
      name: ["Ederson Oliveira Pravtz"],
      address: {
        room_number: "12",
        floor_room_number: 1,
        name_building: "Prédio Central",
      },
      service: "Telefonia",
    },
    "6244": {
      prefix: 3288,
      name: ["Marcia"],
      address: {
        room_number: "1",
        floor_room_number: 1,
        name_building: "Prédio Administrativo",
      },
      service: "Diretoria administrativa",
    },
  },
  person: {
    "Sandra Regina": {
      extension: 6200,
    },
    "Ederson Oliveira Pravtz": {
      extension: 6344,
    },
  },
  service: {
    Telefonia: {

      "flag": "DSC",
      Departament: "",
      division: "",
      secsion: "",
      values: ["comuicação", "telecomunicação"],
    },
  },
};

const HomePage = () => {
  const [search, setSearch] = useState<string>("");

console.log(search)

  return (
    <Flex direction="column" gap="4">
      <BoxContent>
        <FormSearch setSearch={setSearch} />
      </BoxContent>
      <BoxContent>
        <Text>This is test</Text>
      </BoxContent>
    </Flex>
  );
};

export default HomePage;
