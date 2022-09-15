import { TableConfig } from '../interfaces/table';

export const tableConfigData: TableConfig = {
  columns: [
    {
      key: 'vendor',
      name: 'Vendor Name',
      format: 'Image and Text',
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
