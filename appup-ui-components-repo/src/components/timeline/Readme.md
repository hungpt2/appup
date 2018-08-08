### Differnt types of Timelines

```vue
<template>
    <div class="row">
        <div class="col-md-3">
            <appup-timeline
                :timelines=basictimelines>          
            </appup-timeline>
        </div>
        <div class="col-md-6">
            <appup-timeline
                :timelines=htmltimelines>          
            </appup-timeline>
        </div>
        <div class="col-md-3">
            <appup-timeline
                :timelines=extratimelines>          
            </appup-timeline>
        </div>
    </div>   
</template>
<script>
export default {
    data () {
        return {
            basictimelines: [{
                    type: 'title',
                    message:'2018',
                    tooltip: 'Hello World'
                },{
                    type: 'item',
                    message:'Example timeline text'
                },{
                    type: 'item',
                    message:'Time line item with image',
                    image: 'https://user-images.githubusercontent.com/12069729/36057805-80cfc3d2-0e4e-11e8-8851-6fda091ff389.png'
                },{
                    type: 'title',
                    message:'<h1 style="color:blue;">2017</h1>',
                    color: 'blue',
                    html: true
                },{
                    type: 'item',
                    message:'<p>I am <a href="https://google.com">Link</a></p><p>HTML code</p>',
                    html: true
                },{
                    type: 'item',
                    message:'<p>I am <a href="https://google.com">Link</a></p><p>HTML code with image.</p>',
                    image: 'https://user-images.githubusercontent.com/12069729/36057805-80cfc3d2-0e4e-11e8-8851-6fda091ff389.png',
                    html: true
                }
            ],
            htmltimelines: [{
                    type: 'title',
                    message:'2018'                   
                },{
                    type: 'item',
                    message:`<h6><b>Sep 9th,2018</b></h6><div style="background-color:#F9F5F4;color:#222;padding:20px;">
                            <h5>Lorem ipsum dolor sit amet</h5>
                            <p>Aliquam non tortor egestas, eleifend massa at, imperdiet ligula.</p>
                            </div>`,
                    html: true
                },{
                    type: 'item',
                    message:`<h6><b>Oct 9th,2018</b></h6><div style="background-color:#F9F5F4;color:#222;padding:20px;">
                            <h5>Nunc vel semper augue</h5>
                            <p>In pulvinar cursus risus, vitae ultrices purus ultrices nec.</p>
                            </div>`,
                    html: true
                },{
                    type: 'item',
                    message:`<h6><b>Nov 9th,2018</b></h6><div style="background-color:#F9F5F4;color:#222;padding:20px;">
                            <h5>Proin congue egestas diam a efficitur</h5>
                            <p>Morbi id efficitur lorem. Mauris vel malesuada diam.</p>
                            </div>`,
                    html: true
                },{
                    type:'title',
                    message:'2017'
                },{
                    type: 'item',
                    message:'<p>I am <a href="https://google.com">link</a></p><p>A tool to create a lovely resume just with a config file.</p>',
                    html: true
                }
            ],
            extratimelines: [{
                    type: 'title',
                    message:'2018',
                    tooltip: 'Hello World'
                },{
                    type: 'item',
                    message:'Timeline item with tooltip',
                    tooltip: 'Tooltip text'
                },{
                    type: 'item',
                    message:'Timeline image with tooltip',
                    tooltip: 'Tooltip text',
                    image: 'https://user-images.githubusercontent.com/12069729/36057805-80cfc3d2-0e4e-11e8-8851-6fda091ff389.png'
                },
            ]
        }
    },
    computed: {
        
    },
    methods: {
      
    }
}
</script>
```