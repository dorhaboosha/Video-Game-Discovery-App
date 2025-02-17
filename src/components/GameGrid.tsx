
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContiner from './GameCardContiner';
import { GameQuery } from '../App';

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const {data, error, isLoading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4}} padding="10px" spacing={6}>
                {isLoading && skeletons.map((skeleton) => 
                <GameCardContiner key={skeleton}>
                    <GameCardSkeleton />
                </GameCardContiner>)}
                {data.map(game => (
                    <GameCardContiner key={game.id}>
                        <GameCard game={game} />
                    </GameCardContiner>
                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid