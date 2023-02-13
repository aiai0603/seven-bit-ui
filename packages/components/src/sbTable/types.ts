import type { ExtractPropTypes } from 'vue';
import type { PropType } from 'vue';
interface columnType {
  title: string;
  dataIndex: string;
  ellipsis?: Boolean;
  width?: String;
}
export interface rowSelectionType {
  type: String;
  showCheckedAll: Boolean;
}
const sizeList = ['mini', 'small', 'medium', 'large'];
export const tableProps = {
  columns: {
    type: Array<columnType>
  },
  data: {
    type: Array<any>
  },
  bordered: {
    type: Boolean,
    default: true
  },
  hoverable: {
    type: Boolean,
    default: true
  },
  stripe: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    value: sizeList,
    default: 'large'
  },
  loading: {
    type: Boolean,
    default: false
  },
  rowSelection: {
    type: Object as PropType<rowSelectionType>
  },
  selectedKeys: {
    type: Array<any>
  }
};

export type TableProps = ExtractPropTypes<typeof tableProps>;
export { columnType };
