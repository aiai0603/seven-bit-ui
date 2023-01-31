import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import LsButton from '../LsButton.vue';

describe('test Button', () => {
  it('slot test', () => {
    const wrapper = mount(LsButton, {
      slots: {
        default: 'Hello world'
      }
    });
    expect(wrapper.text()).toContain('Hello world');
  });
  it('type test', () => {
    const wrapper = mount(LsButton, {
      props: {
        type: 'primary'
      }
    });
    expect(wrapper.classes()).toContain('ls-button-primary');
  });
  it('size test', () => {
    const wrapper = mount(LsButton, {
      props: {
        type: 'hh1'
      }
    });
    expect(wrapper.classes()).toContain('ls-button-hh1');
  });
  it('size test', () => {
    const wrapper = mount(LsButton, {
      props: {
        round: 'true'
      }
    });
    expect(wrapper.classes()).toContain('is-round');
  });
});
