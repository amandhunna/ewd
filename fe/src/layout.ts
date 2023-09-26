import React, { HTMLAttributes, ReactHTMLElement } from "react";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const DrawMe = () => "HEy"

const reactComponents: {
    [key: string]: React.ReactElement | React.FC
} = {
  Skeleton, DrawMe
}

interface Element {
    type: string | React.ReactElement;
    props: {
        style?: React.CSSProperties;
        className?: string;
        children?: string | React.ReactElement | Array<Element> | undefined;
    }
}



const layout5: Array<Element>= [
    {
      type: "div",
      props: {
        className: "layout",
        children: [
          {
            type: "header",
            props: {
                style: { border: '2px solid red'},
                className: 'ione',
                children: "Custom header",
            },
          },
          {
            type: "nav",
            props: {
              children: "Custom nav",
            },
          },
          {
            type: "span",
            props: {
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
                          style: {},
                          children: "Custom section",
                        },
                      },
                      {
                        type: "article",
                        props: {
                          style: { background: 'red'},
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
                                      style: { background: 'red'},
                                      children: "Custom section",
                                    },
                                  },
                                  {
                                    type: "article",
                                    props: {
                                      style: { background: 'red'},
                                      children: "Custom article",
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              type: "aside",
                              props: {
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
                    children: "Custom aside",
                  },
                },
              ],
            },
          },
          {
            type: "footer",
            props: {
              children: "Custom footer",
            },
          },
        ],
      },
    },
];

const getType = (type: string) => {
    const pascalRegex = /[A-Z][a-z]+(?:[A-Z][a-z]+)*$/gm;
    const isReactComponent = pascalRegex.test(type);
    
    if(isReactComponent) {
      return reactComponents[type]
    }
    
    return type
  }
