module.exports = app => {
    app.beforeStart(async () => {
        app.db_guess = app.mysql.get('guess');
    });
};
