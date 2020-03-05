import React, { useState, useEffect } from 'react';
// import { Form, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import {getUserValues,getTopValues,getProj} from '../store/actionIndex';

const Compare = props => {
    console.log(props);
    const userId = JSON.parse(localStorage.getItem('userID'));

    // useEffect((props, userId) => {
    //     async function fetchData() {
    //         await props.getUserValues(userId);
    //     }
    //     fetchData();
    // }, [])

    // useEffect((props, userId) => {
    //     async function fetchData() {
    //         await props.getTopValues(userId);
    //     }
    //     fetchData();
    // }, [])

    // useEffect((props, userId) => {
    //     async function fetchData() {
    //         await props.getProj(userId);
    //     }
    //     fetchData();
    // }, [])

    useEffect(() => {
        props.getUserValues(userId);
        props.getTopValues(userId);
        props.getProj(userId);
    }, []);

    console.log('User Values: ', props.userValues);
    console.log('Top Values: ', props.topValues);
    console.log('Projects: ', props.projects);


    return (
        <>
            <div className='projects-container'>
                {props.projects && props.projects.map(proj => (
                    <div key={`proj-${proj.id}`} value={proj.id} className='compare-project-div'>
                        <div>
                            <h3>Project: {proj.project}</h3>
                            <h5>Description: {proj.description}</h5>
                        </div>
                        <div>
                            <p>Edit Icon</p>
                            <p>Delete Icon</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='user-values-container'>
                {props.userValues && props.userValues.map(val => (
                    props.topValues && props.topValues.map(top => (
                        (top.value_id === val.value_id ? 
                            <div key={`top-${top.id}`} className='compare-top-div'>
                                <div>
                                    <h3>Top Value: {top.name}</h3> 
                                    <h5>Priority: {top.priority}</h5> 
                                </div>
                                <div>
                                    <p>Delete Icon</p>
                                </div>
                            </div>
                            :
                            <div key={`val-${val.id}`} className='compare-value-div'>
                                <div>
                                    <h3>Value: {val.name}</h3>
                                </div>
                                <div>
                                    <p>Delete Icon</p>
                                </div>
                            </div>
                        )
                    ))
                ))};
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        projects:state.projects,
        currentUser:state.currentUser,
        userValues:state.userValues,
        topValues:state.topValues
    }
}

export default connect(mapStateToProps,{getUserValues,getTopValues,getProj}) (Compare);