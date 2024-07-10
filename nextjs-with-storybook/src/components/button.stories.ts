// /* eslint-disable storybook/story-exports */
// import type { Meta, StoryObj } from '@storybook/react';

// import Light from '@/components/light';

// const meta: Meta<typeof Light> = {
//     component: Light,
//     title: "Light",
//     tags: ['autodocs'],
//     argTypes: {
//         variant:{
//             control: {type: 'select'},
//             options:['green','yellow','red']
//         }
//     }
// }

// export default meta;

// type Story = StoryObj<typeof meta> ;

// export const Base: Story = {
//     args:{
//         variant: 'red'
//     }
// }

// export const Yellow: Story = {
//     args:{
//         variant: 'yellow'
//     }
// }
// export const Green: Story = {
//     args:{
//         variant: 'green'
//     }
// }

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./button";


const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "select" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    children: "Button",
    className:''
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    className:''
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Button",
    className:''
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Button",
    className:''
  },
};

export const Warning: Story = {
  args: {
    primary: true,
    children: "Delete now",
    backgroundColor: "red",
    className:''
  },
};
