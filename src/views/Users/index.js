import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

import {
    getUsers,
    saveUser,
    updateUser,
    deleteUser,
} from '../../store/Users/Actions';

import Header from '../../components/Header';
import List from '../../components/List';
import UserModal from '../../components/Modals/User';
import './style.css';
import Button from "../../components/Button";

const Users = () => {
    const {
        users: {
            list,
        }
    } = useSelector(state => state);

    const dispatch = useDispatch();

    const [type, setType] = useState('Add');
    const [userOpen, setUserOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    useEffect(() => {
        if (selectedUser)
            handleOpenUser(true);

    }, [selectedUser]);

    const changeField = (prop, val) => {
        const tempUser = {...selectedUser};
        tempUser[prop] = val;
        setSelectedUser(tempUser);
    };

    const handleOpenUser = () => {
        setUserOpen(true);
    };

    const handleCloseUser = () => {
        setUserOpen(false);
        setSelectedUser(null);
    };

    const handleSelectUser = row => {
        setSelectedUser(row);
        setType('Edit');
        handleOpenUser(true);
    };

    const handleSaveUser = async () => {
        if (type === 'Edit') {
            await dispatch(updateUser(selectedUser));
        }
        else if (type === 'Add') {
            await dispatch(saveUser(selectedUser));
        }

        handleCloseUser();
        dispatch(getUsers());
    };

    const handleAddUser = () => {
        setType('Add');
        setSelectedUser({ name: '', email: '' });
        handleOpenUser(true);
    };

    const handleDeleteUser = async id => {
        await dispatch(deleteUser(id));
        dispatch(getUsers());
    };

    const renderActions = (row) => {
        return (
            <Button
                action={() => handleDeleteUser(row.id)}
                label={'Delete'}
            />
        );
    };

    const columns = [{
        prop: 'name',
        header: 'Name'
    }, {
        prop: 'email',
        header: 'Email'
    }, {
        template: (row) => renderActions(row),
        prop: 'actions'
    }];

    return (
        <div className={'App'}>
            <Header />

            { /* Render the add button */ }
            <Container className={'list-header'}>
                <Row>
                    <Col className={'list-title'}>
                        <h2>The Best User List Ever!</h2>
                    </Col>
                    <Col className={'list-actions'}>
                        <Button
                            action={handleAddUser}
                            label={'Add'}
                        />
                    </Col>
                </Row>
            </Container>

            <List
                idProp={'id'}
                selectRow={handleSelectUser}
                {...{
                    columns,
                    list
                }}
            />

            <UserModal
                {...{
                    type,
                    userOpen,
                    selectedUser,
                    handleCloseUser,
                    handleSaveUser,
                    changeField
                }}
            />

        </div>
    );
};

export default Users;
