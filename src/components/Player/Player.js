import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import firebase from 'firebase';
import { fetchPlayer } from '../PlayersList/module/actions';

const Player = props => {

    const { player: {Name, Surname, Rating, Age, Style, id}, user, fetchPlayers } = props;
    
    const handleDelete = (id) => {

        console.log('id = ', id);

        const db = firebase.database();   

        db.ref().child('players/' + id + '/').remove();

        fetchPlayers();
    }
    

    return(
        <tr>
            {user.uid === 'YK4O4xkCEtcwBIdwyRVVzuFCbzH3' ? <td> <Field component='input' type='checkbox' name={Name + Surname} /> </td> : <td> - </td>}
            <td>
                <span className='td-span-float-left'>{Name} {Surname}</span>
            </td>
            <td>
                {Age}
            </td>
            <td>
                {Rating}
            </td>
            <td>
                {Style}
            </td>
            
                {user.uid === 'YK4O4xkCEtcwBIdwyRVVzuFCbzH3' ? 
                <td>
                    <button onClick={() => handleDelete(id)}>
                        x
                    </button>
                 </td> :
                 <td>
                     :P
                </td> 
            }
            
        </tr>
    )
}

const mapStateToProps = state => ({
    user: state.firebase.auth
})

const mapDispatchToProps = dispatch => ({
    fetchPlayers: () => {
        dispatch(fetchPlayer())
    }
})

const withReduxFormPlayer = reduxForm({
    form : 'checked-players'
})(Player)

export default connect(mapStateToProps, mapDispatchToProps )(withReduxFormPlayer);