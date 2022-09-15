export interface TableConfig {
  columns: {
    key: string;
    name?: string;
    format?: 'Text' | 'Number' | 'Image' | 'Image and Text';
    width?: string;
    sort?: Boolean;
  }[];
  actions?: ('Edit' | 'Delete' | 'Add')[];
}
