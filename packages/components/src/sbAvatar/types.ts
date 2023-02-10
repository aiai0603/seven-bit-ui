import type { ExtractPropTypes } from 'vue';

export const AvatarShape = ['circle', 'square'];

export const avatarProps = {
  shape: {
    type: String,
    values: AvatarShape,
    default: 'circle'
  },
  imageUrl: {
    type: String
  },
  size: {
    type: Number,
    default: 40
  },
  ['auto-fix-font-size']: {
    type: Boolean,
    default: true
  },
  triggerType: {
    type: String,
    values: ['mask', 'button'],
    default: ''
  },
  click: {
    type: Function
  },
  error: {
    type: Function
  },
  load: {
    type: Function
  },
  style: {}
};

export type AvatarProps = ExtractPropTypes<typeof avatarProps>;
