const crypto = require('crypto');

module.exports = {
    md5: function (data) {
        var obj = crypto.createHash('md5');
        obj.update(data+'dgdst843fiy38BCDUdr239');
        return obj.digest('hex');
    }
};