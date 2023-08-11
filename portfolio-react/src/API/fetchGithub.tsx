import axios from "axios";
import { Repository } from "../types/Repository";

export default async function fetchGithub(username: string): Promise<Repository[]> {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        const repositories: Repository[] = response.data;
        const pinnedRepositories = repositories.filter(repo => repo.name.includes('pin'));
        return pinnedRepositories;
    } catch (error) {
        console.error('Erro ao obter repositórios:', error);
        throw error;
    }
}
