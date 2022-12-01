const Page = require('./page');

class TestPage extends Page {

    get inputUsername() {
        return $('#username');
    }

    open() {
        return super.open('login');
    }
}
module.exports = new LoginPage();