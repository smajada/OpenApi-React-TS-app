import { Meta } from '@storybook/react';
import InputAtm from './InputAtm'; // Asegúrate de importar correctamente el componente

export default {
    title: 'Atoms/Input',
    component: InputAtm,
} as Meta;

export const BasicInput = () => <InputAtm />;
