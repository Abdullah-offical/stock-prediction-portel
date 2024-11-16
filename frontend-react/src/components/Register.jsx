import React from 'react'

const Register = () => {
  return (
    <>
        <div className='container'>
        <div className="row justify-content-center">
            <div className="col-md-6 bg-light-dark p-5 rounded">
                <h3 className='text-light text-center mb-4'>Create an Account</h3>
                <form >
                  <div className='mb-3'>
                    <input type="text" className='form-control' placeholder='Username' />
                  </div>
                    <div className='mb-3'>
                      <input type="email" className='form-control' placeholder='Email address' />
                    </div>
                    <div className='mb-3'>
                    <input type="password" className='form-control ' placeholder='Set password' />
                    </div>    
                      <button type='submit' className='btn btn-info d-block mx-auto'>Register</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register