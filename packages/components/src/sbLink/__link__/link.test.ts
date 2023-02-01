import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import sbLink from '../sbLink.vue';

describe('test Button', () => {
  it('slot test', () => {
    const wrapper = mount(sbLink, {
      slots: {
        default: 'Hello world'
      }
    });
    expect(wrapper.text()).toContain('Hello world');
  });
  it('type test', () => {
    const wrapper = mount(sbLink, {
      props: {
        type: 'primary'
      }
    });
    expect(wrapper.classes()).toContain('sb-button-primary');
  });
  it('size test', () => {
    const wrapper = mount(sbLink, {
      props: {
        type: 'hh1'
      }
    });
    expect(wrapper.classes()).toContain('sb-button-hh1');
  });
  it('size test', () => {
    const wrapper = mount(sbLink, {
      props: {
        round: 'true'
      }
    });
    expect(wrapper.classes()).toContain('is-round');
  });
});
