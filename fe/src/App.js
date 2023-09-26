import './App.css';
import { createElement } from 'react';
import Skeleton from '@mui/material/Skeleton';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; // Grid version 1
import Typography from '@mui/material/Typography';

const reactComponents = {
  Skeleton, Container, Box, Grid,Typography
}


const getType = (type) => {
  const pascalRegex = /[A-Z][a-z]+(?:[A-Z][a-z]+)*$/gm;
  const isReactComponent = pascalRegex.test(type);
  
  if(isReactComponent) {
    return reactComponents[type]
  }
  return type
}


const layout = [
  {
    type: "Grid",
    props: {
      style:{
        width: '100%',
        height: '100%'
      },
      spacing:0,
      container: true,
      children: [
        {
          type: "Grid",
          props: {
            xs: 12,
            style: {
              height: '70px', 
              backgroundColor: 'rebeccapurple',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
            },
            children: [
              {
                type: 'Typography',
                props: {
                  children:  'Header'
                }
              }],
          }
        },
        {
          type: "Grid",
          props: {
            style: {
              height: 'calc(100% - 70px)',
              background: 'aqua',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
            xs: 2,
            children: [
              {
                type: 'Typography',
                props: {
                  children:  'SideBar'
                }
              }],
          }
        },
        {
          type: "Grid",
          props: {
            xs: 10,
            style: {
              height: 'calc(100% - 70px)',
             
            },
            children: [
              {
                type: 'Typography',
                props: {
                  style: {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                  children:  [
                    {
                      type: "Grid",
                      props: {
                        style:{
                          width: '100%',
                          height: '100%'
                        },
                        spacing:0,
                        container: true,
                        children: [
                          {
                            type: "Grid",
                            props: {
                              xs: 12,
                              style: {
                                height: '70px', 
                                backgroundColor: 'rebeccapurple',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                              },
                              children: [
                                {
                                  type: 'Typography',
                                  props: {
                                    children:  'Header'
                                  }
                                }],
                            }
                          },
                          {
                            type: "Grid",
                            props: {
                              style: {
                                height: 'calc(100% - 70px)',
                                background: 'aqua',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                              },
                              xs: 2,
                              children: [
                                {
                                  type: 'Typography',
                                  props: {
                                    children:  'SideBar'
                                  }
                                }],
                            }
                          },
                          {
                            type: "Grid",
                            props: {
                              xs: 10,
                              style: {
                                height: 'calc(100% - 70px)',
                               
                              },
                              children: [
                                {
                                  type: 'Typography',
                                  props: {
                                    style: {
                                      width: '100%',
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                    },
                                    children:  [
                                      {
                                        type: "Grid",
                                        props: {
                                          style:{
                                            width: '100%',
                                            height: '100%'
                                          },
                                          spacing:0,
                                          container: true,
                                          children: [
                                            {
                                              type: "Grid",
                                              props: {
                                                xs: 12,
                                                style: {
                                                  height: '70px', 
                                                  backgroundColor: 'rebeccapurple',
                                                  display: 'flex',
                                                  justifyContent: 'center',
                                                  alignItems: 'center',
                                                  color: 'white',
                                                },
                                                children: [
                                                  {
                                                    type: 'Typography',
                                                    props: {
                                                      children:  'Header'
                                                    }
                                                  }],
                                              }
                                            },
                                            {
                                              type: "Grid",
                                              props: {
                                                style: {
                                                  height: 'calc(100% - 70px)',
                                                  background: 'aqua',
                                                  display: 'flex',
                                                  justifyContent: 'center',
                                                  alignItems: 'center',
                                                },
                                                xs: 2,
                                                children: [
                                                  {
                                                    type: 'Typography',
                                                    props: {
                                                      children:  'SideBar'
                                                    }
                                                  }],
                                              }
                                            },
                                            {
                                              type: "Grid",
                                              props: {
                                                xs: 10,
                                                style: {
                                                  height: 'calc(100% - 70px)',
                                                 
                                                },
                                                children: [
                                                  {
                                                    type: 'Typography',
                                                    props: {
                                                      style: {
                                                        width: '100%',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                      },
                                                      children:  [
                                                        {
                                                          type: "Grid",
                                                          props: {
                                                            style:{
                                                              width: '100%',
                                                              height: '100%'
                                                            },
                                                            spacing:0,
                                                            container: true,
                                                            children: [
                                                              {
                                                                type: "Grid",
                                                                props: {
                                                                  xs: 12,
                                                                  style: {
                                                                    height: '70px', 
                                                                    backgroundColor: 'rebeccapurple',
                                                                    display: 'flex',
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                    color: 'white',
                                                                  },
                                                                  children: [
                                                                    {
                                                                      type: 'Typography',
                                                                      props: {
                                                                        children:  'Header'
                                                                      }
                                                                    }],
                                                                }
                                                              },
                                                              {
                                                                type: "Grid",
                                                                props: {
                                                                  style: {
                                                                    height: 'calc(100% - 70px)',
                                                                    background: 'aqua',
                                                                    display: 'flex',
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                  },
                                                                  xs: 2,
                                                                  children: [
                                                                    {
                                                                      type: 'Typography',
                                                                      props: {
                                                                        children:  'SideBar'
                                                                      }
                                                                    }],
                                                                }
                                                              },
                                                              {
                                                                type: "Grid",
                                                                props: {
                                                                  xs: 10,
                                                                  style: {
                                                                    height: 'calc(100% - 70px)',
                                                                   
                                                                  },
                                                                  children: [
                                                                    {
                                                                      type: 'Typography',
                                                                      props: {
                                                                        style: {
                                                                          width: '100%',
                                                                          display: 'flex',
                                                                          justifyContent: 'center',
                                                                          alignItems: 'center',
                                                                        },
                                                                        children:  [
                                                                          {
                                                                            type: "Grid",
                                                                            props: {
                                                                              style:{
                                                                                width: '100%',
                                                                                height: '100%'
                                                                              },
                                                                              spacing:0,
                                                                              container: true,
                                                                              children: [
                                                                                {
                                                                                  type: "Grid",
                                                                                  props: {
                                                                                    xs: 12,
                                                                                    style: {
                                                                                      height: '70px', 
                                                                                      backgroundColor: 'rebeccapurple',
                                                                                      display: 'flex',
                                                                                      justifyContent: 'center',
                                                                                      alignItems: 'center',
                                                                                      color: 'white',
                                                                                    },
                                                                                    children: [
                                                                                      {
                                                                                        type: 'Typography',
                                                                                        props: {
                                                                                          children:  'Header'
                                                                                        }
                                                                                      }],
                                                                                  }
                                                                                },
                                                                                {
                                                                                  type: "Grid",
                                                                                  props: {
                                                                                    style: {
                                                                                      height: 'calc(100% - 70px)',
                                                                                      background: 'aqua',
                                                                                      display: 'flex',
                                                                                      justifyContent: 'center',
                                                                                      alignItems: 'center',
                                                                                    },
                                                                                    xs: 2,
                                                                                    children: [
                                                                                      {
                                                                                        type: 'Typography',
                                                                                        props: {
                                                                                          children:  'SideBar'
                                                                                        }
                                                                                      }],
                                                                                  }
                                                                                },
                                                                                {
                                                                                  type: "Grid",
                                                                                  props: {
                                                                                    xs: 10,
                                                                                    style: {
                                                                                      height: 'calc(100% - 70px)',
                                                                                     
                                                                                    },
                                                                                    children: [
                                                                                      {
                                                                                        type: 'Typography',
                                                                                        props: {
                                                                                          style: {
                                                                                            width: '100%',
                                                                                            display: 'flex',
                                                                                            justifyContent: 'center',
                                                                                            alignItems: 'center',
                                                                                          },
                                                                                          children:  [
                                                                                            {
                                                                                              type: "Grid",
                                                                                              props: {
                                                                                                style:{
                                                                                                  width: '100%',
                                                                                                  height: '100%'
                                                                                                },
                                                                                                spacing:0,
                                                                                                container: true,
                                                                                                children: [
                                                                                                  {
                                                                                                    type: "Grid",
                                                                                                    props: {
                                                                                                      xs: 12,
                                                                                                      style: {
                                                                                                        height: '70px', 
                                                                                                        backgroundColor: 'rebeccapurple',
                                                                                                        display: 'flex',
                                                                                                        justifyContent: 'center',
                                                                                                        alignItems: 'center',
                                                                                                        color: 'white',
                                                                                                      },
                                                                                                      children: [
                                                                                                        {
                                                                                                          type: 'Typography',
                                                                                                          props: {
                                                                                                            children:  'Header'
                                                                                                          }
                                                                                                        }],
                                                                                                    }
                                                                                                  },
                                                                                                  {
                                                                                                    type: "Grid",
                                                                                                    props: {
                                                                                                      style: {
                                                                                                        height: 'calc(100% - 70px)',
                                                                                                        background: 'aqua',
                                                                                                        display: 'flex',
                                                                                                        justifyContent: 'center',
                                                                                                        alignItems: 'center',
                                                                                                      },
                                                                                                      xs: 2,
                                                                                                      children: [
                                                                                                        {
                                                                                                          type: 'Typography',
                                                                                                          props: {
                                                                                                            children:  'SideBar'
                                                                                                          }
                                                                                                        }],
                                                                                                    }
                                                                                                  },
                                                                                                  {
                                                                                                    type: "Grid",
                                                                                                    props: {
                                                                                                      xs: 10,
                                                                                                      style: {
                                                                                                        height: 'calc(100% - 70px)',
                                                                                                       
                                                                                                      },
                                                                                                      children: [
                                                                                                        {
                                                                                                          type: 'Typography',
                                                                                                          props: {
                                                                                                            style: {
                                                                                                              width: '100%',
                                                                                                              display: 'flex',
                                                                                                              justifyContent: 'center',
                                                                                                              alignItems: 'center',
                                                                                                            },
                                                                                                            children:  [
                                                                                                              {
                                                                                                                type: "Grid",
                                                                                                                props: {
                                                                                                                  style:{
                                                                                                                    width: '100%',
                                                                                                                    height: '100%'
                                                                                                                  },
                                                                                                                  spacing:0,
                                                                                                                  container: true,
                                                                                                                  children: [
                                                                                                                    {
                                                                                                                      type: "Grid",
                                                                                                                      props: {
                                                                                                                        xs: 12,
                                                                                                                        style: {
                                                                                                                          height: '70px', 
                                                                                                                          backgroundColor: 'rebeccapurple',
                                                                                                                          display: 'flex',
                                                                                                                          justifyContent: 'center',
                                                                                                                          alignItems: 'center',
                                                                                                                          color: 'white',
                                                                                                                        },
                                                                                                                        children: [
                                                                                                                          {
                                                                                                                            type: 'Typography',
                                                                                                                            props: {
                                                                                                                              children:  'Header'
                                                                                                                            }
                                                                                                                          }],
                                                                                                                      }
                                                                                                                    },
                                                                                                                    {
                                                                                                                      type: "Grid",
                                                                                                                      props: {
                                                                                                                        style: {
                                                                                                                          height: 'calc(100% - 70px)',
                                                                                                                          background: 'aqua',
                                                                                                                          display: 'flex',
                                                                                                                          justifyContent: 'center',
                                                                                                                          alignItems: 'center',
                                                                                                                        },
                                                                                                                        xs: 2,
                                                                                                                        children: [
                                                                                                                          {
                                                                                                                            type: 'Typography',
                                                                                                                            props: {
                                                                                                                              children:  'SideBar'
                                                                                                                            }
                                                                                                                          }],
                                                                                                                      }
                                                                                                                    },
                                                                                                                    {
                                                                                                                      type: "Grid",
                                                                                                                      props: {
                                                                                                                        xs: 10,
                                                                                                                        style: {
                                                                                                                          height: 'calc(100% - 70px)',
                                                                                                                         
                                                                                                                        },
                                                                                                                        children: [
                                                                                                                          {
                                                                                                                            type: 'Typography',
                                                                                                                            props: {
                                                                                                                              style: {
                                                                                                                                width: '100%',
                                                                                                                                display: 'flex',
                                                                                                                                justifyContent: 'center',
                                                                                                                                alignItems: 'center',
                                                                                                                              },
                                                                                                                              children:  [
                                                                                                                                {
                                                                                                                                  type: "Grid",
                                                                                                                                  props: {
                                                                                                                                    style:{
                                                                                                                                      width: '100%',
                                                                                                                                      height: '100%'
                                                                                                                                    },
                                                                                                                                    spacing:0,
                                                                                                                                    container: true,
                                                                                                                                    children: [
                                                                                                                                      {
                                                                                                                                        type: "Grid",
                                                                                                                                        props: {
                                                                                                                                          xs: 12,
                                                                                                                                          style: {
                                                                                                                                            height: '70px', 
                                                                                                                                            backgroundColor: 'rebeccapurple',
                                                                                                                                            display: 'flex',
                                                                                                                                            justifyContent: 'center',
                                                                                                                                            alignItems: 'center',
                                                                                                                                            color: 'white',
                                                                                                                                          },
                                                                                                                                          children: [
                                                                                                                                            {
                                                                                                                                              type: 'Typography',
                                                                                                                                              props: {
                                                                                                                                                children:  'Header'
                                                                                                                                              }
                                                                                                                                            }],
                                                                                                                                        }
                                                                                                                                      },
                                                                                                                                      {
                                                                                                                                        type: "Grid",
                                                                                                                                        props: {
                                                                                                                                          style: {
                                                                                                                                            height: 'calc(100% - 70px)',
                                                                                                                                            background: 'aqua',
                                                                                                                                            display: 'flex',
                                                                                                                                            justifyContent: 'center',
                                                                                                                                            alignItems: 'center',
                                                                                                                                          },
                                                                                                                                          xs: 2,
                                                                                                                                          children: [
                                                                                                                                            {
                                                                                                                                              type: 'Typography',
                                                                                                                                              props: {
                                                                                                                                                children:  'SideBar'
                                                                                                                                              }
                                                                                                                                            }],
                                                                                                                                        }
                                                                                                                                      },
                                                                                                                                      {
                                                                                                                                        type: "Grid",
                                                                                                                                        props: {
                                                                                                                                          xs: 10,
                                                                                                                                          style: {
                                                                                                                                            height: 'calc(100% - 70px)',
                                                                                                                                           
                                                                                                                                          },
                                                                                                                                          children: [
                                                                                                                                            {
                                                                                                                                              type: 'Typography',
                                                                                                                                              props: {
                                                                                                                                                style: {
                                                                                                                                                  width: '100%',
                                                                                                                                                  display: 'flex',
                                                                                                                                                  justifyContent: 'center',
                                                                                                                                                  alignItems: 'center',
                                                                                                                                                },
                                                                                                                                                children:  [
                                                                                                                                                  {
                                                                                                                                                    type: "Grid",
                                                                                                                                                    props: {
                                                                                                                                                      style:{
                                                                                                                                                        width: '100%',
                                                                                                                                                        height: '100%'
                                                                                                                                                      },
                                                                                                                                                      spacing:0,
                                                                                                                                                      container: true,
                                                                                                                                                      children: [
                                                                                                                                                        {
                                                                                                                                                          type: "Grid",
                                                                                                                                                          props: {
                                                                                                                                                            xs: 12,
                                                                                                                                                            style: {
                                                                                                                                                              height: '70px', 
                                                                                                                                                              backgroundColor: 'rebeccapurple',
                                                                                                                                                              display: 'flex',
                                                                                                                                                              justifyContent: 'center',
                                                                                                                                                              alignItems: 'center',
                                                                                                                                                              color: 'white',
                                                                                                                                                            },
                                                                                                                                                            children: [
                                                                                                                                                              {
                                                                                                                                                                type: 'Typography',
                                                                                                                                                                props: {
                                                                                                                                                                  children:  'Header'
                                                                                                                                                                }
                                                                                                                                                              }],
                                                                                                                                                          }
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                          type: "Grid",
                                                                                                                                                          props: {
                                                                                                                                                            style: {
                                                                                                                                                              height: 'calc(100% - 70px)',
                                                                                                                                                              background: 'aqua',
                                                                                                                                                              display: 'flex',
                                                                                                                                                              justifyContent: 'center',
                                                                                                                                                              alignItems: 'center',
                                                                                                                                                            },
                                                                                                                                                            xs: 2,
                                                                                                                                                            children: [
                                                                                                                                                              {
                                                                                                                                                                type: 'Typography',
                                                                                                                                                                props: {
                                                                                                                                                                  children:  'SideBar'
                                                                                                                                                                }
                                                                                                                                                              }],
                                                                                                                                                          }
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                          type: "Grid",
                                                                                                                                                          props: {
                                                                                                                                                            xs: 10,
                                                                                                                                                            style: {
                                                                                                                                                              height: 'calc(100% - 70px)',
                                                                                                                                                             
                                                                                                                                                            },
                                                                                                                                                            children: [
                                                                                                                                                              {
                                                                                                                                                                type: 'Typography',
                                                                                                                                                                props: {
                                                                                                                                                                  style: {
                                                                                                                                                                    width: '100%',
                                                                                                                                                                    display: 'flex',
                                                                                                                                                                    justifyContent: 'center',
                                                                                                                                                                    alignItems: 'center',
                                                                                                                                                                  },
                                                                                                                                                                  children:  [
                                                                                                                                                                    {
                                                                                                                                                                      type: "Grid",
                                                                                                                                                                      props: {
                                                                                                                                                                        style:{
                                                                                                                                                                          width: '100%',
                                                                                                                                                                          height: '100%'
                                                                                                                                                                        },
                                                                                                                                                                        spacing:0,
                                                                                                                                                                        container: true,
                                                                                                                                                                        children: [
                                                                                                                                                                          {
                                                                                                                                                                            type: "Grid",
                                                                                                                                                                            props: {
                                                                                                                                                                              xs: 12,
                                                                                                                                                                              style: {
                                                                                                                                                                                height: '70px', 
                                                                                                                                                                                backgroundColor: 'rebeccapurple',
                                                                                                                                                                                display: 'flex',
                                                                                                                                                                                justifyContent: 'center',
                                                                                                                                                                                alignItems: 'center',
                                                                                                                                                                                color: 'white',
                                                                                                                                                                              },
                                                                                                                                                                              children: [
                                                                                                                                                                                {
                                                                                                                                                                                  type: 'Typography',
                                                                                                                                                                                  props: {
                                                                                                                                                                                    children:  'Header'
                                                                                                                                                                                  }
                                                                                                                                                                                }],
                                                                                                                                                                            }
                                                                                                                                                                          },
                                                                                                                                                                          {
                                                                                                                                                                            type: "Grid",
                                                                                                                                                                            props: {
                                                                                                                                                                              style: {
                                                                                                                                                                                height: 'calc(100% - 70px)',
                                                                                                                                                                                background: 'aqua',
                                                                                                                                                                                display: 'flex',
                                                                                                                                                                                justifyContent: 'center',
                                                                                                                                                                                alignItems: 'center',
                                                                                                                                                                              },
                                                                                                                                                                              xs: 2,
                                                                                                                                                                              children: [
                                                                                                                                                                                {
                                                                                                                                                                                  type: 'Typography',
                                                                                                                                                                                  props: {
                                                                                                                                                                                    children:  'SideBar'
                                                                                                                                                                                  }
                                                                                                                                                                                }],
                                                                                                                                                                            }
                                                                                                                                                                          },
                                                                                                                                                                          {
                                                                                                                                                                            type: "Grid",
                                                                                                                                                                            props: {
                                                                                                                                                                              xs: 10,
                                                                                                                                                                              style: {
                                                                                                                                                                                height: 'calc(100% - 70px)',
                                                                                                                                                                               
                                                                                                                                                                              },
                                                                                                                                                                              children: [
                                                                                                                                                                                {
                                                                                                                                                                                  type: 'Typography',
                                                                                                                                                                                  props: {
                                                                                                                                                                                    style: {
                                                                                                                                                                                      width: '100%',
                                                                                                                                                                                      display: 'flex',
                                                                                                                                                                                      justifyContent: 'center',
                                                                                                                                                                                      alignItems: 'center',
                                                                                                                                                                                    },
                                                                                                                                                                                    children:  [
                                                                                                                                                                                      {
                                                                                                                                                                                        type: "Grid",
                                                                                                                                                                                        props: {
                                                                                                                                                                                          style:{
                                                                                                                                                                                            width: '100%',
                                                                                                                                                                                            height: '100%'
                                                                                                                                                                                          },
                                                                                                                                                                                          spacing:0,
                                                                                                                                                                                          container: true,
                                                                                                                                                                                          children: [
                                                                                                                                                                                            {
                                                                                                                                                                                              type: "Grid",
                                                                                                                                                                                              props: {
                                                                                                                                                                                                xs: 12,
                                                                                                                                                                                                style: {
                                                                                                                                                                                                  height: '70px', 
                                                                                                                                                                                                  backgroundColor: 'rebeccapurple',
                                                                                                                                                                                                  display: 'flex',
                                                                                                                                                                                                  justifyContent: 'center',
                                                                                                                                                                                                  alignItems: 'center',
                                                                                                                                                                                                  color: 'white',
                                                                                                                                                                                                },
                                                                                                                                                                                                children: [
                                                                                                                                                                                                  {
                                                                                                                                                                                                    type: 'Typography',
                                                                                                                                                                                                    props: {
                                                                                                                                                                                                      children:  'Header'
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }],
                                                                                                                                                                                              }
                                                                                                                                                                                            },
                                                                                                                                                                                            {
                                                                                                                                                                                              type: "Grid",
                                                                                                                                                                                              props: {
                                                                                                                                                                                                style: {
                                                                                                                                                                                                  height: 'calc(100% - 70px)',
                                                                                                                                                                                                  background: 'aqua',
                                                                                                                                                                                                  display: 'flex',
                                                                                                                                                                                                  justifyContent: 'center',
                                                                                                                                                                                                  alignItems: 'center',
                                                                                                                                                                                                },
                                                                                                                                                                                                xs: 2,
                                                                                                                                                                                                children: [
                                                                                                                                                                                                  {
                                                                                                                                                                                                    type: 'Typography',
                                                                                                                                                                                                    props: {
                                                                                                                                                                                                      children:  'SideBar'
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }],
                                                                                                                                                                                              }
                                                                                                                                                                                            },
                                                                                                                                                                                            {
                                                                                                                                                                                              type: "Grid",
                                                                                                                                                                                              props: {
                                                                                                                                                                                                xs: 10,
                                                                                                                                                                                                style: {
                                                                                                                                                                                                  height: 'calc(100% - 70px)',
                                                                                                                                                                                                 
                                                                                                                                                                                                },
                                                                                                                                                                                                children: [
                                                                                                                                                                                                  {
                                                                                                                                                                                                    type: 'Typography',
                                                                                                                                                                                                    props: {
                                                                                                                                                                                                      style: {
                                                                                                                                                                                                        width: '100%',
                                                                                                                                                                                                        display: 'flex',
                                                                                                                                                                                                        justifyContent: 'center',
                                                                                                                                                                                                        alignItems: 'center',
                                                                                                                                                                                                      },
                                                                                                                                                                                                      children:  [
                                                                                                                                                                                                        {
                                                                                                                                                                                                          type: "Grid",
                                                                                                                                                                                                          props: {
                                                                                                                                                                                                            style:{
                                                                                                                                                                                                              width: '100%',
                                                                                                                                                                                                              height: '100%'
                                                                                                                                                                                                            },
                                                                                                                                                                                                            spacing:0,
                                                                                                                                                                                                            container: true,
                                                                                                                                                                                                            children: [
                                                                                                                                                                                                              {
                                                                                                                                                                                                                type: "Grid",
                                                                                                                                                                                                                props: {
                                                                                                                                                                                                                  xs: 12,
                                                                                                                                                                                                                  style: {
                                                                                                                                                                                                                    height: '70px', 
                                                                                                                                                                                                                    backgroundColor: 'rebeccapurple',
                                                                                                                                                                                                                    display: 'flex',
                                                                                                                                                                                                                    justifyContent: 'center',
                                                                                                                                                                                                                    alignItems: 'center',
                                                                                                                                                                                                                    color: 'white',
                                                                                                                                                                                                                  },
                                                                                                                                                                                                                  children: [
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                      type: 'Typography',
                                                                                                                                                                                                                      props: {
                                                                                                                                                                                                                        children:  'Header'
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                    }],
                                                                                                                                                                                                                }
                                                                                                                                                                                                              },
                                                                                                                                                                                                              {
                                                                                                                                                                                                                type: "Grid",
                                                                                                                                                                                                                props: {
                                                                                                                                                                                                                  style: {
                                                                                                                                                                                                                    height: 'calc(100% - 70px)',
                                                                                                                                                                                                                    background: 'aqua',
                                                                                                                                                                                                                    display: 'flex',
                                                                                                                                                                                                                    justifyContent: 'center',
                                                                                                                                                                                                                    alignItems: 'center',
                                                                                                                                                                                                                  },
                                                                                                                                                                                                                  xs: 2,
                                                                                                                                                                                                                  children: [
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                      type: 'Typography',
                                                                                                                                                                                                                      props: {
                                                                                                                                                                                                                        children:  'SideBar'
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                    }],
                                                                                                                                                                                                                }
                                                                                                                                                                                                              },
                                                                                                                                                                                                              {
                                                                                                                                                                                                                type: "Grid",
                                                                                                                                                                                                                props: {
                                                                                                                                                                                                                  xs: 10,
                                                                                                                                                                                                                  style: {
                                                                                                                                                                                                                    height: 'calc(100% - 70px)',
                                                                                                                                                                                                                   
                                                                                                                                                                                                                  },
                                                                                                                                                                                                                  children: [
                                                                                                                                                                                                                    {
                                                                                                                                                                                                                      type: 'Typography',
                                                                                                                                                                                                                      props: {
                                                                                                                                                                                                                        style: {
                                                                                                                                                                                                                          width: '100%',
                                                                                                                                                                                                                          display: 'flex',
                                                                                                                                                                                                                          justifyContent: 'center',
                                                                                                                                                                                                                          alignItems: 'center',
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        children:  [
                                                                                                                                                                                                                          {
                                                                                                                                                                                                                            type: "Grid",
                                                                                                                                                                                                                            props: {
                                                                                                                                                                                                                              style:{
                                                                                                                                                                                                                                width: '100%',
                                                                                                                                                                                                                                height: '100%'
                                                                                                                                                                                                                              },
                                                                                                                                                                                                                              spacing:0,
                                                                                                                                                                                                                              container: true,
                                                                                                                                                                                                                              children: [
                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                  type: "Grid",
                                                                                                                                                                                                                                  props: {
                                                                                                                                                                                                                                    xs: 12,
                                                                                                                                                                                                                                    style: {
                                                                                                                                                                                                                                      height: '70px', 
                                                                                                                                                                                                                                      backgroundColor: 'rebeccapurple',
                                                                                                                                                                                                                                      display: 'flex',
                                                                                                                                                                                                                                      justifyContent: 'center',
                                                                                                                                                                                                                                      alignItems: 'center',
                                                                                                                                                                                                                                      color: 'white',
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                    children: [
                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                        type: 'Typography',
                                                                                                                                                                                                                                        props: {
                                                                                                                                                                                                                                          children:  'Header'
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                      }],
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                  type: "Grid",
                                                                                                                                                                                                                                  props: {
                                                                                                                                                                                                                                    style: {
                                                                                                                                                                                                                                      height: 'calc(100% - 70px)',
                                                                                                                                                                                                                                      background: 'aqua',
                                                                                                                                                                                                                                      display: 'flex',
                                                                                                                                                                                                                                      justifyContent: 'center',
                                                                                                                                                                                                                                      alignItems: 'center',
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                    xs: 2,
                                                                                                                                                                                                                                    children: [
                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                        type: 'Typography',
                                                                                                                                                                                                                                        props: {
                                                                                                                                                                                                                                          children:  'SideBar'
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                      }],
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                  type: "Grid",
                                                                                                                                                                                                                                  props: {
                                                                                                                                                                                                                                    xs: 10,
                                                                                                                                                                                                                                    style: {
                                                                                                                                                                                                                                      height: 'calc(100% - 70px)',
                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                    children: [
                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                        type: 'Typography',
                                                                                                                                                                                                                                        props: {
                                                                                                                                                                                                                                          style: {
                                                                                                                                                                                                                                            width: '100%',
                                                                                                                                                                                                                                            display: 'flex',
                                                                                                                                                                                                                                            justifyContent: 'center',
                                                                                                                                                                                                                                            alignItems: 'center',
                                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                          children:  [
                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                              type: "Grid",
                                                                                                                                                                                                                                              props: {
                                                                                                                                                                                                                                                style:{
                                                                                                                                                                                                                                                  width: '100%',
                                                                                                                                                                                                                                                  height: '100%'
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                spacing:0,
                                                                                                                                                                                                                                                container: true,
                                                                                                                                                                                                                                                children: [
                                                                                                                                                                                                                                                  {
                                                                                                                                                                                                                                                    type: "Grid",
                                                                                                                                                                                                                                                    props: {
                                                                                                                                                                                                                                                      xs: 12,
                                                                                                                                                                                                                                                      style: {
                                                                                                                                                                                                                                                        height: '70px', 
                                                                                                                                                                                                                                                        backgroundColor: 'rebeccapurple',
                                                                                                                                                                                                                                                        display: 'flex',
                                                                                                                                                                                                                                                        justifyContent: 'center',
                                                                                                                                                                                                                                                        alignItems: 'center',
                                                                                                                                                                                                                                                        color: 'white',
                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                      children: [
                                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                                          type: 'Typography',
                                                                                                                                                                                                                                                          props: {
                                                                                                                                                                                                                                                            children:  'Header'
                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                        }],
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                  },
                                                                                                                                                                                                                                                  {
                                                                                                                                                                                                                                                    type: "Grid",
                                                                                                                                                                                                                                                    props: {
                                                                                                                                                                                                                                                      style: {
                                                                                                                                                                                                                                                        height: 'calc(100% - 70px)',
                                                                                                                                                                                                                                                        background: 'aqua',
                                                                                                                                                                                                                                                        display: 'flex',
                                                                                                                                                                                                                                                        justifyContent: 'center',
                                                                                                                                                                                                                                                        alignItems: 'center',
                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                      xs: 2,
                                                                                                                                                                                                                                                      children: [
                                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                                          type: 'Typography',
                                                                                                                                                                                                                                                          props: {
                                                                                                                                                                                                                                                            children:  'SideBar'
                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                        }],
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                  },
                                                                                                                                                                                                                                                  {
                                                                                                                                                                                                                                                    type: "Grid",
                                                                                                                                                                                                                                                    props: {
                                                                                                                                                                                                                                                      xs: 10,
                                                                                                                                                                                                                                                      style: {
                                                                                                                                                                                                                                                        height: 'calc(100% - 70px)',
                                                                                                                                                                                                                                                       
                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                      children: [
                                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                                          type: 'Typography',
                                                                                                                                                                                                                                                          props: {
                                                                                                                                                                                                                                                            style: {
                                                                                                                                                                                                                                                              width: '100%',
                                                                                                                                                                                                                                                              display: 'flex',
                                                                                                                                                                                                                                                              justifyContent: 'center',
                                                                                                                                                                                                                                                              alignItems: 'center',
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                            children:  [
                                                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                                                type: "Grid",
                                                                                                                                                                                                                                                                props: {
                                                                                                                                                                                                                                                                  style:{
                                                                                                                                                                                                                                                                    width: '100%',
                                                                                                                                                                                                                                                                    height: '100%'
                                                                                                                                                                                                                                                                  },
                                                                                                                                                                                                                                                                  spacing:0,
                                                                                                                                                                                                                                                                  container: true,
                                                                                                                                                                                                                                                                  children: [
                                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                                      type: "Grid",
                                                                                                                                                                                                                                                                      props: {
                                                                                                                                                                                                                                                                        xs: 12,
                                                                                                                                                                                                                                                                        style: {
                                                                                                                                                                                                                                                                          height: '70px', 
                                                                                                                                                                                                                                                                          backgroundColor: 'rebeccapurple',
                                                                                                                                                                                                                                                                          display: 'flex',
                                                                                                                                                                                                                                                                          justifyContent: 'center',
                                                                                                                                                                                                                                                                          alignItems: 'center',
                                                                                                                                                                                                                                                                          color: 'white',
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                        children: [
                                                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                                                            type: 'Typography',
                                                                                                                                                                                                                                                                            props: {
                                                                                                                                                                                                                                                                              children:  'Header'
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                          }],
                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                                      type: "Grid",
                                                                                                                                                                                                                                                                      props: {
                                                                                                                                                                                                                                                                        style: {
                                                                                                                                                                                                                                                                          height: 'calc(100% - 70px)',
                                                                                                                                                                                                                                                                          background: 'aqua',
                                                                                                                                                                                                                                                                          display: 'flex',
                                                                                                                                                                                                                                                                          justifyContent: 'center',
                                                                                                                                                                                                                                                                          alignItems: 'center',
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                        xs: 2,
                                                                                                                                                                                                                                                                        children: [
                                                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                                                            type: 'Typography',
                                                                                                                                                                                                                                                                            props: {
                                                                                                                                                                                                                                                                              children:  'SideBar'
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                          }],
                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                                      type: "Grid",
                                                                                                                                                                                                                                                                      props: {
                                                                                                                                                                                                                                                                        xs: 10,
                                                                                                                                                                                                                                                                        style: {
                                                                                                                                                                                                                                                                          height: 'calc(100% - 70px)',
                                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                        children: [
                                                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                                                            type: 'Typography',
                                                                                                                                                                                                                                                                            props: {
                                                                                                                                                                                                                                                                              style: {
                                                                                                                                                                                                                                                                                width: '100%',
                                                                                                                                                                                                                                                                                display: 'flex',
                                                                                                                                                                                                                                                                                justifyContent: 'center',
                                                                                                                                                                                                                                                                                alignItems: 'center',
                                                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                                                              children:  [
                                                                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                                                                  type: "Grid",
                                                                                                                                                                                                                                                                                  props: {
                                                                                                                                                                                                                                                                                    style:{
                                                                                                                                                                                                                                                                                      width: '100%',
                                                                                                                                                                                                                                                                                      height: '100%'
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    spacing:0,
                                                                                                                                                                                                                                                                                    container: true,
                                                                                                                                                                                                                                                                                    children: [
                                                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                                                        type: "Grid",
                                                                                                                                                                                                                                                                                        props: {
                                                                                                                                                                                                                                                                                          xs: 12,
                                                                                                                                                                                                                                                                                          style: {
                                                                                                                                                                                                                                                                                            height: '70px', 
                                                                                                                                                                                                                                                                                            backgroundColor: 'rebeccapurple',
                                                                                                                                                                                                                                                                                            display: 'flex',
                                                                                                                                                                                                                                                                                            justifyContent: 'center',
                                                                                                                                                                                                                                                                                            alignItems: 'center',
                                                                                                                                                                                                                                                                                            color: 'white',
                                                                                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                                                                          children: [
                                                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                                              type: 'Typography',
                                                                                                                                                                                                                                                                                              props: {
                                                                                                                                                                                                                                                                                                children:  'Header'
                                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                                            }],
                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                                                        type: "Grid",
                                                                                                                                                                                                                                                                                        props: {
                                                                                                                                                                                                                                                                                          style: {
                                                                                                                                                                                                                                                                                            height: 'calc(100% - 70px)',
                                                                                                                                                                                                                                                                                            background: 'aqua',
                                                                                                                                                                                                                                                                                            display: 'flex',
                                                                                                                                                                                                                                                                                            justifyContent: 'center',
                                                                                                                                                                                                                                                                                            alignItems: 'center',
                                                                                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                                                                          xs: 2,
                                                                                                                                                                                                                                                                                          children: [
                                                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                                              type: 'Typography',
                                                                                                                                                                                                                                                                                              props: {
                                                                                                                                                                                                                                                                                                children:  'SideBar'
                                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                                            }],
                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                                                        type: "Grid",
                                                                                                                                                                                                                                                                                        props: {
                                                                                                                                                                                                                                                                                          xs: 10,
                                                                                                                                                                                                                                                                                          style: {
                                                                                                                                                                                                                                                                                            height: 'calc(100% - 70px)',
                                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                                                                          children: [
                                                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                                              type: 'Typography',
                                                                                                                                                                                                                                                                                              props: {
                                                                                                                                                                                                                                                                                                style: {
                                                                                                                                                                                                                                                                                                  width: '100%',
                                                                                                                                                                                                                                                                                                  display: 'flex',
                                                                                                                                                                                                                                                                                                  justifyContent: 'center',
                                                                                                                                                                                                                                                                                                  alignItems: 'center',
                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                children:  [
                                                                                                                                                                                                                                                                                                  {
                                                                                                                                                                                                                                                                                                    type: "Grid",
                                                                                                                                                                                                                                                                                                    props: {
                                                                                                                                                                                                                                                                                                      style:{
                                                                                                                                                                                                                                                                                                        width: '100%',
                                                                                                                                                                                                                                                                                                        height: '100%'
                                                                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                                                                      spacing:0,
                                                                                                                                                                                                                                                                                                      container: true,
                                                                                                                                                                                                                                                                                                      children: [
                                                                                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                                                                                          type: "Grid",
                                                                                                                                                                                                                                                                                                          props: {
                                                                                                                                                                                                                                                                                                            xs: 12,
                                                                                                                                                                                                                                                                                                            style: {
                                                                                                                                                                                                                                                                                                              height: '70px', 
                                                                                                                                                                                                                                                                                                              backgroundColor: 'rebeccapurple',
                                                                                                                                                                                                                                                                                                              display: 'flex',
                                                                                                                                                                                                                                                                                                              justifyContent: 'center',
                                                                                                                                                                                                                                                                                                              alignItems: 'center',
                                                                                                                                                                                                                                                                                                              color: 'white',
                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                            children: [
                                                                                                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                                                                                                type: 'Typography',
                                                                                                                                                                                                                                                                                                                props: {
                                                                                                                                                                                                                                                                                                                  children:  'Header'
                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                              }],
                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                                                                                          type: "Grid",
                                                                                                                                                                                                                                                                                                          props: {
                                                                                                                                                                                                                                                                                                            style: {
                                                                                                                                                                                                                                                                                                              height: 'calc(100% - 70px)',
                                                                                                                                                                                                                                                                                                              background: 'aqua',
                                                                                                                                                                                                                                                                                                              display: 'flex',
                                                                                                                                                                                                                                                                                                              justifyContent: 'center',
                                                                                                                                                                                                                                                                                                              alignItems: 'center',
                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                            xs: 2,
                                                                                                                                                                                                                                                                                                            children: [
                                                                                                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                                                                                                type: 'Typography',
                                                                                                                                                                                                                                                                                                                props: {
                                                                                                                                                                                                                                                                                                                  children:  'SideBar'
                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                              }],
                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                                                                                          type: "Grid",
                                                                                                                                                                                                                                                                                                          props: {
                                                                                                                                                                                                                                                                                                            xs: 10,
                                                                                                                                                                                                                                                                                                            style: {
                                                                                                                                                                                                                                                                                                              height: 'calc(100% - 70px)',
                                                                                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                            children: [
                                                                                                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                                                                                                type: 'Typography',
                                                                                                                                                                                                                                                                                                                props: {
                                                                                                                                                                                                                                                                                                                  style: {
                                                                                                                                                                                                                                                                                                                    width: '100%',
                                                                                                                                                                                                                                                                                                                    display: 'flex',
                                                                                                                                                                                                                                                                                                                    justifyContent: 'center',
                                                                                                                                                                                                                                                                                                                    alignItems: 'center',
                                                                                                                                                                                                                                                                                                                  },
                                                                                                                                                                                                                                                                                                                  children:  [
                                                                                                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                                                                                                      type: "Grid",
                                                                                                                                                                                                                                                                                                                      props: {
                                                                                                                                                                                                                                                                                                                        style:{
                                                                                                                                                                                                                                                                                                                          width: '100%',
                                                                                                                                                                                                                                                                                                                          height: '100%'
                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                        spacing:0,
                                                                                                                                                                                                                                                                                                                        container: true,
                                                                                                                                                                                                                                                                                                                        children: [
                                                                                                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                                                                                                            type: "Grid",
                                                                                                                                                                                                                                                                                                                            props: {
                                                                                                                                                                                                                                                                                                                              xs: 12,
                                                                                                                                                                                                                                                                                                                              style: {
                                                                                                                                                                                                                                                                                                                                height: '70px', 
                                                                                                                                                                                                                                                                                                                                backgroundColor: 'rebeccapurple',
                                                                                                                                                                                                                                                                                                                                display: 'flex',
                                                                                                                                                                                                                                                                                                                                justifyContent: 'center',
                                                                                                                                                                                                                                                                                                                                alignItems: 'center',
                                                                                                                                                                                                                                                                                                                                color: 'white',
                                                                                                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                                                                                                              children: [
                                                                                                                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                                                                                                                  type: 'Typography',
                                                                                                                                                                                                                                                                                                                                  props: {
                                                                                                                                                                                                                                                                                                                                    children:  'Header'
                                                                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                                                                }],
                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                                                                                                            type: "Grid",
                                                                                                                                                                                                                                                                                                                            props: {
                                                                                                                                                                                                                                                                                                                              style: {
                                                                                                                                                                                                                                                                                                                                height: 'calc(100% - 70px)',
                                                                                                                                                                                                                                                                                                                                background: 'aqua',
                                                                                                                                                                                                                                                                                                                                display: 'flex',
                                                                                                                                                                                                                                                                                                                                justifyContent: 'center',
                                                                                                                                                                                                                                                                                                                                alignItems: 'center',
                                                                                                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                                                                                                              xs: 2,
                                                                                                                                                                                                                                                                                                                              children: [
                                                                                                                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                                                                                                                  type: 'Typography',
                                                                                                                                                                                                                                                                                                                                  props: {
                                                                                                                                                                                                                                                                                                                                    children:  'SideBar'
                                                                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                                                                }],
                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                                                                                                            type: "Grid",
                                                                                                                                                                                                                                                                                                                            props: {
                                                                                                                                                                                                                                                                                                                              xs: 10,
                                                                                                                                                                                                                                                                                                                              style: {
                                                                                                                                                                                                                                                                                                                                height: 'calc(100% - 70px)',
                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                                                                                                              children: [
                                                                                                                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                                                                                                                  type: 'Typography',
                                                                                                                                                                                                                                                                                                                                  props: {
                                                                                                                                                                                                                                                                                                                                    style: {
                                                                                                                                                                                                                                                                                                                                      width: '100%',
                                                                                                                                                                                                                                                                                                                                      display: 'flex',
                                                                                                                                                                                                                                                                                                                                      justifyContent: 'center',
                                                                                                                                                                                                                                                                                                                                      alignItems: 'center',
                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                    children:  'Body'
                                                                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                                                                }],
                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                  ]
                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                              }],
                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                      ]
                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                                            }],
                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                    ]
                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                              ]
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                          }],
                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                  ]
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                            ]
                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                        }],
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                          ]
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                      }],
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                              ]
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                        ]
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                    }],
                                                                                                                                                                                                                }
                                                                                                                                                                                                              }
                                                                                                                                                                                                            ]
                                                                                                                                                                                                          }
                                                                                                                                                                                                        }
                                                                                                                                                                                                      ]
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }],
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          ]
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    ]
                                                                                                                                                                                  }
                                                                                                                                                                                }],
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        ]
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  ]
                                                                                                                                                                }
                                                                                                                                                              }],
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      ]
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                ]
                                                                                                                                              }
                                                                                                                                            }],
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    ]
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              ]
                                                                                                                            }
                                                                                                                          }],
                                                                                                                      }
                                                                                                                    }
                                                                                                                  ]
                                                                                                                }
                                                                                                              }
                                                                                                            ]
                                                                                                          }
                                                                                                        }],
                                                                                                    }
                                                                                                  }
                                                                                                ]
                                                                                              }
                                                                                            }
                                                                                          ]
                                                                                        }
                                                                                      }],
                                                                                  }
                                                                                }
                                                                              ]
                                                                            }
                                                                          }
                                                                        ]
                                                                      }
                                                                    }],
                                                                }
                                                              }
                                                            ]
                                                          }
                                                        }
                                                      ]
                                                    }
                                                  }],
                                              }
                                            }
                                          ]
                                        }
                                      }
                                    ]
                                  }
                                }],
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }],
          }
        }
      ]
    }
  }
]

  function createJsx(layout) {
    const jsx = layout.map(element => {
      return createElement(getType(element.type), {
        ...element?.props,
        children : Array.isArray(element?.props?.children) ? createJsx(element?.props?.children): element?.props?.children
      })
    })
    return jsx
  }


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
        {createJsx(layout)}
    </React.Fragment>)
}

export default App;
