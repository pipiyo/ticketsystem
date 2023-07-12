// Service class for managing API calls related to Randon users
export class RandomUserService {
  // Fetch one random user from API
  async getRandomUser() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${Math.round(
        Math.random() * 10
      )}`
    );
    const data = await response.json();
    return data;
  }
}
