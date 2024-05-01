import Link from 'next/link';

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
            <li><Link href="/" className={`nav-link px-2 ${currentStyleOptions.linkClass}`}>Home</Link></li>
            <li><Link href="/features" className={`nav-link px-2 ${currentStyleOptions.linkClass}`}>Features</Link></li>
            <li><Link href="/pricing" className={`nav-link px-2 ${currentStyleOptions.linkClass}`}>Pricing</Link></li>
        </ul>
    );
}
