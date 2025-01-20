import React, { useState } from 'react';
import { Form, FormInstance } from 'antd';
import { CustomButton, ResetButton } from '../button';
import './styles.scss';
import AdvancedSearch from './AdvancedSearch';
import { DataType } from '../../interfaces/tables/TableType';
import SearchForm from '../form/SearchForm';
import { FormContext } from '../form';

interface FilterProps {
  card?: boolean;
  onSearch?: (values: DataType) => void;
}

const MyFilter: React.FC<FilterProps> = ({ card = false, onSearch }) => {
  const [form] = Form.useForm();
  const [searchFilterAdvanced, setSearchFilterAdvanced] = useState(false);
  const handleReset = () => {
    form.resetFields();
  };

  const onFinish = (values: DataType) => {
    console.log('Dữ liệu form:', values);
    if (onSearch) {
      onSearch(values);
    }
  };

  if (card) {
    return (
      <div className="content-filter">
        <label htmlFor="filter-list" className="show-list-label">
          <input type="checkbox" id="filter-list" name="filter-list" />
          Show List
        </label>
      </div>
    );
  }
  const defaultOptions = [
    { value: "", label: "All" },
    { value: "A", label: "Active" },
    { value: "I", label: "Inactive" },
  ]
  return (
    <FormContext.Provider value={form}>
      <SearchForm onFinish={onFinish} options={defaultOptions}>
        <div className="filter-action">
          <ResetButton onClick={handleReset} />
          <div className="h-center">
            <CustomButton text="Search" iconName="search" primary htmlType="submit" />
            <CustomButton
              iconName="filter"
              outline
              onClick={() => setSearchFilterAdvanced(true)}
            />
          </div>
        </div>
      </SearchForm>
      <AdvancedSearch form={form} open={searchFilterAdvanced} onClose={() => setSearchFilterAdvanced(false)} onFinish={onFinish} />
    </FormContext.Provider>
  );
};

export default MyFilter;
