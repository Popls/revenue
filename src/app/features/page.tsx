import { CpuFill, Gear, Calendar } from 'react-bootstrap-icons';

export default function Features() {
  return (
    <div className="container px-4 py-5" id="icon-grid">
      <h2 className="pb-2 border-bottom">Features</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5 justify-content-center">
        <div className="col d-flex align-items-start">
          <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em">
            <Gear style={{ fontSize: '1.75em' }}/>
          </svg>
          <div>
            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Integration with Major Hotel Websites</h3>
            <p>Our application seamlessly integrates with the most important hotel websites, ensuring that your property listings and pricing information are always up-to-date across platforms.</p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em">
            <Calendar style={{ fontSize: '1.75em' }}/>
          </svg>
          <div>
            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Comprehensive Calendar View</h3>
            <p>Our intuitive calendar interface provides an easy-to-use overview of pricing, availability, and events for any time period, allowing you to manage your bookings efficiently.</p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em">
            <CpuFill style={{ fontSize: '1.75em' }}/>
          </svg>
          <div>
            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Automatic Synchronization</h3>
            <p>Changes made within our platform are automatically synchronized with the most important booking pages, ensuring consistency and accuracy across all channels.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
