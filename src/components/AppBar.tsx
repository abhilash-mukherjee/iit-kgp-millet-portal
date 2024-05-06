'use client'
import { Button, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
const AppBar = () => {
    const router = useRouter();
    return (
        <>
            <Flex flexDir='row' background='teal' padding={'16px'} justifyContent={'space-between'}>
                <Text fontWeight={'bold'} fontSize={'xl'} color={'#F7FAFC'}
                    onClick={() => router.push('/')}
                    cursor={'pointer'}>IIT KGP Millet Portal</Text>
                <Button
                    onClick={() => router.push('/submit-model')}
                    colorScheme='gray'
                    variant={'outline'}>
                    Upload
                </Button>
            </Flex>
        </>
    )
}

export default AppBar;