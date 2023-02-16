import BaseAccordion from './BaseAccordion.vue'
import BaseAccordionItem from './BaseAccordionItem.vue'

export default {
  title: 'BaseAccordion',
  component: BaseAccordion,
}

export const Default = (arg, { argTypes }) => ({
  components: { BaseAccordion, BaseAccordionItem },
  props: Object.keys(argTypes),
  template: `
    <BaseAccordion active="item2">
      <BaseAccordionItem name="item1" header="Accordion item #1">
        <p>
          This is the first item's accordion body. It is shown by default, until
          the collapse plugin adds the appropriate classes that we use to style
          each element.
        </p>

        <p>
          These classes control the overall appearance, as well as the showing
          and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that
          just about any HTML can go within the .accordion-body, though the
          transition does limit overflow.
        </p>
      </BaseAccordionItem>
      <BaseAccordionItem name="item2" header="Accordion item #2">
        <p>
          This is the second item's accordion body. It is shown by default,
          until the collapse plugin adds the appropriate classes that we use to
          style each element.
        </p>
      </BaseAccordionItem>
      <BaseAccordionItem name="item3" header="Accordion item #3">
        <p>
          This is the third item's accordion body. It is shown by default, until
          the collapse plugin adds the appropriate classes that we use to style
          each element.
        </p>
      </BaseAccordionItem>
  </BaseAccordion>
  `,
})
