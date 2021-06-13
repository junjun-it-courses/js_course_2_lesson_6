let usersList = [
    {
        name: 'User Name',
        age: 10,
        gender: 'female'
    },
    {
        name: 'User Name',
        age: 26,
        gender: 'male'
    },
    {
        name: 'User Name',
        age: 19,
        gender: 'female'
    },
    {
        name: 'User Name',
        age: 26,
        gender: 'male'
    },
    {
        name: 'User Name',
        age: 19,
        gender: 'female'
    },
    {
        name: 'User Name',
        age: 30,
        gender: 'female'
    },
    {
        name: 'User Name',
        age: 21,
        gender: 'male'
    },
    {
        name: 'User Name',
        age: 40,
        gender: 'male'
    },    {
        name: 'User Name',
        age: 13,
        gender: 'female'
    },
    {
        name: 'User Name',
        age: 13,
        gender: 'male'
    },
    {
        name: 'User Name',
        age: 101,
        gender: 'female'
    },
    {
        name: 'User Name',
        age: 30,
        gender: 'female'
    },
    {
        name: 'User Name',
        age: 21,
        gender: 'male'
    },
    {
        name: 'User Name',
        age: 40,
        gender: 'male'
    },    {
        name: 'User Name',
        age: 13,
        gender: 'female'
    },
    {
        name: 'User Name',
        age: 13,
        gender: 'male'
    },
    {
        name: 'User Name',
        age: 101,
        gender: 'female'
    },
    {
        name: 'User Name',
        age: 120,
        gender: 'male'
    },
    {
        name: 'User Name',
        age: 38,
        gender: 'female'
    },
    {
        name: 'User Name',
        age: 34,
        gender: 'male'
    },
    {
        name: 'User Name',
        age: 101,
        gender: 'female'
    },
    {
        name: 'User Name',
        age: 120,
        gender: 'male'
    },
    {
        name: 'User Name',
        age: 38,
        gender: 'female'
    },
    {
        name: 'User Name',
        age: 34,
        gender: 'male'
    },
    {
        name: 'User Name',
        age: 40,
        gender: 'female'
    },

]
// {
//     name: 'User Name',
//     age: 10,
//     gender: 'female'
// },

function sort(arr, settings) {
    for(let i = 0; i <= arr.length - 1; i++) {
        if (
            arr[i].age >= settings.ageFrom &&
            arr[i].age <= settings.ageTo &&
            arr[i].gender === settings.gender
        ) {
            console.log(arr[i])
        }
    }
}


let settingsObj = {
    ageFrom: 20,
    ageTo: 50,
    gender: 'male'
}

sort(usersList, settingsObj);