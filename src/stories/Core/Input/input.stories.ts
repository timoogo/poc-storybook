import { Meta, Story } from '@storybook/angular';
import { InputComponent } from './Input.component';

export default {
  title: 'Core/Input',
  component: InputComponent,
} as Meta;

// Input type Text

export const Text = () => ({
  template: `<app-input [type]="text"></app-input>`,
});
Text.storyName = 'Text';

// Input type Number

export const Number = () => ({
  template: `<app-input [type]="number"></app-input>`,
});
Number.storyName = 'Number';

