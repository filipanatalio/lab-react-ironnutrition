import React, {useState} from 'react'
import { Divider, Input } from 'antd';

// Iteration 5
function SearchBar(props) {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
      setSearch(e.target.value);
      props.search(e.target.value);
    };
    
  return (
    <div>
      <Divider>Search</Divider>
      <h4>Search</h4>
     
      <Input value={search} type="text" onChange={handleChange} />
    </div>
  );
}

export default SearchBar;
