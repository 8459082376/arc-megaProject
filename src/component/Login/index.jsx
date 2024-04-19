
import './index.css';
const Login = () => {
 return(
    <div className='login-cont'>
        <form className='my-form'>

            <img className='logo' src="https://assets.ccbp.in/frontend/react-js/logo-img.png" />
        <div class="form-group w-100 mb-4">
          <label for="exampleInputEmail1">Username</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          
        </div>
        <div class="form-group w-100 mb-4">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
       
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
     ) 
    
}



export default Login