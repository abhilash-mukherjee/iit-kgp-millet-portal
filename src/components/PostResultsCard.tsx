import { Button, Card, Image, Text, Box, List, ListItem } from "@chakra-ui/react";
import { useState } from "react";

export default function PostResultCard() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Card p={5} alignItems={'center'} width={{ base: "90vw", md: "40vw" }} backgroundColor={'gray.50'}>
        <Image src="/path/to/your/image.jpg" alt="Sample Image" boxSize="160px" objectFit="cover" mb={4} />
        <Text fontSize="xx-large" fontWeight="bold" mb={2}>70/100</Text>
        <Text fontSize="lg" fontWeight={"bold"} marginBottom={4}>Quality Score</Text>
        <Text fontSize="xl" fontWeight={"bold"} textAlign={'center'}> Smart Recommendations (Feature in Development) </Text>
        <List spacing={2} textAlign="left" mt={1} mb={4} alignSelf={'left'}>
          <ListItem>Your sample is fit for making millet flour</ListItem>
          <ListItem>It is not fit as commercial whole grain for direct consumption</ListItem>
        </List>
        <Button colorScheme="teal" onClick={() => window.location.reload()}>
          {isLoading ? "Loading..." : "Try Again"}
        </Button>
      </Card>
    </>
  );
}
