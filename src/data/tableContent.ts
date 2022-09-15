import { TableConfig, TableData } from '../interfaces/table';

export const tableConfigData: TableConfig = {
  columns: [
    {
      key: 'vendor',
      name: 'Vendor Name',
    },
    {
      key: 'apps',
      name: '# of Apps',
    },
    {
      key: 'total spend',
      name: 'Total Spend (YTD)',
    },
    {
      key: 'source',
    },
    {
      key: 'total spend last year',
      name: 'Total Spend (Last 12 Months)',
    },
    {
      key: 'contract value',
    },
  ],
  actions: ['Add', 'Delete', 'Edit'],
};

export const tableData: TableData[][] = [
  [
    {
      key: 'vendor',
      value: 'Vendor 1',
      link: 'https://www.google.com',
    },
    {
      key: 'apps',
      value: '23',
    },
    {
      key: 'total spend',
      value: '$11,000',
    },
    {
      key: 'source',
      value: 'Vendor 5',
    },
    {
      key: 'total spend last year',
      value: '$1510,000',
    },
    {
      key: 'contract value',
      value: '$80,000',
    },
  ],
  [
    {
      key: 'vendor',
      value: 'Vendor 5',
      link: 'https://www.google.com',
    },
    {
      key: 'apps',
      value: '14',
    },
    {
      key: 'total spend',
      value: '$630,000',
    },
    {
      key: 'source',
      value: 'Vendor 8',
    },
    {
      key: 'total spend last year',
      value: '$97,000',
    },
    {
      key: 'contract value',
      value: '$878,000',
    },
  ],
  [
    {
      key: 'vendor',
      value: 'Vendor 3',
      link: 'https://www.google.com',
    },
    {
      key: 'apps',
      value: '3',
    },
    {
      key: 'total spend',
      value: '$100,000',
    },
    {
      key: 'source',
      value: 'Vendor 3',
    },
    {
      key: 'total spend last year',
      value: '$100,000',
    },
    {
      key: 'contract value',
      value: '$100,000',
    },
  ],
];
