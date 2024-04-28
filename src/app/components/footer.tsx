import NavigationLinks from "./navigation-links";

 export default function Footer() {
    return(
        <footer className="py-3 my-4">
            <NavigationLinks place="footer"/>
            <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
        </footer>
    );
 }