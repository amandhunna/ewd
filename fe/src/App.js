import './App.css';
import { createElement } from 'react';

 const cStyle= {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'aquamarine',
  border: `2px solid black`
 }

const l= {
  header : {
    ...cStyle 
  },
  nav : {
   ...cStyle 
  },
  section : {
   ...cStyle 
  },
  article : {
   ...cStyle 
  },
  aside : {
   ...cStyle,
   flexBasis: '30%'
  },
  footer : {
   ...cStyle 
  }
}

    const layout5 = [
      {
        type: "div",
        props: {
          className: "layout",
          children: [
            {
              type: "header",
              props: {
                style: l.header,
                children: "Custom header",
              },
            },
            {
              type: "nav",
              props: {
                style: l.nav,
                children: "Custom nav",
              },
            },
            {
              type: "span",
              props: {
                style: {
                  display: 'flex',
                  width: '100%',
                },
                children: [
                  {
                    type: "p",
                    props: {
                      style: {
                        flexBasis: '70%',
                      },
                      children: [
                        {
                          type: "section",
                          props: {
                            style: {...l.section, background: 'red'},
                            children: "Custom section",
                          },
                        },
                        {
                          type: "article",
                          props: {
                            style: {...l.section, background: 'red'},
                            children:  [
                              {
                                type: "p",
                                props: {
                                  style: {
                                    flexBasis: '70%',
                                  },
                                  children: [
                                    {
                                      type: "section",
                                      props: {
                                        style: {...l.section, background: 'red'},
                                        children: "Custom section",
                                      },
                                    },
                                    {
                                      type: "article",
                                      props: {
                                        style: {...l.section, background: 'red'},
                                        children: "Custom article",
                                      },
                                    },
                                  ],
                                },
                              },
                              {
                                type: "aside",
                                props: {
                                  style: l.aside,
                                  children: "Custom aside",
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    type: "aside",
                    props: {
                      style: l.aside,
                      children: "Custom aside",
                    },
                  },
                ],
              },
            },
            {
              type: "footer",
              props: {
                style: l.footer,
                children: "Custom footer",
              },
            },
          ],
        },
      },
    ];
    


  function createJsx(layout) {
    const jsx = layout.map(element => {
      return createElement(element.type, {
        ...element?.props,
        children : Array.isArray(element?.props?.children) ? createJsx(element?.props?.children): element?.props?.children
      })
    })
    return jsx
  }

function App() {
  return createJsx(layout5)
}

export default App;

function OG() {
    return createElement(
      "div",{ className:"layout",children:[
        createElement("header",{style:l.header,children:"OG header"}),
        createElement("nav",{style:l.nav,children:"nav"}),
        createElement("span",{children:[
          createElement("p",{children:[
            createElement("section",{style:l.section,children:"section"}),
            createElement("article",{style:l.article,children:"article"})]}),
          createElement("aside",{style:l.aside,children:"aside"})]}),
        createElement("footer",{style:l.footer,children:"footer"})
    ]
  })
}