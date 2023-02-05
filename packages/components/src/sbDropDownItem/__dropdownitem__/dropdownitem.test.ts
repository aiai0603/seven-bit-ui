import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import sbDropDownItem from '../sbDropDownItem.vue';

describe('test Icon', () => {
  it('slot test', () => {
    const wrapper = mount(sbDropDownItem, {
      slots: {
        default: 'Hello world'
      }
    });
    expect(wrapper.text()).toContain('Hello world');
  });
});
