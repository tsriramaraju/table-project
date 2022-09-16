import { ColumnConfig, TableRowData } from '../interfaces/table';

export const tableConfigData: ColumnConfig = {
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
      format: 'currency',
    },
    {
      key: 'source',
    },
    {
      key: 'total spend last year',
      name: 'Total Spend (Last 12 Months)',
      format: 'currency',
    },
    {
      key: 'contract value',
      format: 'currency',
    },
  ],
  actions: ['Delete', 'Edit'],
};

export const leafConfigData: ColumnConfig = {
  actions: ['Delete', 'Edit'],
  columns: [
    {
      key: 'app',
      name: 'App Name',
    },

    {
      key: 'category',
    },
    {
      key: 'licenses',
      name: 'Licenses bought',
      format: 'number',
    },
    {
      key: 'contract',
      name: 'App covered in contract',
    },
    {
      key: 'Billing frequency',
    },
    {
      key: 'terms',
      name: 'Payment Terms',
    },
  ],
};

export const tableData: TableRowData[] = [
  {
    id: '1',
    leaf: [
      {
        id: 'l1',
        data: [
          {
            key: 'app',
            value: 'App 1',
          },
          {
            key: 'category',
            value: 'Email Tracking software',
          },
          {
            key: 'licenses',
            value: '100',
          },
          {
            key: 'contract',
            value: 'Yes',
          },
        ],
      },
      {
        id: 'l2',
        data: [
          {
            key: 'app',
            value: 'App 2',
          },
          {
            key: 'category',
            value: 'Payment software',
          },

          {
            key: 'contract',
            value: 'Yes',
          },
        ],
      },
      {
        id: 'l3',
        data: [
          {
            key: 'app',
            value: 'App 5',
          },
          {
            key: 'category',
            value: 'Video CMS software',
          },

          {
            key: 'contract',
            value: 'Yes',
          },
        ],
      },
      {
        id: 'l4',
        data: [
          {
            key: 'app',
            value: 'App 1',
          },
          {
            key: 'category',
            value: 'Email Tracking software',
          },
          {
            key: 'licenses',
            value: '100',
          },
          {
            key: 'contract',
            value: 'Yes',
          },
        ],
      },
      {
        id: 'l5',
        data: [
          {
            key: 'app',
            value: 'App 2',
          },
          {
            key: 'category',
            value: 'Payment software',
          },

          {
            key: 'contract',
            value: 'Yes',
          },
        ],
      },
      {
        id: 'l6',
        data: [
          {
            key: 'app',
            value: 'App 9',
          },
          {
            key: 'category',
            value: 'Video CMS software',
          },

          {
            key: 'contract',
            value: 'Yes',
          },
        ],
      },
      {
        id: 'l7',
        data: [
          {
            key: 'app',
            value: 'App 9',
          },
          {
            key: 'category',
            value: 'Video CMS software',
          },

          {
            key: 'contract',
            value: 'Yes',
          },
        ],
      },
      {
        id: 'l8',
        data: [
          {
            key: 'app',
            value: 'App 9',
          },
          {
            key: 'category',
            value: 'Video CMS software',
          },

          {
            key: 'contract',
            value: 'Yes',
          },
        ],
      },
    ],
    data: [
      {
        key: 'vendor',
        value: 'Vendor 1',
        link: 'https://www.google.com',
        // image:'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      },
      {
        key: 'apps',
        value: 23,
      },
      {
        key: 'total spend',
        value: 11000,
      },
      {
        key: 'source',
        value: 'Vendor 5',
      },
      {
        key: 'total spend last year',
        value: 1510000,
      },
      {
        key: 'contract value',
        value: 80000,
      },
    ],
  },
  {
    id: '2',
    data: [
      {
        key: 'vendor',
        value: 'Vendor 3',
        link: 'https://www.google.com',
      },
      {
        key: 'apps',
        value: 14,
      },
      {
        key: 'total spend',
        value: 19000,
      },
      {
        key: 'source',
        value: 'Vendor 5',
      },
      {
        key: 'total spend last year',
        value: 110000,
      },
      {
        key: 'contract value',
        value: 10000,
      },
    ],
  },
  {
    id: '3',
    data: [
      {
        key: 'vendor',
        value: 'Vendor 11',
        link: 'https://www.google.com',
      },
      {
        key: 'apps',
        value: 2,
      },
      {
        key: 'total spend',
        value: 700,
      },
      {
        key: 'source',
        value: 'Vendor 8',
      },
      {
        key: 'total spend last year',
        value: 1000,
      },
      {
        key: 'contract value',
        value: 10000,
      },
    ],
  },
  {
    id: '4',
    data: [
      {
        key: 'vendor',
        value: 'Vendor 2',
        link: 'https://www.google.com',
      },
      {
        key: 'apps',
        value: 16,
      },
      {
        key: 'total spend',
        value: 65000,
      },
      {
        key: 'source',
        value: 'Vendor 22',
      },
      {
        key: 'total spend last year',
        value: 12000,
      },
      {
        key: 'contract value',
        value: 60,
      },
    ],
  },
];
