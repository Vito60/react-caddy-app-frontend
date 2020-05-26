import React from 'react'
import { connect } from 'react-redux'

const ProErrorsContainer = (props) => {


    const errors = (errorArray, errorKeys) => {
        return (
            <ul style={{listStyle: "none"}}>
                {errorKeys.map(key => {
                    return(
                    <li style={{color: "#c62828"}}>{key.replace("_", " ")}: {errorArray[key]}</li>
                    )
                })}
            </ul>
        )
    }

    return (
        <div>
            {errors(props.errors, Object.keys(props.errors))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
      errors: state.proError
    }
  }
  
  export default connect(mapStateToProps)(ProErrorsContainer);
