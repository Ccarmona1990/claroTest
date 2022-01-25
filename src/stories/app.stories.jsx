import App from '../App';

export default {
    title: "app",
    component: App
}

const Template = args => <App {...args}/>

export const app = Template.bind({});

app.args = {
    ShowInfoMessage: false
}
