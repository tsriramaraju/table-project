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
