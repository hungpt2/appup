### Code Examples

```vue
<template>
  <div>
    <h5>HTML Code Block</h5>
    <appup-code
      type="html"
      v-model="htmlCode"/>

    <br/>
    <h5>Javascript Code Block</h5>
    <appup-code
      type="js"
      v-model="jsCode"/>

    <br/>
    <h5>CSS Code Block</h5>
    <appup-code
      type="css"
      v-model="cssCode"/>
  </div>
</template>

<script>

export default {
    data () {
        return {
        }
    },
    computed: {
        htmlCode: function() {
            return `<HTML>
  <HEAD>
      <TITLE>Your Title Here</TITLE>
  </HEAD>
  <BODY BGCOLOR="FFFFFF">
      <CENTER><IMG SRC="clouds.jpg" ALIGN="BOTTOM"> </CENTER>
      <HR>
      <a href="http://somegreatsite.com">Link Name</a>
      is a link to another nifty site
      <H1>This is a Header</H1>
      <H2>This is a Medium Header</H2>
      Send me mail at <a href="mailto:support@yourcompany.com">
      support@yourcompany.com</a>.
      <P> This is a new paragraph!
      <P> <B>This is a new paragraph!</B>
        <BR> <B><I>This is a new sentence without a paragraph break, in bold italics.</I></B>
      <HR>
  </BODY>
</HTML>`;
        },
        jsCode: function() {
            return `var x = myFunction(4, 3);
document.getElementById("demo").innerHTML = x;

function myFunction(a, b) {
    return a * b;
}

var x = myFunction(4, 3);
document.getElementById("demo").innerHTML = x;

function myFunction(a, b) {
    return a * b;
}`;
        },
        cssCode: function() {
            return `div {
    border: 1px solid black;
    margin-top: 100px;
    margin-bottom: 100px;
    margin-right: 150px;
    margin-left: 80px;
    background-color: lightblue;
}

div {
    border: 1px solid red;
    margin-left: 100px;
}

p.ex1 {
    margin-left: inherit;
}`;
        }
    }

}
</script>
```