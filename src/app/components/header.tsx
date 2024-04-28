import NavigationLinks from "./navigation-links";
import SignUp from "./sign-up";

export default function Header() {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <NavigationLinks place="header"/>
        <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <SignUp/>
        </div>
    </header>
  );
};
