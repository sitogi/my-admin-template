/** @jsx jsx */
import React, { FC, Fragment } from 'react'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/react';
import { Route, Switch } from 'react-router';
import { PATH_ROOT } from 'components/organisms/RouteManager/RouteManager';
import SidebarContainer from 'components/templates/Sidebar/SidebarContainer';
import PageHeader from 'components/organisms/PageHeader/PageHeader';
import { Box, Grid, Table, TableCaption, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';

const containerCss = css`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const navigationCss = css`
  flex: 0 0 auto;
`;

const mainCss = css`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #f4f3ef;
`;

const contentsCss = css`
  margin: 30px;
  background-color: #f4f3ef;
`;

const DummyContent = () => (
  <Grid templateColumns="repeat(2, 1fr)" gap={6}>
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
);

const AdminBaseFrame: FC = () => {
  return (
    <Fragment>
      <div css={containerCss}>
        <aside css={navigationCss}>
          <SidebarContainer />
        </aside>
        <main css={mainCss}>
          <PageHeader />
          <div css={contentsCss}>
            <Switch>
              <Route exact path={PATH_ROOT} component={DummyContent} />
            </Switch>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default AdminBaseFrame;
