import React from 'react';
import Box from 'grommet/components/Box';

const PlayerInGroup = props => {
    
   
    return(
        props.player !== undefined ?
            <tr className='group' style={{backGroundColor: '#fff'}}>
                <td><span className='td-span-float-left'>{props.number + 1}</span></td>
                
                <td><span className='td-span-float-left'>{props.player.Name} {props.player.Surname}</span></td>
                <td><span className='td-span-float-left'>{props.player.Rating}</span></td>
                
            </tr>
            : <tr>
                <td><span className='td-span-float-left'>{props.number + 1}</span></td>
                <td><span className='td-span-float-left'>---6--</span></td>
                <td><span className='td-span-float-left'>-----</span></td>
                </tr>
    )
}

export default PlayerInGroup;