import React, {useState, useEffect} from 'react'
import { Wrappar, Text } from './Display.styled'
import { doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore'

import { firestore } from '../../lib/firestore'
const reference = doc(firestore, 'money', 'user1')


const Display = ({title, add}) => {
    const [value, setValue] = useState(0)
    const [styles, setStyles] = useState({})
    useEffect(() => {
        console.clear()
        getDoc(reference)
            .then(snapShot => {
                console.log(snapShot.data())
                const obj = snapShot.data()
                const lastChanged = obj.lastChanged
                if(lastChanged === 'added' && add) {
                    setStyles({
                        background: 'green',
                        color: 'black',
                        transition: 'all .5s ease-in'
                    })
                    setTimeout(() => {setStyles({})}, 3000)
                } else if (lastChanged === 'removed' && !add) {
                    setStyles({
                        background: 'green',
                        color: 'black',
                        transition: 'all .5s ease-in'
                    })
                    setTimeout(() => {setStyles({})}, 3000)
                }
                 else {
                    setStyles({})
                }
                

                if(add) {
                    setValue(obj.added)
                } else {
                    setValue(obj.removed)
                }


                console.log(snapShot.data().added)
            })
       
    }, [])
    return (
        <Wrappar style={styles}>
            <Text >{title ? title : 'Add Money'}</Text>
            <Text>{value ? `$${value}` : '$0'}</Text>
        </Wrappar>
    )
}

export default Display
