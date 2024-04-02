// import data from '@/mocks/blocklist.json'

const fetchUser = async (username) => {
  try { 
    const response = await fetch(process.env.JSON_URL)
    if(!response.ok) {
      throw new Error('failed to fetch data')
    }
    const data = await response.json()
    return Object.keys(data).includes(username)
  } catch(error) {
    console.error(error);
  }
}

export default fetchUser