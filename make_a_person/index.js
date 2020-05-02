let Person = function (firstAndLast) {
    let first = firstAndLast.split(' ').splice(0, 1).join('');
    let last = firstAndLast.split(' ').splice(1).join('');

    this.getFirstName = function () {
        return first;
    }
    this.getLastName = function () {
        return last;
    }
    this.getFullName = function () {
        return `${first} ${last}`;
    };
    this.setFirstName = function (string) {
        first = string;
    }
    this.setLastName = function (string) {
        last = string;
    }
    this.setFullName = function (string) {
        first = string.split(' ').splice(0, 1).join('');
        last = string.split(' ').splice(1).join('');
    }
};

var bob = new Person('Bob Ross');
bob.setFullName('Bob Ross');

