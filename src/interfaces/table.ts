export type TableActions = 'Edit' | 'Delete';
export interface TableConfig {
  columns: {
    key: string;
    name?: string;
    width?: string;
    sort?: Boolean;
    format?: 'currency' | 'number' | 'date' | 'percent';
  }[];
  actions?: TableActions[];
}

export interface TableRowData {
  id: string;
  data: {
    key: string;
    value: string | number;
    link?: string;
    image?: string;
  }[];
}
