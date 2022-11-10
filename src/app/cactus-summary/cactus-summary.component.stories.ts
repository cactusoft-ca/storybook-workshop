// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
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

export const Primary = Template.bind({});
Primary.args = {
  cactus: {
    id: '1',
    age: 10.8,
    avatar: 'https://loremflickr.com/320/240/cactuses',
    createdAt: new Date(2022, 11, 9),
    name: 'Discocactus',
    ownerCity: 'Montréal',
    ownerCountry: 'Canada',
    ownerUsername: 'CactusLover2001',
  },
};
