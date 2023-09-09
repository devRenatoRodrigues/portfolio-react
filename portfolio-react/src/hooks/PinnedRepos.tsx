import { useEffect, useState } from "react";
import fetchGithub from "../API/fetchGithub";
import { Repository } from "../types/Repository";
import { removePinAndHyphens } from "../utils/formatName";

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
            <ul className="grid grid-cols-3 gap-4 place-items-start">
                {repositories.map((repo: Repository) => (
                    <li
                        className="text-color-white px-6 py-4"
                        key={repo.id}>
                        <h4 className="font-bold text-xl mb-2">{removePinAndHyphens(repo.name)}</h4>
                        <a href={repo.html_url} className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
<span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
<span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
<span className="relative">Repositorio</span>
</a>

                        {' '}
                        <a href={repo.homepage} className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
<span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
<span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
<span className="relative">Deployed</span>
</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}