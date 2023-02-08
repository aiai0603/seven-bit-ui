import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import sbCard from '../sbCard.vue';
// The component to test
describe('test sbCard', () => {
  it('sbCard test ', () => {
    const wrapper = mount(sbCard, {
      props: {
        bordered: true,
        loading: true,
        hoverable: true
      }
    });
    expect(wrapper.classes()).toContain('sb-card-bordered');
    expect(wrapper.classes()).toContain('sb-card-loading');
    expect(wrapper.classes()).toContain('sb-card-hoverable');
  });
  ['small', 'medium'].forEach(size => {
    const wrapper = mount(sbCard, {
      props: {
        size
      }
    });
    expect(wrapper.classes()).toContain(`sb-card-size-${size}`);
  });
  it('title test', () => {
    const wrapper = mount(sbCard, {
      props: {
        title: 'kif'
      }
    });
    expect(wrapper.html().indexOf('kif') !== -1).toBe(true);
  });
});
