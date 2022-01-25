import {InformationBox, InformationModal} from '../components/Information';

export default {
    title: "information",
    components: [InformationBox, InformationModal]
}

const TemplateM = args => <InformationModal {...args}/>
const TemplateB = args => <InformationBox {...args}/>

export const informationModal = TemplateM.bind({});
export const informationBox = TemplateB.bind({});

informationModal.args = {
    ShowInfoMessage: true
}
informationBox.args = {
    ShowInfoMessage: true
}
