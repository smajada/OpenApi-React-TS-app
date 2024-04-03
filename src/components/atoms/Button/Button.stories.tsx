import { StoryObj, Meta } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
    title: 'Atoms/Button',
    tags: ['autodocs'],
    component: Button,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Red: Story = {
    args: {
        variant: 'red',
    },
};

export const Yellow: Story = {
    args: {
        variant: 'yellow',
    },
};

export const Green: Story = {
    args: {
        variant: 'green',
    },
};

export const Grouped: Story = {
    render: (args) => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                border: '1px solid black',
                width: 'max-content',
                padding: 10,
            }}
        >
            <Button variant='red' />
            <Button variant='yellow' />
            <Button variant='green' />
        </div>
    ),
};
