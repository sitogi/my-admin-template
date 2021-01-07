import React, { FC } from 'react';
import { Box, Grid, Table, TableCaption, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';

const UserList: FC = () => {
    return (
      <Box overflowY="auto" h="100%">
        <Grid templateColumns="repeat(auto-fit, minmax(500px, 1fr))" gap={6} p="10px">
          <Box bg="white" pt="10px" rounded="xl" boxShadow="xl">
            <Text ml={5} mb={5} mt={3} fontSize="20px" color="gray.400">
              User Ranking
            </Text>
            <Table variant="simple" overflow="scroll">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr _hover={{ bg: 'teal.50' }}> <Td>inches</Td> <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr _hover={{ bg: 'teal.50' }}>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr _hover={{ bg: 'teal.50' }}>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Grid>
      </Box>
    );
};

export default UserList;
