import { useRecoilValue } from "recoil";
import PostResultCard from "./PostResultsCard";
import PreResultCard from "./PreResultCard";
import { resultsRecieved } from "@/store/resultAtoms";

export default function ModelUI() {
    const isResultsRecieved = useRecoilValue(resultsRecieved);
    return (
        <>
            {isResultsRecieved ? <PostResultCard /> : <PreResultCard />}

        </>
    )
}