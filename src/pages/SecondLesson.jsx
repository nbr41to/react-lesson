import React, { useState, useContext, useEffect } from 'react'
import Parent from '../components/Parent'
import Button from '../components/Button'

const SecondLesson = () => {
  const { color, setColor } = useState("red")
  console.log("SecondLessonがRenderingされました")
  return (
    <div className="box">
      <h1>Second Lesson</h1>
      <Parent name="太郎" color={color} />
      <Button whatColor="green" setColor={setColor} >ボタンだよ！</Button>
      {/* <Parent />
      <Parent /> */}
    </div>
  )
}

export default SecondLesson
