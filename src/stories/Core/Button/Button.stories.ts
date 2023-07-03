import { Meta, Story } from '@storybook/angular';
import {ButtonComponent} from "./Button.component";

export default {
  title: 'Core/Button',
  component: ButtonComponent,
} as Meta;

export const DefaultButton = () => ({
  template: `<app-button label="Cliquez ici"></app-button>`,
});
DefaultButton.storyName = 'Default';

export const SmallButton = () => ({
  template: `<app-button label="OK" size="small"></app-button>`,
});
SmallButton.storyName = 'Small';

export const LargeButton = () => ({
  template: `<app-button label="OK" size="large"></app-button>`,
});
LargeButton.storyName = 'Large';
