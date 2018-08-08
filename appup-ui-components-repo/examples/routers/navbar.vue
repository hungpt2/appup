<template>
    <div>
        <appup-navbar
            :brand-info="brandInfo"
            :left-controls="leftControls"
            :right-controls="rightControls"/>
    </div>
</template>
<script>
import { Navbar } from 'appup';
export default {
    components: { Navbar },
    data () {
        return {
            brandInfo: {
                name: "",
                link_to: "#",
                image: "https://www.agilecrm.com/img/agilecrmlogo.svg",
                image_alt: "Agile CRM"
            },
            leftControls: [
                {
                    type: "link",
                    label: "Pages",
                    icon: "file",
                    link_to: "#"
                },
                {
                    type: "link",
                    label: "Blocks",
                    icon: "th-large"
                }
            ],
            rightControls: [
                {
                    type: "dropdown",
                    label: "Madan",
                    image: "http://agilecrm.dash.sweet-simple.com/assets/img/human01.jpg",
                    items: [
                        {
                            type: "link",
                            label: "Profile",
                            link_to: "#"
                        },
                        {
                            type: "link",
                            label: "Signout",
                            link_to: "#"
                        }
                    ]
                }
            ]
        }
    },
    computed: {
        
    },
    methods: {
            
    }
}
</script>
