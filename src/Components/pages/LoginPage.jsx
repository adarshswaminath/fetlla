import React from 'react'

function LoginPage({handleSubmit,setUsername,setPassword,showMessage}) {
  return (
    <div className='min-h-screen flex gap-3 items-center justify-center w-full'>
        <section className='flex flex-col gap-3 lg:w-1/2 p-3'>
            <h1 className='text-2xl font-bold uppercase text-center'>login</h1>
            {showMessage ? <span className='text-center text-sm text-red-500'>Incorrect username or password</span> : null}
            <input type="text" className='input' placeholder='Username...' onChange={(e) => setUsername(e.target.value)} />
            <input type="password" className='input' placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
            <span className='text-sm text-center text-red-500'>username: admin && password: admin</span>
            <button onClick={handleSubmit} className='btn bg-green-500 text-white hover:bg-green-600'>Submit</button>
        </section>
        <div className="hidden lg:flex min-h-screen w-1/2 bg-red-500"></div>
    </div>
  )
}

export default LoginPage