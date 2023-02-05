import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import sbDropDownMenu from '../sbDropDownMenu.vue';

describe('test Icon', () => {
  it('slot test', () => {
    const wrapper = mount(sbDropDownMenu, {
      slots: {
        default: 'Hello world'
      }
    });
    expect(wrapper.text()).toContain('Hello world');
  });
});
