import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = process.env.EXPO_PUBLIC_DJANGO_API_URL;


class AuthService
{
// Registering a new user 
    async register(userData: any) {
        const response = await fetch(`${API_URL}signup/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        if (!response.ok) {
            throw data;
        }
        if (data.access) {
           await this.setToken(data.access, data.refresh);
        }
        return data;
    }
    async login(email: string, password: string) {
        const response = await fetch(`${API_URL}login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = await response.json();
        if (!response.ok) {
            throw data;
        }
        if (data.access) {
           await this.setToken(data.access, data.refresh);
        }
        return data;
    }

    async getProfile() {
        const token = await this.getAccessToken();
        const response = await fetch(`${API_URL}profile/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        if (!response.ok) {
            throw data;
        }
        return data;
    }
    async logout() {

        const refresh = await this.getRefreshToken();
        if(refresh){
        try{
            await fetch(`${API_URL}logout/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    refresh
                })
            });
        } catch(error){
            console.error("Logout error", error);
        }
    }
      await this.clearTokens();
    }

    async refreshToken() {
        const refresh =  await this.getRefreshToken();
        if (!refresh) {
            throw new Error('No refresh token found');
        }
        const response = await fetch(`${API_URL}token/refresh/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                refresh
            })
        });
        const data = await response.json();
        if (!response.ok) {
            throw data;
        }
        await this.setToken(data.access, data.refresh);
        return data;
    }

    async setToken(accessToken: string, refreshToken: string) 
    {
      await  AsyncStorage.setItem('access', accessToken);
        await AsyncStorage.setItem('refresh', refreshToken);
    }

    async getAccessToken() 
    {
        return  await AsyncStorage.getItem('access');
    }

    async getRefreshToken()
     {
        return await AsyncStorage.getItem('refresh');
    }

    async clearTokens() 
    {
       await AsyncStorage.removeItem('access');
        await AsyncStorage.removeItem('refresh');
    }
    async isAuthenticated() {
        const token = await this.getAccessToken();
        return token !== null;
    }
}

export default new AuthService();
