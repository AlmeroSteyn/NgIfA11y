"use strict";
var AccountData = (function () {
    function AccountData() {
    }
    AccountData.prototype.createDb = function () {
        var account = { id: '1', name: 'Fred', surname: 'Krueger', status: 'Disabled' };
        return { account: account };
    };
    return AccountData;
}());
exports.AccountData = AccountData;
//# sourceMappingURL=account-data.js.map