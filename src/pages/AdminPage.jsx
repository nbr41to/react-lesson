import React, { useContext } from 'react'
import { Context } from '../Context'

const AdminPage = () => {
  const { user, setUser } = useContext(Context)
  console.log(user)
  return (
    <>
      <h1>管理画面</h1>
      {user ?
        <>
          <p>ログインしています！！！！</p>
          <p>マイプロフィール</p>
          <p>こばやし のぶゆき</p>
          <button onClick={() => setUser(false)}>ログアウト</button>
        </>
        :
        <>
          <p>ログインしてください</p>
          <button onClick={() => setUser(true)}>ログイン</button>
        </>
      }
    </>
  )
}

export default AdminPage
