import { describe, expect, test } from 'vitest';

import { mount } from '@vue/test-utils';
import sbResult from '../sbResult.vue';

describe('Props Test', () => {
  test('title test', () => {
    const wrapper = mount(sbResult, {
      propsData: {
        title: 'test title'
      }
    });
    expect(wrapper.find('.sb-result-title').text()).toBe('test title');
  });
});
