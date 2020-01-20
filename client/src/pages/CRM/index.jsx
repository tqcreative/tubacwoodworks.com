import React from 'react'
import { Redirect, useLocation, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style.css';
import NavlinkWrapper from '../../components/NavlinkWrapper';
import LeadWrapper from '../../components/LeadWrapper';
import ContactWrapper from '../../components/ContactWrapper';
import NoteWrapper from '../../components/NoteWrapper';
import ScheduleWrapper from '../../components/ScheduleWrapper';
import EmployeeWrapper from '../../components/EmployeeWrapper';

function CRM(props) {
    const location = useLocation();
    const user=props.user
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
                        <NavlinkWrapper/>
                    </div>
                    <div className="right_root">
                        <Switch>
                            <Route exact path="/crm/dashboard">
                                <LeadWrapper />
                            </Route>
                            <Route exact path="/crm/employee">
                                <EmployeeWrapper user={props.user} loggedIn={props.loggedIn}/>
                            </Route>
                            <Route exact path="/crm/customer">
                                <ContactWrapper id={null} />
                            </Route>
                            <Route exact path="/crm/customer/:id"
                                render={(props) =>
                                    <ContactWrapper id={props.match.params.id} user={user}/>
                                } />
                            <Route exact path="/crm/notes">
                                <NoteWrapper id={null} />
                            </Route>
                            <Route exact path="/crm/notes/:id"
                                render={(props) =>
                                    <NoteWrapper id={props.match.params.id} />
                                } />
                            <Route exact path="/crm/scheduler">
                                <ScheduleWrapper />
                            </Route>
                            <Route exact path="/crm/scheduler/:id"
                                render={(props) =>
                                    <ScheduleWrapper id={props.match.params.id} />
                                } />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default CRM
