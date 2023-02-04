import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import sbBreadItem from '../sbBreadItem.vue';

describe('test Icon', () => {
  it('slot test', () => {
    const wrapper = mount(sbBreadItem, {
      slots: {
        default: 'Hello world'
      }
    });
    expect(wrapper.text()).toContain('Hello world');
  });
});
