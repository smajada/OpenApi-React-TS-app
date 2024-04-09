import { Meta } from '@storybook/react';
import { ButtonAtm } from './ButtonAtm';

export default {
    title: 'Atoms/Button',
    component: ButtonAtm,
} as Meta;

export const RedButton = () => <ButtonAtm variant='red'>Red Button</ButtonAtm>;

export const OrangeButton = () => <ButtonAtm variant='orange'>Orange Button</ButtonAtm>;

export const GreenButton = () => <ButtonAtm variant='green'>Green Button</ButtonAtm>;

export const BlueButton = () => <ButtonAtm variant='blue'>Blue Button</ButtonAtm>;
