import littleMillet from "#/little-millet.png"
import barnyardMillet from "#/barnyard-millet.png"
import fingerMillet from "#/finger-millet.png"
import { Flex, Grid, Text } from "@chakra-ui/react"
import MilletCard from "./MilletCard"
export default function Models(){
    return (
        <>
        <Flex width={'100%'} alignItems={'center'} justifyContent={'center'} paddingTop={10}>
            <Text textAlign={'center'} fontSize={'2xl'} fontWeight={'bold'}>Existing Millet Models</Text>
        </Flex>
        <Grid 
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={6}
        padding={6}
      >
        <MilletCard 
        imageSource={fingerMillet} 
        title="Finger Millet" 
        description="Analyze quality score of finger millet based on physical characteristics and impurity contents"
        isComingSoon={false}
        slug='finger-millet'
        >
        </MilletCard>
        
        <MilletCard 
        imageSource={barnyardMillet} 
        title="Barnyard Millet" 
        description="Analyze quality score of barnyard millet based on physical characteristics and impurity contents"
        isComingSoon={true}
        slug='barnyard-millet'
        >
        </MilletCard>
        
        <MilletCard 
        imageSource={littleMillet} 
        title="Little Millet" 
        description="Analyze quality score of little millet based on physical characteristics and impurity contents"
        isComingSoon={true}
        slug='little-millet'
        >
        </MilletCard>
      </Grid>
        </>
    )
}