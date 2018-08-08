###### Html code

```vue
  <template>
    <div>
        <h5>Sample One</h5>
        <appup-html 
            :content=sample1
        />
        <hr/>
        <h5>Sample Two</h5>
        <appup-html 
            :content=sample2
        />
    </div>
</template>
<script>

export default {    
    data () {
        return {
            sample1: `
                <HTML>
                    <HEAD>
                        <TITLE>Your Title Here</TITLE>
                    </HEAD>
                    <BODY BGCOLOR="FFFFFF">
                        <CENTER><IMG SRC="http://localhost:3000/profilepic.jpg" ALIGN="BOTTOM" height="300" width="300"> </CENTER>
                        <a href="http://somegreatsite.com">Link Name</a>
                        is a link to another nifty site
                        <H1>This is a Header</H1>
                        <H2>This is a Medium Header</H2>
                        Send me mail at <a href="mailto:support@yourcompany.com">
                        support@yourcompany.com</a>.
                        <P> This is a new paragraph!
                        <P> <B>This is a new paragraph!</B>
                        <BR> <B><I>This is a new sentence without a paragraph break, in bold italics.</I></B>
                    </BODY>
                </HTML>
            `,
            sample2: `<iframe src="http://localhost:3000/iframecontent.html" height="300" width="400"></iframe>`
        }
    },
    computed: {
        
    },
    methods: {
            
    }
}
</script>

```