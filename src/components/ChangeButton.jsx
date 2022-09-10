import { Button } from '@mui/material'
import { useState } from 'react'

const ChangeButton = () => {
    const [color, setColor] = useState('inherit')

    const onclick = () => {
        console.log('ボタンクリックされた')
        setColor('success')
    }

    return (
        <div>
            <p>押したらボタンの背景色が変わる</p>
            <Button variant="contained" color={ color } onClick={ onclick }>ボタン</Button>
        </div>
    );
} 

export default ChangeButton