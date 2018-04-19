import React from 'react';
import { Table } from 'semantic-ui-react';

const ConfirmOrder = () =>(
    <Table definition>
        <Table.Body>
            <Table.Row>
                <Table.Cell>PERSONAL DETAILS</Table.Cell>
                <Table.Cell> Joe </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Email</Table.Cell>
                <Table.Cell>example@gmail.com</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>HOME ADDRESS</Table.Cell>
                <Table.Cell> Ascote Lane 129 Dickens Heath/Shirley</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>DeELIVERY COMPANY</Table.Cell>
                <Table.Cell>Amazon</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>DELIVERY NOTIFICATION</Table.Cell>
                <Table.Cell>3548379568HG</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>ORDER VALUE</Table.Cell>
                <Table.Cell>£ 800</Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
);

export default ConfirmOrder;