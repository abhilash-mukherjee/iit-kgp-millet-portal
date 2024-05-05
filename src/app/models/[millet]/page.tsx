'use client'
import ImageUploaderContainer from "@/components/ImageUploaderContainer";
import InstructionsList from "@/components/InstructionsList";
import PenaltySliders from "@/components/PenaltySliders";
import { Button, Card, Flex, Text } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
export default function MilletModel() {
    return (
        <>
            <RecoilRoot>
                <Flex width='100%' justifyContent='center' minHeight={'50vh'} marginTop={50}>

                    <Card p={5} alignItems={'center'} width={{ base: "90vw", md: "40vw" }} 
                    backgroundColor={'gray.50'}>
                        <ImageUploaderContainer />
                        <Text fontSize={'xl'} fontWeight='bold'>Set Penalties</Text>
                        <PenaltySliders />
                        <InstructionsList />
                        <Button colorScheme="teal">Get Results</Button>
                    </Card>
                </Flex>
            </RecoilRoot>
        </>
    )
}