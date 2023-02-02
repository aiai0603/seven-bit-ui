import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import sbIcon from '../sbIcon.vue';

describe('test Icon', () => {
  it('slot test', () => {
    const wrapper = mount(sbIcon, {
      slots: {
        default: 'Hello world'
      }
    });
    expect(wrapper.text()).toContain('Hello world');
  });
});
