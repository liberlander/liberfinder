'use client'
import { useContext } from 'react'
import Form from './Form'
import styles from './Main.module.css'
import ResponseDiv from './ResponseDiv'
import { responseContext } from '@/context/responseContext'

const Main = () => {

  const { visible, response } = useContext(responseContext)
  
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1>Funado <span>1.0</span> · ✌🏽</h1>
        <p>Estás en la lista negra kuka?</p>
        { visible && <ResponseDiv escrachado={response} /> } 
        <Form />
      </div>
    </main>
  )
}

export default Main