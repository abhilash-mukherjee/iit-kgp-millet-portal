import { Box, List, ListItem, ListIcon, Flex, Text } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md'; 

export default function InstructionsList() {
    return (
      <Flex flexDir='column' width='100%' marginBottom={4}>
        <Text fontSize={'xl'} fontWeight={'bold'} alignSelf={'center'}>Instructions</Text>
        <List spacing={1}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="teal" />
            Ensure there is no background or minimal background in the image.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="teal" />
            Take the image in sufficient lighting.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="teal" />
            Upload at least 5 images for getting an accurate quality score.
          </ListItem>
        </List>
      </Flex>
    );
  }