import SignUp from "./components/sign-up";

export default function Home() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">Revenue for everyone</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Manage your hotel room prices effortlessly. Adjust rates based on market trends with ease. Our simple platform integrates seamlessly with existing systems, maximizing revenue without added complexity. Optimize prices, leaving you free to focus on providing excellent guest experiences. Join today and revolutionize your hotel's pricing strategy.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <SignUp size="btn-lg px-4 gap-3"/>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Learn more</button>
        </div>
      </div>
    </div>
  );
}
