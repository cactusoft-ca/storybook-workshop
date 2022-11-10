import { Meta, Story } from '@storybook/angular';
import { CactusSummaryComponent } from './cactus-summary.component';

export default {
  title: 'Cactus Summary',
  component: CactusSummaryComponent,
} as Meta;

const Template: Story<CactusSummaryComponent> = (
  args: CactusSummaryComponent
) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  cactus: {
    id: '4',
    age: 10.8,
    avatar: 'https://loremflickr.com/320/240/cactuses',
    createdAt: new Date(2022, 11, 9),
    name: 'discocactus',
    ownerCity: 'Montréal',
    ownerCountry: 'Canada',
    ownerUsername: 'CactusLover2001',
  },
};

export const Empty = Template.bind({});
Empty.args = {
  cactus: null,
};

export const Selected = Template.bind({});
Selected.args = {
  cactus: {
    id: '24',
    age: 10.8,
    avatar: 'https://loremflickr.com/320/240/cactuses',
    createdAt: new Date(2022, 11, 9),
    name: 'discocactus',
    ownerCity: 'Montréal',
    ownerCountry: 'Canada',
    ownerUsername: 'CactusLover2001',
  },
  isSelected: true,
};

export const NoName = Template.bind({});
NoName.args = {
  cactus: {
    id: '33',
    age: 10.8,
    avatar: 'https://loremflickr.com/320/240/cactuses',
    createdAt: new Date(2022, 11, 9),
    name: '',
    ownerCity: 'Montréal',
    ownerCountry: 'Canada',
    ownerUsername: 'CactusLover2001',
  },
};

export const NoImage = Template.bind({});
NoImage.args = {
  cactus: {
    id: '33',
    age: 10.8,
    avatar: undefined,
    createdAt: new Date(2022, 11, 9),
    name: 'discocactus',
    ownerCity: 'Montréal',
    ownerCountry: 'Canada',
    ownerUsername: 'CactusLover2001',
  },
};
