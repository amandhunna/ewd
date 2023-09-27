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
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
            children: [
              {
                type: 'Typography',
                props: {
                  style: {
                    width: '100%'
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

const getLayout = () => {
  return layout
}

export default getLayout;