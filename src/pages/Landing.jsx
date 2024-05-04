import { Outlet } from 'react-router-dom';
import '../styles.css'


const Landing = () => {
  return (
    <div className="container-fluid bgImage">
    <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-8 text-center">
            <h1 className="display-4 fw-bold">Vehicle Care Service</h1>
            <h3 >Welcome to our service center</h3>
            <p className="lead">
                Choose from a range of services for your Vehicle. <strong>Register</strong> or <strong>login</strong> to get started.
            </p>
            <Outlet/>
        </div>
    </div>
</div>
  )
}

export default Landing;