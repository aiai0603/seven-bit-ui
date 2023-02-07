import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import sbAvatar from '../sbAvatar.vue';
// The component to test
describe('test sbAvatar', () => {
  ['circle', 'square'].forEach(shapeItem => {
    it('avatar shape class test ', () => {
      const wrapper = mount(sbAvatar, {
        props: {
          shape: shapeItem
        }
      });

      expect(wrapper.classes()).toContain('sb-avatar-' + shapeItem);
    });
  });
  const urlIst = ['https://kifimg.oss-cn-beijing.aliyuncs.com/img/202212060030103.png', ''];
  urlIst.forEach((url, index) => {
    it(`imgurl  ${url} test`, () => {
      const wrapper = mount(sbAvatar, {
        props: {
          imageUrl: url
        },
        shallow: true
      });

      if (index === 0) {
        expect(wrapper.html().indexOf('img') !== -1).toBe(true);
        // console.log('--------', wrapper.emitted(), wrapper.html());
      } else {
        expect(wrapper.html().indexOf('img')).toBe(-1);
        expect(wrapper.emitted().error);
      }
    });
  });

  const sizeList = [24, 30];
  sizeList.forEach(size => {
    it(`size ${size} test`, () => {
      const wrapper = mount(sbAvatar, {
        props: {
          size
        }
      });
      if (typeof size === 'number') {
        expect(wrapper.classes()).contains(`sb-avatar-${size}`);
      }
    });
  });
  ['mask', 'button'].forEach(item => {
    it(`triggerType ${item} test`, () => {
      const wrapper = mount(sbAvatar, {
        props: {
          triggerType: item
        }
      });
      expect(wrapper.html().indexOf(`sb-avatar-trigger-icon-${item}`) !== -1).toBe(true);
    });
  });
  it('click test', async () => {
    const cli = function (e: any) {
      // console.log('e', e);
      return e;
    };
    const wrapper = mount(sbAvatar, {
      props: {
        click: cli
      }
    });

    // console.log(wrapper.find('.sb-avatar'));
    await wrapper.find('.sb-avatar').trigger('click');
    // console.log('--------', wrapper.emitted());
  });
});
