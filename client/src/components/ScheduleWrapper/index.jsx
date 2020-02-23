import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactSearch from '../ContactSearch';
import './style.css';
import ScheduledApptWrapper from '../ScheduledApptWrapper';
import SchedulePicker from '../SchedulePicker';

function ScheduleWrapper(props) {
    return (
        <Container className="scheduler_root m-0 p-3">
            <Row>
                <Col>
                    <ContactSearch hrefOnClick="/crm/scheduler" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                    <h1 className="text-center">Scheduler</h1>
                    <hr />
                </Col>
            </Row>
            <section hidden={!props.id}>
                <SchedulePicker user={props.user} id={props.id} />
                <hr />
                <ScheduledApptWrapper id={props.id} className="mt-5" />
            </section>
        </Container>
    )
}

export default ScheduleWrapper;