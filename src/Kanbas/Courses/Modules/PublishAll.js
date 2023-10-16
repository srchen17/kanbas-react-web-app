import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import {AiOutlineCheckCircle} from 'react-icons/ai';

import './index.css';

function PublishAll() {
  return (
    <Dropdown>
      <Dropdown.Toggle className="dropdown" id="dropdown-basic">
        <AiOutlineCheckCircle className="text-success" size={15}/>  Publish All
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default PublishAll;