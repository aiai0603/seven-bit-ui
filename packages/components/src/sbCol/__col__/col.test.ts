import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import sbCol from '../sbCol.vue';

describe('test Icon', () => {
  it('slot test', () => {
    const wrapper = mount(sbCol, {
      slots: {
        default: 'Hello world'
      }
    });
    expect(wrapper.text()).toContain('Hello world');
  });
});
