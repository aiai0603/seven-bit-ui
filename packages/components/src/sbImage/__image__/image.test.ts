import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import sbImage from '../sbImage.vue';
// The component to test
describe('test sbImage', () => {
  it('error slot', () => {
    const wrapper = mount(sbImage, {
      slots: {
        error: 'kif'
      }
    });
    expect(wrapper.html().indexOf('kif') !== -1).toBe(true);
  });
});
