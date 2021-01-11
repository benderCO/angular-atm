var faker = require('faker');

var database = {
    "atmstock": [
        {
            "id": "308c3c1e-aa37-4b20-ba54-36a471d9f76c",
            "currencyType": "hundred",
            "value": 100,
            "count": 10
        },
        {
            "id": "92833b43-b9fb-4e0f-b427-72f2943ca75c",
            "currencyType": "fifty",
            "value": 50,
            "count": 10
        },
        {
            "id": "79061de8-f47e-4213-8987-46dc9e02fd08",
            "currencyType": "twenty",
            "value": 20,
            "count": 10
        },
        {
            "id": "b8ecd733-c148-49d9-89b9-35abf5e59f38",
            "currencyType": "ten",
            "value": 10,
            "count": 10
        },
        {
            "id": "682d229c-3f91-4477-befa-32b0534f84a1",
            "currencyType": "five",
            "value": 5,
            "count": 10
        },
        {
            "id": "410ce3d9-df57-4167-b91f-3a239f013ead",
            "currencyType": "two",
            "value": 2,
            "count": 5
        },
        {
            "id": "243ffa1d-d81c-4b94-838d-71ed5bb8e3c2",
            "currencyType": "dollar",
            "value": 1,
            "count": 10
        }
    ],
    "userList": [
        {
            "id": "3fedffaf-e90a-4935-95e7-46ff29886d11",
            "username": "Clint.Barton@gmail.com",
            "password": "abc123!!",
            "userType": 1,
            "lastName": "Barton",
            "firstName": "Clint",
            "accountBalance": 125043
        },
        {
            "id": "1bc8eb6c-2a74-430a-ad4d-796e7152d687",
            "username": "Scott.Lang@gmail.com",
            "password": "abc123!!",
            "userType": 1,
            "lastName": "Lang",
            "firstName": "Scott",
            "accountBalance": 12354
        },
        {
            "id": "2618da68-842c-4bf5-9214-63337f1ee8e6",
            "username": "Wanda.Maximoff@gmail.com",
            "password": "abc123!!",
            "userType": 1,
            "lastName": "Maximoff",
            "firstName": "Wanda",
            "accountBalance": 65464
        },
        {
            "id": "602ce9df-0e23-41c2-8296-33997e2c20c5",
            "username": "Bucky.Barnes@gmail.com",
            "password": "abc123!!",
            "userType": 1,
            "lastName": "Barnes",
            "firstName": "Bucky",
            "accountBalance": 34534533
        },
        {
            "id": "44dbbd9a-e057-4a60-be06-811317c33635",
            "username": "Peter.Quill@gmail.com",
            "password": "abc123!!",
            "userType": 1,
            "lastName": "Quill",
            "firstName": "Peter",
            "accountBalance": 99999999999
        },
        {
            "id": "ff30d5f0-075a-4d10-8639-8655dd96c0e9",
            "username": "Bruce.Banner@gmail.com",
            "password": "abc123!!",
            "userType": 2,
            "lastName": "Banner",
            "firstName": "Bruce"
        },
        {
            "id": "f4706cea-1780-45fe-817a-dccfa3b429d7",
            "username": "Peter.Parker@gmail.com",
            "password": "abc123!!",
            "userType": 2,
            "lastName": "Banner",
            "firstName": "Bruce"
        },
        {
            "id": "a5f6b15a-49e0-4246-b0a4-55f20a8c8cf0",
            "username": "Steve.Rogers@gmail.com",
            "password": "abc123!!",
            "userType": 2,
            "lastName": "Rogers",
            "firstName": "Steve"
        },
        {
            "id": "1397a524-34b1-42a0-bbbb-98b3f5c78330",
            "username": "Doctor.Strange@gmail.com",
            "password": "abc123!!",
            "userType": 3,
            "lastName": "Strange",
            "firstName": "Doctor"
        },
        {
            "id": "4729b96a-3b54-4b1e-a010-1a7c04cd59f8",
            "username": "Tony.Stark@gmail.com",
            "password": "abc123!!",
            "userType": 3,
            "lastName": "Stark",
            "firstName": "Tony"
        },
        {
            "id": "958e1baa-0293-4fc1-94c4-c1a174bf83ca",
            "username": "Natasha.Romanoff@gmail.com",
            "password": "abc123!!",
            "userType": 3,
            "lastName": "Romanoff",
            "firstName": "Natasha"
        }
    ],
    "transactionhistory": []
}

console.log(JSON.stringify(database));
