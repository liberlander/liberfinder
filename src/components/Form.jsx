'use client'
import styles from './Form.module.css'
import fetchUser from '@/services/fetchUser'
import { useContext } from 'react'
import { responseContext } from '@/context/responseContext'

const Form = () => {

  const { setVisible, setResponse } = useContext(responseContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const query = e.target[0].value
    query ? searchUser(query) : null
  }

  const searchUser = async (username) => {
    const userExists = await fetchUser(username);
    setVisible(true)
    userExists ? setResponse(true) : setResponse(false)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="@username"
       />
      <button>Check my kuked status</button>
    </form>
  )
}

export default Form