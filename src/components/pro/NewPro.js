import React, { Component } from 'react'
import FormErrors from './FormErrors'
import { connect } from 'react-redux'
import { createPro } from '../../actions/Pros'
import { Redirect } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class NewPro extends Component {

    state = {
        firstName: '',
        lastName: '',
        age: '',
        homeState: '',
        homeTown: '',
        redirect: null
    }


    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })
      };

      handleSubmit = event => {
          event.preventDefault()

          let pro = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            age: this.state.age,
            home_state: this.state.homeState,
            hometown: this.state.homeTown
          }
          this.props.createPro(pro)
          .then(resp => {
            if (resp.id) {
              this.setState({redirect: '/pros'})
            }
          })
      }

      handleErrors = errors => {
        if (errors !== undefined) {
          return (
            <FormErrors errors={errors}/>
          )
        } 
      }

    
    render() {
      if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
        return (
          <div style={{
            width: '100%',
            height: '100%',
            textAlign: 'center',
            backgroundImage: `url(${"https://files.tripstodiscover.com/files/2017/09/TPC-Sawgrass-Ponte-Vedra.jpg"}`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
          <form  
            style={{ backgroundColor: '#607d8b', width: '250px', textAlign: 'center' }}
            noValidate 
            autoComplete="off"
            onSubmit={this.handleSubmit}
            
          >
            <br/>
            <h2>Add a Pro</h2>
          <TextField 
              style={{ margin: 8, backgroundColor: '#cfd8dc' }}
              id="outlined-basic" 
              label="First Name" 
              variant="outlined" 
              name="firstName"
              type="text"
              value={this.state.firstName} 
              onChange={this.handleChange} />
            <br/>
            <TextField 
              style={{ margin: 8, backgroundColor: '#cfd8dc' }}
              id="outlined-basic" 
              label="Last Name" 
              variant="outlined" 
              name="lastName"
              type="text"
              value={this.state.lastName} 
              onChange={this.handleChange} />
            <br/>
            <TextField
              style={{ margin: 8, backgroundColor: '#cfd8dc' }} 
              id="outlined-basic" 
              label="Age" 
              variant="outlined" 
              name="age"
              type="text"
              value={this.state.age} 
              onChange={this.handleChange} />
            <br/>
            <TextField 
              style={{ margin: 8, backgroundColor: '#cfd8dc' }}
              id="outlined-basic" 
              label="Home State" 
              variant="outlined" 
              name="homeState"
              type="text"
              value={this.state.homeState} 
              onChange={this.handleChange} />
            <br/>
            <TextField 
              style={{ margin: 8, backgroundColor: '#cfd8dc' }}
              id="outlined-basic" 
              label="homeTown" 
              variant="outlined" 
              name="homeTown"
              type="text"
              value={this.state.homeTown} 
              onChange={this.handleChange} />
            <Button variant="outlined" placeholder="submit" type="submit"style={{margin: 8 }}>Submit</Button>
        {this.handleErrors(this.props.error)}
        </form>
        </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    error: state.proError
  }
}

export default connect(mapStateToProps, { createPro })(NewPro);
