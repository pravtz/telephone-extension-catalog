import { Box, Text, Container } from "@chakra-ui/react";
import { BoxContent } from "./components/BoxContent";
import { Layout } from "./components/layout";

function App() {
  return (
    <Layout>
      <Container>
        <BoxContent>
          <Text>This is test</Text>
        </BoxContent>
      </Container>
    </Layout>
  );
}
export default App;
