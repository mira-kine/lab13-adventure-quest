export function generateUser(formData){
    return {
        completed: {},
        yen: 20000,
        happymeter: 0,
        name: formData.get('name'),
        avatar: formData.get('avatar'),
    };
}

export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem('USER', userString);
}