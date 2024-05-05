import ImageUploaderContainer from "@/components/ImageUploaderContainer";
import InstructionsList from "@/components/InstructionsList";
import PenaltySliders from "@/components/PenaltySliders";
import { resultsRecieved } from "@/store/resultAtoms";
import { Button, Card, Flex, Text } from "@chakra-ui/react";
import { loadBindings } from "next/dist/build/swc";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
export default function PreResultCard() {
    const [isLoading, setIsLoading] = useState(false);
    const setResultsRecieved = useSetRecoilState(resultsRecieved);
    const handleResults = () => {
        setIsLoading(true);
        setTimeout(() => {
            setResultsRecieved(true);
        }, 3000)
    }
    return (
        <>
            <Card p={5} alignItems={'center'} width={{ base: "90vw", md: "40vw" }}
                backgroundColor={'gray.50'}>
                <ImageUploaderContainer />
                <Text fontSize={'xl'} fontWeight='bold'>Set Penalties</Text>
                <PenaltySliders />
                <InstructionsList />
                <Button colorScheme="teal" onClick={handleResults}>{isLoading ? "Loading..." : "Get Results"}</Button>
            </Card>
        </>
    )
}