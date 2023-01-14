var chart = JSC.chart('chartDiv', {
  debug: false,
  type: 'organizational down',
  legend_visible: false,

  series: [
    {
      defaultPoint: {
        focusGlow: { color: '%color', opacity: 0.3 },
        connectorLine: { color: '#004080', width: 1 },
        label: {
          text: '<b>%name</b><br/>%data<img margin_left=-60 margin_top=-64 width=64 height=64 src=%img>',
          autoWrap: false,
          color: '#004080',
          margin_left: 60,
          align: 'left'
        },
        annotation: {
          padding: 9,
          corners: 'round',
          radius: 15,
          margin: [15, 5, 10, 0]
        },
        outline_width: 0,
        color: '#b3d9ff',
        tooltip: "<b>Tasks:</b><br><span style='listStyleType: circle; listPadding: 0;'>%tasks</span>"
      },

      points: [
        {
          name: 'Margret Swanson',
          id: 'ms',
          color: '#0059b3',
          label_color: 'white',
          attributes: {
            img: '../samples/images/Org4.png',
            data: '<ul><li>President</li><li>630-555-1111</li><li><i>Batavia, IL</i></li></ul>',
            tasks: '<ul><li>Operations</li><li>Bookkeeping</li><li><i>Strategy</i></li></ul>'
          }
        },
        {
          name: 'Mark Hudson',
          id: 'mh',
          parent: 'ms',
          attributes: {
            img: '../samples/images/Org2.png',
            data:
              '<ul><li>Vice President Marketing</li><li>630-555-1111</li><li><i>Hanover Park, IL</i></li></ul>',
            tasks: '<ul><li>Product Strategy</li><li>Artistic Direction</li><li><i>Product Design</i></li></ul>'
          }
        },
        {
          name: 'Chris Lysek',
          id: 'cl',
          parent: 'ms',
          attributes: {
            img: '../samples/images/Org5.png',
            data: '<ul><li>Vice President Sales</li><li>630-555-2222</li><li><i>West Chicago, IL</i></li></ul>',
            tasks: '<ul><li>Sales HR</li><li>Market Development</li></ul>'
          }
        },
        {
          name: 'Karyn Borbas',
          id: 'kb',
          parent: 'mh',
          attributes: {
            img: '../samples/images/Org7.png',
            data: '<ul><li>Marketing Manager</li><li>312-555-3333</li><li><i>Chicago, IL</i></li></ul>',
            tasks: '<ul><li>Purchasing</li><li>Review</li></ul>'
          }
        },
        {
          name: 'Chris Rup',
          id: 'cr',
          parent: 'mh',
          attributes: {
            img: '../samples/images/Org3.png',
            data: '<ul><li>Marketing Manager</li><li>773-555-4444</li><li><i>Chicago, IL</i></li></ul>',
            tasks: '<ul><li>Marketing HR</li><li>Market Research</li></ul>'
          }
        }
      ]
    }
  ]
});