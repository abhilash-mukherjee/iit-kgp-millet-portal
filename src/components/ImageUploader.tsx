"use strict";
import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { imageAtom } from '@/store/imageAtoms'; // Adjust the path as necessary
import { Box, Image, SimpleGrid, Button, Text, Input } from '@chakra-ui/react';

const ImageUploader: React.FC = () => {
  const [images, setImages] = useRecoilState(imageAtom);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      const newImages = [...images, ...Array.from(fileList).map(file => URL.createObjectURL(file))].slice(0, 5);
      setImages(newImages);
    }
  };

  const gridContent = (index: number) => {
    if (index < images.length) {
      return (
        <Image
          src={images[index]}
          alt={`Selected image ${index + 1}`}
          objectFit="cover"
          boxSize="100%"
        />
      );
    } else if (index === images.length && images.length < 5) {
      return (
        <Box border="2px dashed" borderColor="gray.200" display="flex" alignItems="center" justifyContent="center" padding={2} boxSize={'100%'} height={100}>
          <Button as="label" height={90} whiteSpace="normal" overflow="hidden" fontSize={'small'} cursor={'pointer'}>
            Upload more images <br /> ({5 - images.length} remaining)
            <Input type="file" multiple accept="image/*" onChange={handleImageChange} hidden />
          </Button>
        </Box>
      );
    } else if (index === 5 && images.length === 5) {
      return (
        <Text textAlign="center" p={2} border="2px solid" borderColor="green.500">
          All uploaded
        </Text>
      );
    }
    return null;
  };

  return (
    <Box p={4}>
      <SimpleGrid columns={3} spacing={4}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Box key={index} boxSize="100%">
            {gridContent(index)}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ImageUploader;
