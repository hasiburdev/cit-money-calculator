import React from 'react'
import Change from '../Change/Change'
import Display from '../Display/Display'

import { Container, DisplayWrappar, ChangeWrappar } from './MoneyManager.styled'
import Total from '../Total/Total'

const MoneyManager = () => {
    return (



        <Container>
            <ChangeWrappar>
                <Change add/> 
                <Change />   

            </ChangeWrappar>
            <Total />
            <DisplayWrappar>
                <Display title='Added Money' add/>
                <Display title='Removed Money' />
            </DisplayWrappar>
        </Container>
    )
}

export default MoneyManager
