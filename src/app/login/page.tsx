export default function Login() {
  return (
    <div className="container col-sm-2">
        <form>
            <h1 className="h3 mb-3 fw-normal">Please login</h1>
            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Login</button>
        </form>
    </div>
  );
}
