export type TableActions = 'Edit' | 'Delete';

export interface ColData {
  key: string;
  name?: string;
  width?: string;
  sort?: Boolean;
  format?: 'currency' | 'number' | 'date' | 'percent';
}
export interface ColumnConfig {
  columns: ColData[];
  actions?: TableActions[];
}

export interface RowData {
  key: string;
  value: string | number;
  link?: string;
  image?: string;
}

export interface TableRowData {
  id: string;
  data: RowData[];
  leaf?: {
    id: string;
    data: RowData[];
  }[];
}
