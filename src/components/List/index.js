import React from 'react';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import classNames from 'classnames';
import './style.css';

const List = (props) => {
    const {
        idProp,
        columns,
        list,
        selectRow,
    } = props;

    const listItemHeader = classNames('list-item', 'header');

    const handleSelectRow = (row, column) => {
        if (!column.template) {
            selectRow(row);
        }
    };

    return (
        <Container className={'list-container'}>
            { /* Render the header */ }
            <Row>
                {columns.map(column =>
                    <Col
                        key={`colHeader_${column.prop}`}
                        className={listItemHeader}
                    >{column.header}</Col>
                )}
            </Row>

            { /* Render the rows */ }
            {list && list.map(row => (
                    <Row
                        className={'list-row'}
                        key={`row_${row[idProp]}`}
                    >
                        {columns.map(column => {

                            const content = (column.template) ?
                                column.template(row) :
                                row[column.prop];

                            const classes = (column.prop === 'actions') ?
                                classNames('list-item', 'actions') :
                                classNames('list-item', 'cell');

                            return (<Col
                                key={`col_${column.prop}`}
                                className={classes}
                                onClick={() => handleSelectRow(row, column)}
                            >{content}</Col>)}
                        )}
                    </Row>
                )
            )}
        </Container>
    );
};

export default List;
