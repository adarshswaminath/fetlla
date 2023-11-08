import Lottie from "lottie-react"
import animation from "../../assets/animation.json"


function LoginPage({handleSubmit,setUsername,setPassword,showMessage}) {

  return (
    <div className='min-h-screen flex gap-3 items-center justify-center w-full'>
        <section className='flex flex-col gap-3 lg:w-1/2 p-3'>
            <h1 className='text-2xl font-bold uppercase text-center'>login</h1>
            {showMessage ? <span className='text-center text-sm text-red-500'>Incorrect username or password</span> : null}
            <input type="text" className='input lg:w-1/2 mx-auto' placeholder='Username...' onChange={(e) => setUsername(e.target.value)} />
            <input type="password" className='input lg:w-1/2 mx-auto' placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
            <span className='text-sm text-center text-red-500'>username: admin && password: admin</span>
            <button onClick={handleSubmit} className='btn bg-blue-500 text-white hover:bg-violet-600 lg:w-1/2 mx-auto'>Submit</button>
        </section>
        <div className="hidden lg:flex min-h-screen w-1/2 ">
            <Lottie animationData={animation}/>
        </div>
    </div>
  )
}

export default LoginPage