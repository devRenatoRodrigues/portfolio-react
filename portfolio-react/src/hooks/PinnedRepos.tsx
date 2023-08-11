import { useEffect, useState } from "react";
import fetchGithub from "../API/fetchGithub";
import { Repository } from "../types/Repository";

export default function PinnedRepos() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    const username = 'devRenatoRodrigues';
    useEffect(() => {
        const fetchPinnedRepos = async () => {
            const pinnedRepositories = await fetchGithub(username);
            setRepositories(pinnedRepositories);
        };
        fetchPinnedRepos();
    }, [username]);

    return (
        <div>
            <h2 className="text-color-white ">My Works</h2>
            <ul>
                {repositories.map((repo: Repository) => (
                    <li
                        className="text-color-white"
                        key={repo.id}>
                        {repo.name}
                        {repo.html_url}
                        {repo.homepage}
                    </li>
                ))}
            </ul>
        </div>
    );
}