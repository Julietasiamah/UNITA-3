import {} from "react-bootstrap";

const MyFooter = (props) => {
  return (
    <footer className="mt-4">
      <ul className=" nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <a href="#" className="nav-link  px-2 text-body-secondary">
            {props.li1}
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link  px-2 text-body-secondary">
            {props.li2}
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link  px-2 text-body-secondary">
            {props.li3}
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link  px-2 text-body-secondary">
            {props.li4}
          </a>
        </li>
      </ul>
      <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
    </footer>
  );
};

export default MyFooter;
