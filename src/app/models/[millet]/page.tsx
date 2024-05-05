'use client'
import ModelUI from "@/components/ModelUI";
import PostResultCard from "@/components/PostResultsCard";
import PreResultCard from "@/components/PreResultCard";
import { resultsRecieved } from "@/store/resultAtoms";
import { Flex } from "@chakra-ui/react";
import { RecoilRoot, useRecoilValue } from "recoil";
export default function MilletModel() {
    return (
        <>
            <RecoilRoot>
                <Flex width='100%' justifyContent='center' minHeight={'50vh'} marginTop={50}>
                    <ModelUI />
                </Flex>
            </RecoilRoot>
        </>
    )
}