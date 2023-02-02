import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import sbRow from '../sbRow.vue';

describe('test Icon', () => {
  it('slot test', () => {
    const wrapper = mount(sbRow, {
      slots: {
        default: 'Hello world'
      }
    });
    expect(wrapper.text()).toContain('Hello world');
  });
});
