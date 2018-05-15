import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'grommet/components/Form';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import firebase from 'firebase';
import { fetchPlayer } from '../PlayersList/module/actions';



class PlayerUpdating  extends Component {

   state = {
       Age: this.props.player.Age,
       Name: this.props.player.Name,
       Surname: this.props.player.Surname,
       id: this.props.player.id,
       facebookID: this.props.player.facebookID,
       Style: this.props.player.Style,
       Rating: this.props.player.Rating
   }

   handleChange = e => {
       console.log(e.target.name, '= ', e.target.value)
       this.setState({
           [e.target.name]: e.target.value
       })

   }

   handleUpdate = id => {

        const updatePlayer = data => {

            const db = firebase.database();
            db.ref().child('players/' + this.props.player.id + '/').update(data)
        }

        updatePlayer({
            Age: this.state.Age,
            Name: this.state.Name,
            Surname: this.state.Surname,
            id: this.state.id,
            facebookID: this.state.facebookID,
            Style: this.state.Style,
            Rating: this.state.Rating
        })
        this.props.fetchPlayers();
        this.props.handleUpdateCancel();
   }
    render(){

        
        const { player: { Age, Name, Surname, id, facebookID, Rating, Style, chosen}, handleUpdateCancel} = this.props;
        return(
             <tr>
                <td>
                <Form >
                            <table>
                                <tbody>
                                <tr><td><span className='td-span-float-left'>Name: </span></td><td><input className='input-main' onChange={(e) => this.handleChange(e)} style={{width: '100%', padding: '0px', marginBottom: '0px'}}  name="Name" type='text' id="name" placeholder='Name:' defaultValue={Name}/></td></tr>
                                <tr><td><span className='td-span-float-left'>Surname: </span></td><td><input className='input-main' onChange={(e) => this.handleChange(e)} style={{width: '100%', padding: '0px', marginBottom: '0px'}} name="Surname" type='text' id="surname" placeholder='Surname:' defaultValue={Surname}/></td></tr>
                                <tr><td><span className='td-span-float-left'>Age: </span></td><td><input className='input-main' onChange={(e) => this.handleChange(e)} style={{width: '100%', padding: '0px', marginBottom: '0px'}} name="Age" type='text' id="age" placeholder='Age:'  defaultValue={Age}/></td></tr>
                                <tr><td><span className='td-span-float-left'>Rating: </span></td><td><input className='input-main' onChange={(e) => this.handleChange(e)} style={{width: '100%', padding: '0px', marginBottom: '0px'}} name="Rating" type='text' id="rating" placeholder='Rating:'  defaultValue={Rating}/></td></tr>
                                <tr><td><Button  className='button-update' style={{marginTop: '0px', marginBottom: '0px', width: '70px'}} onClick={ () => this.handleUpdate(id)}>
                                            UPDATE
                                        </Button>
                                    </td>
                                    <td>
                                    <Button  className='button-update' style={{marginTop: '0px', marginBottom: '0px', width:'70px'}} onClick={ () => handleUpdateCancel(id)}>
                                            CANCEL
                                        </Button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </Form>
                   </td>
                </tr>
        )
    }
    
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    fetchPlayers: () => {
        dispatch(fetchPlayer())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerUpdating);