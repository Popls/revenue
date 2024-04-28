type StyleOptions = {
    containerClass: string;
    linkClass: string;
};

const headerStyleOptions: StyleOptions = {
    containerClass: 'col-12 col-md-auto mb-2 justify-content-center mb-md-0',
    linkClass: ''
};

const footerStyleOptions: StyleOptions = {
    containerClass: 'justify-content-center border-bottom pb-3 mb-3',
    linkClass: 'text-body-secondary'
};

export default function NavigationLinks({ place }: { place: "header" | "footer" }) {
    const isHeader = place === "header";
    const currentStyleOptions = isHeader ? headerStyleOptions : footerStyleOptions;

    return (
        <ul className={`nav ${currentStyleOptions.containerClass}`}>
            <li><a href="#" className={`nav-link px-2 ${currentStyleOptions.linkClass}`}>Home</a></li>
            <li><a href="#" className={`nav-link px-2 ${currentStyleOptions.linkClass}`}>Features</a></li>
            <li><a href="#" className={`nav-link px-2 ${currentStyleOptions.linkClass}`}>Pricing</a></li>
            <li><a href="#" className={`nav-link px-2 ${currentStyleOptions.linkClass}`}>FAQs</a></li>
        </ul>
    );
}
