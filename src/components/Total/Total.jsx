import React, {useEffect, useState} from 'react'
import { doc, setDoc, getDoc } from 'firebase/firestore'

import { firestore } from '../../lib/firestore'
import { Wrappar, Header } from './Total.styled'

const reference = doc(firestore, 'money', 'user1')

const Total = () => {
    const [total, setTotal] = useState(0)

    useEffect(() => {
        console.clear()
        getDoc(reference)
            .then(snapShot => {
                // console.log(snapShot.data())
                setTotal(snapShot.data().totalMoney)
                // console.log(snapShot.data().totalMoney)
            })
       
    }, [])
    return (
        <Wrappar>
            <Header>Total Money</Header>
            <Header>{total ? `$${total}` : '$0'}</Header>
        </Wrappar>
    )
}
export default Total
