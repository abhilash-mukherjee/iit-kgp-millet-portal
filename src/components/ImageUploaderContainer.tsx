import { Flex } from "@chakra-ui/react";
import ImageUploader from "./ImageUploader";

const ImageUploaderContainer = ()=>{
    return (
        <>
        <Flex p={2} border="2px solid" borderColor="green.500" borderRadius={8} width={'90%'} marginBottom={4}>
            <ImageUploader />
        </Flex>
        </>
    )
}
export default ImageUploaderContainer;