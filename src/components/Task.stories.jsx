import { fn } from "@storybook/test";

import Task from "./Task";

// Actions meta data , fn allows use to stub the actions in
// fn() allows us to create a callback that appears in the Actions panel of the Storybook UI when clicked.
export const ActionsData = {
    onArchiveTask: fn(),
    onPinTask: fn(),
};

// default meta data
export default {
    component: Task, // The component
    title: "Single/Task", // name/group in the sidebar
    tags: ["autodocs"], // auto generate docs
    excludeStories: /.*Data$/, //info required but shouldnt be rendered
    args: {
        ...ActionsData, // The args required to mock out
    },
};

export const Default = {
    args: {
        task: {
            id: "1",
            title: "Test Task",
            state: "TASK_INBOX",
        },
    },
};

export const Pinned = {
    args: {
        task: {
            ...Default.args.task,
            state: "TASK_PINNED",
        },
    },
};

export const Archived = {
    args: {
        task: {
            ...Default.args.task,
            state: "TASK_ARCHIVED",
        },
    },
};
