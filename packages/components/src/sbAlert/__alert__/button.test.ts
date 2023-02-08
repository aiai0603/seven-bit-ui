import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import sbButton from '../sbButton.vue';

describe('test Button', () => {
  it('slot test', () => {
    const wrapper = mount(sbButton, {
      slots: {
        default: 'Hello world'
      }
    });
    expect(wrapper.text()).toContain('Hello world');
  });
  it('type test', () => {
    const wrapper = mount(sbButton, {
      props: {
        type: 'primary'
      }
    });
    expect(wrapper.classes()).toContain('sb-button-primary');
  });
  it('size test', () => {
    const wrapper = mount(sbButton, {
      props: {
        type: 'hh1'
      }
    });
    expect(wrapper.classes()).toContain('sb-button-hh1');
  });
  it('size test', () => {
    const wrapper = mount(sbButton, {
      props: {
        round: 'true'
      }
    });
    expect(wrapper.classes()).toContain('sb-button-is-round');
  });
});
