import { Button, Card, Image, Text, Box, List, ListItem } from "@chakra-ui/react";
import { useState } from "react";
import { useRecoilValue } from 'recoil';
import { imageAtom } from '@/store/imageAtoms'; // Ensure this path is correct based on your project structure

export default function PostResultCard() {
  const [isLoading, setIsLoading] = useState(false);
  const images = useRecoilValue(imageAtom); // Retrieve the array of image URLs from Recoil

  // Use the first image URL or a fallback if no images are available
  const imageUrl = images.length > 0 ? images[0] : '/path/to/default/image.jpg';

  return (
    <>
      <Card p={5} alignItems={'center'} width={{ base: "90vw", md: "40vw" }} backgroundColor={'gray.50'}>
        <Image src={imageUrl} alt="Sample Image" boxSize="160px" objectFit="cover" mb={4} />
        <Text fontSize="xx-large" fontWeight="bold" mb={2}>70/100</Text>
        <Text fontSize="lg" fontWeight={"bold"} marginBottom={4}>Quality Score</Text>
        <Text fontSize="xl" fontWeight={"bold"} textAlign={'center'}>Smart Recommendations (Feature in Development)</Text>
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
