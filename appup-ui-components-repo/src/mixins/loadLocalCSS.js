/**
 * @mixin
 */
export const AddLocalCss = {
    methods: {

        addLocalCSS() {
            //get CSS from api
            let css = [
                    '/css/default.css',
                    '/css/section.css',
                    '/css/custom.css'
                ],
                i = 0,
                link = document.createElement('link'),
                head = document.getElementsByTagName('head')[0],
                tmp;
            link.rel = 'stylesheet';

            for (; i < css.length; i++) {
                tmp = link.cloneNode(true);
                tmp.href = css[i];
                head.appendChild(tmp);
            }
        }

    }
};
