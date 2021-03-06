import React, { useState, useEffect } from 'react';
// import { Form, Label, Input, Button } from 'reactstrap';
import { connect, connectAdvanced } from 'react-redux';
import {getUserValues,getTopValues,getProj,deleteValues} from '../store/actionIndex';
import { axiosWithAuth } from '../store/axiosWithAuth';



const Compare = props => {
    const userId = JSON.parse(localStorage.getItem('userID'));

    useEffect(() => {
        props.getUserValues(userId);
        props.getTopValues(userId);
        props.getProj(userId);
      console.log(props.topValues,'top values on mount')
    }, []);

    let sorted = [];
    const sort = () => {
        let topOnly = [];
        let valOnly = [];

        let ids = [];
        props.topValues.filter(top => {
            ids.push(top.value_id);
        });

        props.userValues.map(val => {
            props.topValues.map(top => {
                if (top.name === val.name) {
                    topOnly.push(top);
                } else {
                    if (val.value_id !== ids[0] && val.value_id !== ids[1] && val.value_id !== ids[2]) {
                        valOnly.push(val);
                    };
                };
            });
        });

        const distinctVal = [...new Set(valOnly)];
        sorted = topOnly.concat(distinctVal);
    }
    sort();

    const handleDelete = e => {
        

e.preventDefault()
for (let i=0; i<props.topValues.length; i++) {
    if(props.topValues[i].value_id === e.target.value) {
        props.deleteValues(userId,props.topValues.value_id)
    }
}
console.log(e.target.value,'sorted vals')
 
        
    };
    

    return (
        <div className='compare-container'>
            <div className='projects-container'>
                <h3>Your Projects:</h3>
                {props.projects && props.projects.map(proj => (
                    <div key={`proj-${proj.id}`} value={proj.id} className='compare-project-div'>
                        <div>
                            <h4>Project: {proj.project}</h4>
                            <h5>Description: {proj.description}</h5>
                        </div>
                        <div>
                            <h6>Edit Icon</h6>
                            <h6>Delete Icon</h6>
                        </div>
                    </div>
                ))}
            </div>

            <div className='user-values-container'>
                <h3>Your Values:</h3>
                {sorted.map(val => (
                    (val.priority === 1 || val.priority === 2 || val.priority === 3 ? 
                        <div className='compare-top-div'>
                            <div>
                                <h4>#{val.priority}</h4>
                                <h4>Top Value: {val.name}</h4>  
                            </div>
                            <div>
                                <form>
                               <button><h6 onClick={handleDelete} value={val.value_id}>Delete Icon</h6></button>
                                 </form>
                                {/* onclick={()=> props.deleteValues(userId,val.value_id)} */}
                               
                            </div>
                        </div>  
                        :
                        <div className='compare-value-div'>
                            <div>
                                <h4>Value: {val.name}</h4>
                            </div>
                            <div>
                                <h6>Delete Icon</h6>
                            </div>
                        </div>  
                    )
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        projects:state.projects,
        currentUser:state.currentUser,
        userValues:state.userValues,
        topValues:state.topValues,
        deleteValues:state.deleteValues
    }
}

export default connect(mapStateToProps,{getUserValues,getTopValues,getProj,deleteValues}) (Compare);