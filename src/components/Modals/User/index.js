import React, {Fragment} from 'react';
import Modal from 'react-modal';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import TextField from '../../TextField/';
import Button from '../../Button';
import './style.css';

Modal.setAppElement('body');

const UserModal = props => {

    const {
        type,
        userOpen,
        selectedUser,
        handleCloseUser,
        handleSaveUser,
        changeField
    } = props;

    const customStyles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
        }
    };

    return (
        <Fragment>
            {selectedUser && <Modal
                isOpen={userOpen}
                style={customStyles}
            >
                <Container fluid>

                    <h3 className={'modal-header'}>{`${type} User`}</h3>

                    <Row>
                        <Col className={'modal-actions'}>
                            <TextField
                                label={'Name'}
                                name={'name'}
                                value={selectedUser.name}
                                placeholder={'Name'}
                                onChange={(e) => changeField('name', e.target.value)}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col className={'modal-actions'}>
                            <TextField
                                label={'Email'}
                                name={'email'}
                                value={selectedUser.email}
                                placeholder={'Email'}
                                onChange={(e) => changeField('email', e.target.value)}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col className={'modal-actions'}>
                            <Button
                                action={handleSaveUser}
                                label={'Save'}
                            />

                            <Button
                                action={handleCloseUser}
                                label={'Cancel'}
                            />
                        </Col>
                    </Row>
                </Container>

            </Modal>}
        </Fragment>
    );
};

export default UserModal;
