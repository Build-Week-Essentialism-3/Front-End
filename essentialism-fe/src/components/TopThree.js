import React from 'react'
import {connect} from 'react-redux';
import {getUserValues1} from '../store/actionIndex';
import {chooseTop} from '../store/actionIndex';
import {useEffect, useState} from 'react';



const TopThree = (props) => {
const currentUser = JSON.parse(localStorage.getItem('userID'));
    
console.log(props.userValues,'user val props from top 3 page')
    // const [userValues, setUserValues]
    const [TopThree, setTopThree] = useState([]);
    const [topThreeShape, setTopThreeShape] = useState([{
        user_id:'',
        value_id:'',
        priority:''
    }]);




    useEffect(() => {
        
        props.getUserValues1(currentUser)
  
    }, [])



    const selectTop = e => {
        e.preventDefault();
        // const updatedList = props.userValues.filter(item => { 
        //     // console.log(item.id) 
        //     return Number(e.target.value) !== item.value_id
           
        // })
        const updatedList = props.userValues.filter(item => { 
                console.log(item.id) 
                return Number(e.target.value) === item.value_id})
        setTopThree([...TopThree, ...updatedList]);
        console.log(TopThree,'top three console')
            // setTopThreeShape([{...topThreeShape,user_id:currentUser}])
    }

    const handlesub = e => {
        e.preventDefault()
        
        props.chooseTop(currentUser,TopThree)

    }



    return (
        <form onSubmit={handlesub} className='top-three-container'>
            {props.userValues.map(val => {
                return (
                <button onClick={selectTop} key={val.id} value={val.value_id}>{val.name}</button>
                )
            })}
            <button type='submit'>Submit Top Three</button>
        </form>
    )
}
const mapStateToProps = state => {
   return{
       userValues:state.userValues,
       TopThree:state.TopThree
   } 
}

export default connect(mapStateToProps, {getUserValues1, chooseTop}) (TopThree)