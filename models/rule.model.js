class Rule {

    constructor(id, name, code, status, call, search, message, files, idRule) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.status = status;
        this.call = call;
        this.search = search;
        this.message = message;
        this.files = files;
        this.idRule = idRule
    }
}

module.exports = Rule;