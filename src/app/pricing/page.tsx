import { Check } from 'react-bootstrap-icons';

export default function Pricing(){
    return(
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Free</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$0<small className="text-body-secondary fw-light">/mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>1 user included</li>
                                <li>1 hotel support</li>
                                <li>Integration with third parties</li>
                                <li>Help center access</li>
                            </ul>
                            <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Pro</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$19,99<small className="text-body-secondary fw-light">/mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>5 user included</li>
                                <li>Unlimited hotel support</li>
                                <li>Integration with third parties</li>
                                <li>Help center access</li>
                            </ul>
                            <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm border-primary">
                        <div className="card-header py-3 text-bg-primary border-primary">
                            <h4 className="my-0 fw-normal">Enterprise</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$29,99<small className="text-body-secondary fw-light">/mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Unlimited users included</li>
                                <li>Unlimited hotel support</li>
                                <li>Integration with third parties</li>
                                <li>Help center access</li>
                            </ul>
                            <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="display-6 text-center mb-4">Compare plans</h2>

            <div className="table-responsive">
                <table className="table text-center">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Free</th>
                        <th>Pro</th>
                        <th>Enterprise</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row" className="text-start">Private area</th>
                        <td><Check/></td>
                        <td><Check/></td>
                        <td><Check/></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Third party integrations</th>
                        <td><Check/></td>
                        <td><Check/></td>
                        <td><Check/></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Unlimited hotels</th>
                        <td></td>
                        <td><Check/></td>
                        <td><Check/></td>
                    </tr>
                    </tbody>

                    <tbody>
                    <tr>
                        <th scope="row" className="text-start">Unlimited users</th>
                        <td></td>
                        <td></td>
                        <td><Check/></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-start">Permissions control</th>
                        <td></td>
                        <td></td>
                        <td><Check/></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}