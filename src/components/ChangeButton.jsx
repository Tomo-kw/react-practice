import { Button } from '@mui/material'
import { useState } from 'react'

const ChangeButton = () => {
    const IsColor = localStorage.getItem("IsColor")
    const changeIsColor = IsColor === 'true' ? true : false
    const [isBgColor, setIsBgColor] = useState(changeIsColor)
    const bgColor = isBgColor ? 'success' : 'inherit'
    const onclick = () => {
        setIsBgColor(!isBgColor)
    }

    // ローカルストレージに保存
    const saveLocalStorage = () => {
        console.log('save')
        localStorage.setItem("IsColor", isBgColor)
    }


    // ローカルストレージから削除
    const deleteLocalStorage = () => {
        console.log('delete')
        localStorage.removeItem("IsColor")
    }

    return (
        <div>
            <p>ボタンを押したらボタンの背景色が変わる</p>
            <Button variant="contained" color={ bgColor } onClick={ onclick }>ボタン</Button>
            <br />
            <br />
            <Button variant="contained" color= 'primary' onClick={ saveLocalStorage }>保存</Button>
            <Button variant="contained" color= 'error' onClick={ deleteLocalStorage }>削除</Button>
        </div>
    );
} 

export default ChangeButton