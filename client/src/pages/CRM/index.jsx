import React from 'react'
import { Redirect, useLocation, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style.css';
import { OverlayTrigger, Tooltip, Nav, Navbar, Row, Col } from 'react-bootstrap';
import NavlinkWrapper from '../../components/NavlinkWrapper';
import LeadWrapper from '../../components/LeadWrapper';
import ContactWrapper from '../../components/ContactWrapper';
import NoteWrapper from '../../components/NoteWrapper';
import ScheduleWrapper from '../../components/ScheduleWrapper';
import EmployeeWrapper from '../../components/EmployeeWrapper';
import ContactList from '../../components/ContactList';


// function renderTooltip(props) {
//     return <Tooltip {...props}>Simple tooltip</Tooltip>;
// }

// const Example = () => (
//     <OverlayTrigger
//         placement="right"
//         delay={{ show: 250, hide: 400 }}
//         overlay={renderTooltip}
//     >
//         <Button variant="success">Hover me to see</Button>
//     </OverlayTrigger>
// );



function CRM(props) {
    const location = useLocation();
    const user = props.user
    return (
        <Router>
            <div className="crm_root">
                {location.pathname === "/crm" ? <Redirect to="/crm/dashboard" /> : null}
                {/* Navbar toggler only shows up below lg sized screens  */}
                {/* Otherwise NavLinks are hidden and left_root is displayed */}
                <Navbar className="top_root p-0" expand="lg" bg="dark" variant="dark">
                    <Col className="p-0">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Home Page</Tooltip>} >
                            <a href="/"><ion-icon name="home"></ion-icon></a>
                        </OverlayTrigger>
                        <OverlayTrigger placement="right" overlay={<Tooltip>Logout</Tooltip>}>
                            <ion-icon name="log-out" onClick={props.logout}></ion-icon>
                        </OverlayTrigger>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end">
                        <Navbar.Toggle className="d-flex mr-3" aria-controls="basic-navbar-nav" />
                    </Col>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/crm/dashboard">Dashboard</Nav.Link>
                            <Nav.Link href="/crm/employee">Employee</Nav.Link>
                            <Nav.Link href="/crm/allcustomers">All Customers</Nav.Link>
                            <Nav.Link href="/crm/customer">Customer Info</Nav.Link>
                            <Nav.Link href="/crm/notes">Notes</Nav.Link>
                            <Nav.Link href="/crm/scheduler">Scheduler</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="bottom_root">
                    <div className="left_root">
                        <NavlinkWrapper />
                    </div>
                    <div className="right_root">
                        <Switch>
                            <Route exact path="/crm/dashboard">
                                <LeadWrapper />
                            </Route>
                            <Route exact path="/crm/employee">
                                <EmployeeWrapper user={props.user} loggedIn={props.loggedIn} />
                            </Route>
                            <Route exact path="/crm/allcustomers">
                                <ContactList user={props.user} />
                            </Route>
                            <Route exact path="/crm/customer">
                                <ContactWrapper id={null} user={user} />
                            </Route>
                            <Route exact path="/crm/customer/:id"
                                render={(props) =>
                                    <ContactWrapper id={props.match.params.id} user={user} />
                                } />
                            <Route exact path="/crm/notes">
                                <NoteWrapper id={null} />
                            </Route>
                            <Route exact path="/crm/notes/:id"
                                render={(props) =>
                                    <NoteWrapper id={props.match.params.id} />
                                } />
                            <Route exact path="/crm/scheduler">
                                <ScheduleWrapper user={user} />
                            </Route>
                            <Route exact path="/crm/scheduler/:id"
                                render={(props) =>
                                    <ScheduleWrapper user={user} id={props.match.params.id} />
                                } />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default CRM
