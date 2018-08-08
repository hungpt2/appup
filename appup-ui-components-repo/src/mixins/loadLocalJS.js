/**
 * @mixin
 */
export const AddLocalJs = {
    methods: {

        addLocalJS() {
            //get JS from api
            // Create the element

            var script = document.createElement('script');

            // Add script content

            script.innerHTML = '...'; // fetch data with api

            // Append

            document.head.appendChild(script);
        }

    }
};
