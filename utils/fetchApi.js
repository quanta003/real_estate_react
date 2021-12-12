import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
      const { data } = await axios.get((url), {
            headers: {
                  'x-rapidapi-host': 'bayut.p.rapidapi.com',
                  'x-rapidapi-key':
                  'f44f9f0589msh4eea3804af86da2p1c5877jsnb5e9124b2e30'
            }
      });

      return data;
}