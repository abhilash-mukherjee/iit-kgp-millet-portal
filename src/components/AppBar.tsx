'use client'
import { Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
const AppBar = () => {
    const router = useRouter();
    return (
        <>
        <Flex flexDir='row' background='teal' padding={'16px'}>
            <Text fontWeight={'bold'} fontSize={'xl'} color={'#F7FAFC'}
            onClick={()=>router.push('/')}
            cursor={'pointer'}>IIT KGP Millet Portal</Text>
        </Flex>
        </>
    )
}

export default AppBar;