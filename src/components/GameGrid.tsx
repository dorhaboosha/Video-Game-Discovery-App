
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContiner from './GameCardContiner';

const GameGrid = () => {
    const {data, error, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5}} padding="10px" spacing={3}>
                {isLoading && skeletons.map((skeleton) => <GameCardContiner><GameCardSkeleton key={skeleton} /></GameCardContiner>)}
                {data.map(game => (
                    <GameCardContiner><GameCard key={game.id} game={game} /></GameCardContiner>
                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid