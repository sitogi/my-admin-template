import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Box, Flex, Grid, Table, TableCaption, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { HEADER_HEIGHT_PX } from 'components/styleConstants';
import { PATH_AMOUNT, PATH_DASHBOARD, PATH_TODO, PATH_USERS } from 'components/organisms/RouteManager/RouteManager';
import SidebarContainer from 'components/templates/Sidebar/SidebarContainer';
import PageHeaderContainer from 'components/organisms/PageHeader/PageHeaderContainer';
import UserListContainer from 'components/templates/UserList/UserListContainer';
import TodoList from 'components/pages/Todo';

const dashboardDummy = () => (
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
            <Tr _hover={{ bg: 'teal.50' }}>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
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
      <Box bg="white" pt="10px" rounded="xl" boxShadow="xl">
        <Text ml={5} mb={5} mt={3} fontSize="20px" color="gray.400">
          User Ranking
        </Text>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr _hover={{ bg: 'teal.50' }}>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
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

const amountDummy = () => <p>Amount</p>;

const AdminBaseFrame: FC = () => {
  return (
    <Flex w="100vw" h="100vh">
      <Box as="aside" flex="0 0 auto">
        <SidebarContainer />
      </Box>
      <Box as="main" w="100%" h="100%" m="0 auto" bg="#f4f3ef">
        <PageHeaderContainer />
        <Box css={{ height: `calc(100vh - ${HEADER_HEIGHT_PX} - 40px)` }} m="20px 20px 0 20px" bg="#f4f3ef">
          <Switch>
            <Route exact path={PATH_DASHBOARD} component={dashboardDummy} />
            <Route exact path={PATH_USERS} component={UserListContainer} />
            <Route exact path={PATH_AMOUNT} component={amountDummy} />
            <Route exact path={PATH_TODO} component={TodoList} />
            <Redirect to={PATH_DASHBOARD} />
          </Switch>
        </Box>
      </Box>
    </Flex>
  );
};

export default AdminBaseFrame;
