import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import sbBread from '../sbBread.vue';

describe('test Icon', () => {
  it('slot test', () => {
    const wrapper = mount(sbBread, {
      slots: {
        default: 'Hello world'
      }
    });
    expect(wrapper.text()).toContain('Hello world');
  });
});
