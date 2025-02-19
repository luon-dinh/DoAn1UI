export const createCookie = (name: any, value: any, days: any) => {
    let expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/;";
}

export const getCookie = (cname: any) => {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

export const removeCookie = (name: any) => {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


export const putArraytoLocalStorage = (name: any, values: any) => {
    localStorage.setItem(name, JSON.stringify(values));
}

export const getArrayfromLocalStorage = (name: any) => {
    let names = String(localStorage.getItem("names"));
    return JSON.parse(names);
}
