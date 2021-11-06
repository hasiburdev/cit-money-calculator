import React, {useState} from 'react'
import { doc, setDoc, getDoc } from 'firebase/firestore'

import { firestore } from '../../lib/firestore'
import { Button, Input, Title, Wrappar } from './Change.styled'

const reference = doc(firestore, 'money', 'user1')

const Change = ({add}) => {
    const [change, setChange] = useState(0)
    const [data, setData] = useState({})

    const handleChange = () => {

        getDoc(reference)
            .then(snapShot => {
                let updatedMoney
                let lastChanged
                const added = snapShot.data().added
                const totalMoney = snapShot.data().totalMoney
                console.log(snapShot.data().added)
                if(add) {
                    updatedMoney = totalMoney + parseFloat(change)
                    lastChanged = 'added'
                } else {
                    updatedMoney = totalMoney - parseFloat(change)
                    lastChanged = 'removed'
                }
                
                setDoc(reference, {
                    [lastChanged]: parseFloat(change),
                    totalMoney: updatedMoney,
                    lastChanged
                }, {merge: true})
                    .then(() => {
                        console.log('Success!')
                    })

            })
        console.log('Clicked');
    }

    return (
        <Wrappar>
            <Title>{add ? 'Add' : 'Remove'} Money</Title>
            <Input 
                onChange={e => setChange(e.target.value)} 
                type="number" 
                placeholder={add ? 'Add Money...' : 'Remove Money...'}
            />
            <Button onClick={handleChange}>{add ? 'Add' : 'Remove'}</Button>
        </Wrappar>
    )
}
export default Change
