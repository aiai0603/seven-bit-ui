<template>
  <div class="sb-table" :class="styleClass">
    <div class="sb-spin">
      <div class="sb-table-container">
        <div class="sb-scrollbar sb-scrollbar-type-embed" style="height: 100%">
          <div class="sb-scrollbar-container sb-table-content sb-table-content-scroll-x">
            <table class="sb-table-element" cellpadding="0" cellspacing="0" style="table-layout: fixed">
              <thead>
                <tr class="sb-table-tr">
                  <th class="sb-table-th sb-table-operation sb-table-checkbox">
                    <span class="sb-table-cell">
                      <label v-if="SelectionFlag && showCheckedAll" class="sb-checkbox" :class="ifAllChecked">
                        <input id="checkall" v-model="allChecked" type="checkbox" class="sb-checkbox-target" />
                        <span class="sb-icon-hover sb-checkbox-icon-hover">
                          <div class="sb-checkbox-icon">
                            <svg aria-hidden="true" focusable="false" viewBox="0 0 1024 1024" width="200" height="200" fill="currentColor" class="sb-checkbox-icon-check">
                              <path
                                d="M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z"
                                p-id="840"
                              ></path>
                            </svg>
                          </div>
                        </span>
                      </label>
                    </span>
                  </th>
                  <th v-for="column in tableColumns" :key="column.title.charCodeAt(0)" class="sb-table-th">
                    <span class="sb-table-cell sb-table-cell-align-left">
                      <span class="sb-table-th-title">
                        {{ column.title }}
                      </span></span
                    >
                  </th>
                </tr>
              </thead>
              <div v-if="tData?.list.length === 0" class="sb-empty">
                <slot name="empty"></slot>
              </div>
              <tbody v-else>
                <tr v-for="dataTr in tData?.list" :key="JSON.stringify(dataTr)" class="sb-table-tr" :class="tableTrStyle">
                  <td v-if="SelectionFlag" class="sb-table-td sb-table-operation sb-table-checkbox">
                    <span class="sb-table-cell">
                      <label class="sb-checkbox" :class="dataTr.status ? 'sb-checkbox-checked' : ''">
                        <input v-model="dataTr.status" type="checkbox" class="sb-checkbox-target" />
                        <span class="sb-icon-hover sb-checkbox-icon-hover">
                          <div class="sb-checkbox-icon">
                            <svg aria-hidden="true" focusable="false" viewBox="0 0 1024 1024" width="200" height="200" fill="currentColor" class="sb-checkbox-icon-check">
                              <path
                                d="M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z"
                                p-id="840"
                              ></path>
                            </svg>
                          </div>
                        </span>
                      </label>
                    </span>
                  </td>

                  <td v-for="(dataTd, index) in dataTr.data" :key="JSON.stringify(dataTd)" class="sb-table-td" :class="ellipsisList.indexOf(index) !== -1 ? 'ellipsis' : ''">
                    <span class="sb-table-cell sb-table-cell-align-left">
                      <span class="sb-table-td-content"> {{ dataTd }} </span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table></div
          >
        </div>
      </div>
      <!-- <div class="sb-table-pagination sb-table-pagination-right">
        <div class="sb-pagination sb-pagination-size-medium">
          <ul class="sb-pagination-list">
            <span class="sb-pagination-item sb-pagination-item-previous sb-pagination-item-disabled">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="sb-icon sb-icon-left" stroke-width="4" stroke-linecap="butt" stroke-linejoin="miter"><path d="M32 8.4 16.444 23.956 32 39.513"></path></svg>
            </span>
            <li class="sb-pagination-item sb-pagination-item-active" pages="1"> 1 </li>
            <span class="sb-pagination-item sb-pagination-item-next sb-pagination-item-disabled">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="sb-icon sb-icon-right" stroke-width="4" stroke-linecap="butt" stroke-linejoin="miter"><path d="m16 39.513 15.556-15.557L16 8.4"></path></svg>
            </span>
          </ul>
        </div>
      </div> -->
      <div v-show="props?.loading" class="sb-spin-mask">
        <div class="sb-spin-mask-icon">
          <div class="sb-spin-icon">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="sb-icon sb-icon-loading sb-icon-spin" stroke-width="4" stroke-linecap="butt" stroke-linejoin="miter">
              <path d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import './style/index.less';
  import type { Ref } from 'vue';
  import { computed, reactive, ref, watch, toRef } from 'vue';
  import type { columnType } from './types';
  import { tableProps } from './types';
  const props = defineProps(tableProps);
  // const emits = defineEmits(['getSelectData']);
  // 数据处理模块
  interface rowType {
    data: any[][];
    status: boolean;
  }

  const tableData: Ref = toRef(props, 'data');
  const tableColumns: Ref = toRef(props, 'columns');

  const columnsDataIndexList: string[] = [];
  let ellipsisList: number[] = reactive([]);
  tableColumns.value?.forEach((c: columnType, index: number) => {
    columnsDataIndexList.push(c.dataIndex);
    if (c?.ellipsis) {
      ellipsisList.push(index);
    }
  });
  let tData = computed(() => {
    let a: {
      list: rowType[];
    } = reactive({
      list: []
    });
    tableData.value?.forEach((col: Record<string, any[]>) => {
      let rowData: rowType = {
        data: new Array(tableColumns.value.length).fill(null),
        status: false
      };
      for (let key in col) {
        const index = columnsDataIndexList.indexOf(key);
        if (index !== -1) {
          rowData.data[index] = col[key];
        }
      }
      a.list.push(rowData);
    });
    return a;
  });

  const styleClass = computed(() => {
    return {
      ['sb-table-border']: props.bordered,
      [`sb-table-size-${props.size}`]: props.size
    };
  });
  const tableTrStyle = computed(() => {
    return {
      ['sb-table-hover']: props.hoverable,
      ['sb-table-stripe']: props.stripe
    };
  });
  // 多项选择处理逻辑模块
  const SelectionFlag = ref(props.rowSelection ? true : false);
  const showCheckedAll = ref(props.rowSelection?.showCheckedAll);
  let selectData: any[] = reactive([]);
  const ifAllChecked = computed(() => {
    let counter: number[] = [0, 0];
    tData.value.list.forEach(element => {
      counter[Number(element.status)]++;
    });
    if (counter[0] == tData.value.list.length) {
      return '';
    } else if (counter[1] == tData.value.list.length) {
      return 'sb-checkbox-checked';
    } else {
      return 'sb-checkbox-indeterminate';
    }
  });
  let allChecked = ref(false);
  watch(allChecked, () => {
    selectAll();
  });
  watch(
    tData,
    () => {
      let list: any[] = [];
      tData.value.list.forEach((d, index) => {
        if (d.status) {
          list.push(tableData.value[index]);
        }
      });
      selectData = list;
    },
    { deep: true }
  );
  const selectAll = function () {
    let list = tData.value.list;
    if (allChecked.value) {
      list.forEach(element => {
        element.status = true;
      });
      allChecked.value = true;
    } else {
      list.forEach(element => {
        element.status = false;
      });
      allChecked.value = false;
    }
    tData.value.list = list;
  };
  defineExpose({
    selectData
  });
</script>
<style lang="less" scoped>
  .ellipsis span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
