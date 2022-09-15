export interface TableConfig {
  columns: {
    key: string;
    name?: string;
    width?: string;
    sort?: Boolean;
  }[];
  actions?: ('Edit' | 'Delete' | 'Add')[];
}

export interface TableData {
  key: string;
  value: string;
  link?: string;
  image?: string;
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
