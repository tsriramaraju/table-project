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
            value: 'Boomerang',
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
            value: 'Quickbooks',
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
            value: 'Loom',
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
            value: 'Slack',
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
            value: 'Wordpress',
          },
          {
            key: 'category',
            value: 'CMS software',
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
            value: 'Zoom',
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
            value: 'Calendy',
          },
          {
            key: 'category',
            value: 'Appointment software',
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
        value: 'Box',
        link: 'https://www.google.com',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Box%2C_Inc._logo.svg/640px-Box%2C_Inc._logo.svg.png',
      },
      {
        key: 'apps',
        value: 8,
      },
      {
        key: 'total spend',
        value: 2176,
      },

      {
        key: 'total spend last year',
        value: 2176,
      },
      {
        key: 'contract value',
        value: 10000,
      },
    ],
  },
  {
    id: '2',
    leaf: [
      {
        id: 'l1',
        data: [
          {
            key: 'app',
            value: 'Boomerang',
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
            value: 'Quickbooks',
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
            value: 'Loom',
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
            value: 'Slack',
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
            value: 'Wordpress',
          },
          {
            key: 'category',
            value: 'CMS software',
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
            value: 'Zoom',
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
            value: 'Calendy',
          },
          {
            key: 'category',
            value: 'Appointment software',
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
        value: 'Apple Store',
        link: 'https://www.google.com',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      },
      {
        key: 'apps',
        value: 4,
      },
      {
        key: 'total spend',
        value: 1212,
      },
      {
        key: 'source',
        value: 'Expensify',
      },
      {
        key: 'total spend last year',
        value: 1212,
      },
      {
        key: 'contract value',
        value: 1,
      },
    ],
  },
  {
    id: '3',
    leaf: [
      {
        id: 'l1',
        data: [
          {
            key: 'app',
            value: 'Boomerang',
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
            value: 'Quickbooks',
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
            value: 'Loom',
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
            value: 'Slack',
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
            value: 'Wordpress',
          },
          {
            key: 'category',
            value: 'CMS software',
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
            value: 'Zoom',
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
            value: 'Calendy',
          },
          {
            key: 'category',
            value: 'Appointment software',
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
        value: 'Verizon',
        link: 'https://www.google.com',
        image:
          'https://i.pinimg.com/originals/eb/75/ff/eb75ffe419c3cc15db8e007e32e74771.png',
      },
      {
        key: 'apps',
        value: 7,
      },
      {
        key: 'total spend',
        value: 333,
      },
      {
        key: 'source',
        value: 'Excel',
      },
      {
        key: 'total spend last year',
        value: 4287,
      },
      {
        key: 'contract value',
        value: 6000,
      },
    ],
  },
  {
    id: '4',
    leaf: [
      {
        id: 'l1',
        data: [
          {
            key: 'app',
            value: 'Boomerang',
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
            value: 'Quickbooks',
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
            value: 'Loom',
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
            value: 'Slack',
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
            value: 'Wordpress',
          },
          {
            key: 'category',
            value: 'CMS software',
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
            value: 'Zoom',
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
            value: 'Calendy',
          },
          {
            key: 'category',
            value: 'Appointment software',
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
        value: 'Google',
        link: 'https://www.google.com',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png',
      },
      {
        key: 'apps',
        value: 16,
      },
      {
        key: 'total spend',
        value: 839,
      },
      {
        key: 'source',
        value: 'Zoho',
      },
      {
        key: 'total spend last year',
        value: 4321,
      },
      {
        key: 'contract value',
        value: 50000,
      },
    ],
  },
  {
    id: '5',
    leaf: [
      {
        id: 'l1',
        data: [
          {
            key: 'app',
            value: 'Boomerang',
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
            value: 'Quickbooks',
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
            value: 'Loom',
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
            value: 'Slack',
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
            value: 'Wordpress',
          },
          {
            key: 'category',
            value: 'CMS software',
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
            value: 'Zoom',
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
            value: 'Calendy',
          },
          {
            key: 'category',
            value: 'Appointment software',
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
        value: 'Reebok',
        link: 'https://www.google.com',
        image:
          'https://preview.thenewsmarket.com/Previews/RBOK/StillAssets/1920x1080/551064.png',
      },
      {
        key: 'apps',
        value: 4,
      },
      {
        key: 'total spend',
        value: 4124,
      },
      {
        key: 'source',
        value: 'Excel',
      },
      {
        key: 'total spend last year',
        value: 5000,
      },
      {
        key: 'contract value',
        value: 87423,
      },
    ],
  },
  {
    id: '6',
    leaf: [
      {
        id: 'l1',
        data: [
          {
            key: 'app',
            value: 'Boomerang',
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
            value: 'Quickbooks',
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
            value: 'Loom',
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
            value: 'Slack',
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
            value: 'Wordpress',
          },
          {
            key: 'category',
            value: 'CMS software',
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
            value: 'Zoom',
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
            value: 'Calendy',
          },
          {
            key: 'category',
            value: 'Appointment software',
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
        value: 'Dropbox',
        link: 'https://www.google.com',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/2202px-Dropbox_Icon.svg.png',
      },
      {
        key: 'apps',
        value: 8,
      },
      {
        key: 'total spend',
        value: 286,
      },
      {
        key: 'source',
        value: 'Zoho',
      },
      {
        key: 'total spend last year',
        value: 286,
      },
      {
        key: 'contract value',
        value: 1000,
      },
    ],
  },
  {
    id: '7',
    leaf: [
      {
        id: 'l1',
        data: [
          {
            key: 'app',
            value: 'Boomerang',
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
            value: 'Quickbooks',
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
            value: 'Loom',
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
            value: 'Slack',
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
            value: 'Wordpress',
          },
          {
            key: 'category',
            value: 'CMS software',
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
            value: 'Zoom',
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
            value: 'Calendy',
          },
          {
            key: 'category',
            value: 'Appointment software',
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
        value: 'Tesla',
        link: 'https://www.google.com',
        image:
          'data:image/png;base64,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',
      },
      {
        key: 'apps',
        value: 74,
      },
      {
        key: 'total spend',
        value: 25333,
      },
      {
        key: 'source',
        value: 'Fresh books',
      },
      {
        key: 'total spend last year',
        value: 34000,
      },
      {
        key: 'contract value',
        value: 700000,
      },
    ],
  },
  {
    id: '8',
    data: [
      {
        key: 'vendor',
        value: 'Zara',
        link: 'https://www.google.com',
        image:
          'https://1000logos.net/wp-content/uploads/2022/08/Zara-Logo-1980s.png',
      },

      {
        key: 'total spend',
        value: 400,
      },

      {
        key: 'total spend last year',
        value: 400,
      },
      {
        key: 'contract value',
        value: 5000,
      },
    ],
  },
];
