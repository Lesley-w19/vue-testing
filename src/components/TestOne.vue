import {mount} from "@vue/test-utils"; const FeedbackComponent = { props:['msg'],
template: `
<p>{{msg}}</p>
` } test('displays message', () =>{ const wrapper = mount(FeedbackComponent,{ propsData:{
msg: 'VueTesting implemetation'}}) expect(wrapper.text()).toContain('VueTesting
implemetation');})
