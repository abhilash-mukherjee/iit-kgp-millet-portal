'use client'
import { Button, Card, Flex, Text } from "@chakra-ui/react"
import ResponsiveImage from "./ui/ResponsiveImage"
import { MilletCardProps } from "@/types/Types"
import { useRouter } from "next/navigation"

const MilletCard = ({
    imageSource,
    title,
    description,
    isComingSoon,
    slug,
}: MilletCardProps) => {
    const router = useRouter();
    return (
        <>
            <Card p={10}>
                <Flex flexDir={'column'} alignItems={'center'}>
                    <ResponsiveImage imageSource={imageSource} />
                    <Text fontWeight={'bold'} fontSize={'xl'} marginTop={4}>{title}</Text>
                    <Text fontSize={'lg'} marginTop={1}>{description}</Text>
                    <Button colorScheme="teal" isDisabled={isComingSoon} width={300} marginTop={4} onClick={()=>{
                        console.log('clickd');
                        router.push("models/"+slug)}}>{isComingSoon? 'Coming Soon..' : 'Try Model'}</Button>
                </Flex>
            </Card>
        </>
    )
}

export default MilletCard;