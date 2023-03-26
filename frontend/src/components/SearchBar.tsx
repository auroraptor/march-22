import React, { useState } from 'react';
import { Input } from 'antd';
import { SearchBarProps } from '../types';

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <Input.Search
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      onSearch={handleSearch}
      placeholder="Поиск по сделкам"
      enterButton
    />
  );
};

export default SearchBar;