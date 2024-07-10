import type { Meta,StoryObj } from "@storybook/react";

import Light from "./Light";

const meta:Meta<typeof Light>={
    component:Light,
    title:'/Atom/light',
    tags: ['autodocs'],
    argTypes:{
        variant:{
            control:{type:'select'},
            options:['green','yellow','red']
        }
    }
}

export default meta

type Story=StoryObj<typeof meta>;

export const Base:Story={
    args:{
        variant:'green'
    }
}
export const Green:Story={
    args:{
        variant:'green'
    }
}
export const Yellow:Story={
    args:{
        variant:'yellow'
    }
}
export const Red:Story={
    args:{
        variant:'red'
    }
}