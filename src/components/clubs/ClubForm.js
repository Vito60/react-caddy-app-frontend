import React, { Component } from 'react'
import ClubErrorsButton from './ClubErrorsButton'
import { connect } from 'react-redux'
import { createClub } from '../../actions/Pros'
import { Redirect } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export class ClubForm extends Component {

    state = {
        brand: '',
        model: '',
        type: '',
        loft: '',
        proId: this.props.location.pathname.match(/\d+/g),
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

          let club = {
            brand: this.state.brand,
            model: this.state.model,
            club_type: this.state.type,
            loft: this.state.loft,
            pro_id: this.state.proId[0]
          }
          console.log(club)
          this.props.createClub(club)
          .then(resp => {
            if (resp.id) {
              this.setState({redirect: '/pros'})
            }
          })
      }

      handleErrors = errors => {
        if (errors !== undefined) {
          return (
            <ClubErrorsButton/>
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
            <h2>Add a Club</h2>
            <TextField 
              style={{ margin: 8, backgroundColor: '#cfd8dc' }}
              id="outlined-basic" 
              label="Brand" 
              variant="outlined" 
              name="brand"
              type="text"
              value={this.state.brand} 
              onChange={this.handleChange} />
            <br/>
            <TextField 
              style={{ margin: 8, backgroundColor: '#cfd8dc' }}
              id="outlined-basic" 
              label="Model" 
              variant="outlined" 
              name="model"
              type="text"
              value={this.state.model} 
              onChange={this.handleChange} />
            <br/>
            <TextField 
              style={{ margin: 8, backgroundColor: '#cfd8dc' }}
              id="outlined-basic" 
              label="Type" 
              variant="outlined" 
              name="type"
              type="text"
              value={this.state.type} 
              onChange={this.handleChange} />
            <br/>
            <TextField
              style={{ margin: 8, backgroundColor: '#cfd8dc' }} 
              id="outlined-basic" 
              label="Loft" 
              variant="outlined" 
              name="loft"
              type="text"
              value={this.state.loft} 
              onChange={this.handleChange} />
            <br/>
            <Button variant="outlined" placeholder="submit" type="submit"style={{margin: 8 }}>Submit</Button>
            {this.handleErrors(this.props.error)}
        </form>
        </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    error: state.clubError
  }
}

export default connect(mapStateToProps, { createClub })(ClubForm);