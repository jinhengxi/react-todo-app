import React, { useState, useCallback } from 'react'
import { MdAdd } from 'react-icons/md'
import './TodoInsert.scss'

const TodoInsert = ( {onInsert} )=>{
    const [value, setValue] = useState('')

    const onChange = (e)=>{
        setValue(e.target.value);
    }

    const onSubmit = (e)=>{
        onInsert(value)
        setValue('')
        e.preventDefault()
    }

    return(
        <form className='TodoInsert' onSubmit={onSubmit} >
            <input value={value} onChange={onChange} placeholder='할 일을 입력하세요'/>
            <button type='submit'>
                <MdAdd/>
            </button>
        </form>
    )
}

export default TodoInsert