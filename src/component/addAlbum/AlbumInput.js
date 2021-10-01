import React from 'react';
import {
    FormControl, Button, Heading,
    VStack, FormLabel, Input,
    SimpleGrid, GridItem, useBreakpointValue
} from '@chakra-ui/react';

function AlbumInput(props) {

    const colspan = useBreakpointValue({ base: 2, md: 1 });
    return (
        <VStack px={10}
            width='container.sm'
            h='80vh'
            bg='gray.50'
            alignItems='flex-start'>

        <VStack>
        <Heading size='2xl'>Add Album</Heading>
            </VStack>
            <SimpleGrid columns={2} columnGap={6} rowGap={6}>
                <GridItem colSpan={colspan}>
                    <FormControl>
                        <FormLabel>Album</FormLabel>
                        <Input name="album" onChange={props.handleChange} placeholder='Album Name' />
                    </FormControl>
                </GridItem>


                <GridItem colSpan={colspan}>
                    <FormControl>
                        <FormLabel>Artist</FormLabel>
                        <Input name="artist" onChange={props.handleChange} placeholder='Artist Name' />
                    </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Album Cover</FormLabel>
                        <Input type="file" name='file' onChange={props.imageChange}/>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <Button onClick={props.onClick} isFullWidth>Add</Button>
                </GridItem>
            </SimpleGrid>
        </VStack>

    );
}

export default AlbumInput;
