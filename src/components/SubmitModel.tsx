'use client'
import { Button, Card, Flex, Text, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { resultsRecieved } from "@/store/resultAtoms"; // Adjust path if necessary

export default function SubmitModel() {
    const [isLoading, setIsLoading] = useState(false);
    const setResultsRecieved = useSetRecoilState(resultsRecieved);
    const [modelLink, setModelLink] = useState('');
    const [modelTitle, setModelTitle] = useState('');
    const [modelDescription, setModelDescription] = useState('');
    const [targetMillet, setTargetMillet] = useState('');

    const handleSubmit = () => {
        setIsLoading(true);
        setTimeout(() => {
            setResultsRecieved(true);
            console.log({ modelLink, modelTitle, modelDescription, targetMillet });
            // Submit these values to a backend or handle them as needed
            setIsLoading(false);
        }, 3000);
    }

    return (
        <Card p={5} alignItems={'center'} width={{ base: "90vw", md: "40vw" }}
            backgroundColor={'gray.50'}>
            <Text fontSize={'xl'} fontWeight='bold'>Enter Model Details</Text>
            <Flex direction="column" width="100%" mt={4}>
                <FormControl id="modelLink" isRequired>
                    <FormLabel>Model Link</FormLabel>
                    <Input value={modelLink} onChange={(e) => setModelLink(e.target.value)} placeholder="Enter model link"/>
                </FormControl>
                <FormControl id="modelTitle" isRequired mt={4}>
                    <FormLabel>Model Title</FormLabel>
                    <Input value={modelTitle} onChange={(e) => setModelTitle(e.target.value)} placeholder="Enter model title"/>
                </FormControl>
                <FormControl id="modelDescription" isRequired mt={4}>
                    <FormLabel>Model Description</FormLabel>
                    <Input value={modelDescription} onChange={(e) => setModelDescription(e.target.value)} placeholder="Describe the model"/>
                </FormControl>
                <FormControl id="targetMillet" isRequired mt={4}>
                    <FormLabel>Target Millet</FormLabel>
                    <Input value={targetMillet} onChange={(e) => setTargetMillet(e.target.value)} placeholder="Enter target millet"/>
                </FormControl>
                <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
                    {isLoading ? "Submitting..." : "Submit"}
                </Button>
            </Flex>
        </Card>
    );
}
