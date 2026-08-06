import { test, expect } from '@playwright/test';


test('Generate Invoice API', async ({request})=>{


// Login

const loginResponse = await request.post(
'https://api.practicesoftwaretesting.com/users/login',
{
data:{
   email: 'customer@practicesoftwaretesting.com',
        password: 'welcome01'
}
});


const loginBody = await loginResponse.json();

const token = loginBody.access_token;



// Create Cart

const cartResponse = await request.post(
'https://api.practicesoftwaretesting.com/carts',
{
headers:{
Authorization:`Bearer ${token}`
}
});


const cartBody = await cartResponse.json();

const cartId = cartBody.id;



console.log("Cart ID:",cartId);



});