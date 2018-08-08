module.exports = (app, baseurl) => {
    require('./login')(app, baseurl);

    require('./user')(app, baseurl);
}