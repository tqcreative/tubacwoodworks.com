import React from 'react'
import { Redirect, useLocation, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style.css';
import Navlink from '../../components/Navlink';
import LeadWrapper from '../../components/LeadWrapper';
import ContactWrapper from '../../components/ContactWrapper';
import NoteWrapper from '../../components/NoteWrapper';

function CRM(props) {
    const location = useLocation();
    return (
        <Router>
            <div className="crm_root">
                {location.pathname === "/crm" ? <Redirect to="/crm/dashboard" /> : null}
                <div className="top_root">
                    <a href="/"><ion-icon name="home"></ion-icon></a>
                    <ion-icon name="log-out" onClick={props.logout}></ion-icon>
                </div>
                <div className="bottom_root">
                    <div className="left_root">
                        <Navlink
                            linkText="Dashboard"
                            linkRef="/crm/dashboard"
                            id="nav-dashboard"
                        />
                        <Navlink
                            linkText="Employee"
                            linkRef="/crm/employee"
                            id="nav-employee"
                        />
                        <Navlink
                            linkText="Customer Info"
                            linkRef="/crm/customer"
                            id="nav-customer"
                        />
                        <Navlink
                            linkText="Notes"
                            linkRef="/crm/notes"
                            id="nav-notes"
                        />
                        <Navlink
                            linkText="Scheduler"
                            linkRef="/crm/scheduler"
                            id="nav-scheduler"
                        />
                        <Navlink
                            linkText="Email"
                            linkRef="/crm/email"
                            id="nav-email"
                        />
                        <Navlink
                            linkText="Help"
                            linkRef="/crm/help"
                            id="nav-help"
                        />
                    </div>
                    <div className="right_root">
                        <Switch>
                            <Route exact path="/crm/dashboard">
                                <LeadWrapper />
                            </Route>
                            <Route exact path="/crm/customer">
                                <ContactWrapper id={null} />
                            </Route>
                            <Route exact path="/crm/customer/:id"
                                render={(props) =>
                                    <ContactWrapper id={props.match.params.id} />
                                } />
                            <Route exact path="/crm/notes">
                                <NoteWrapper id={null} />
                            </Route>
                            <Route exact path="/crm/notes/:id"
                                render={(props) =>
                                <NoteWrapper id={props.match.params.id} />
                            } />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default CRM
